import config
import pandas as pd
import pendulum
import click

@click.command()
@click.option('--name',default='joseph', help='real_time_{db_name}')
@click.option('--run_nr', prompt='Run number', help='int(3)')
@click.option('--t_due', prompt='Time due', help='int(3) or int(4)')
@click.option('--is_off',prompt='1 to cancel 0 to fill', help='bool or int(1)')

def run_status(run_nr, t_due, is_off, name, dt_now=pendulum.now('America/Chicago').replace(tzinfo=None)):
    db_name = 'real_time_' + name
    table_name = 'Jpk_RT_' + dt_now.strftime('%m%d')
    q = f"""
    SELECT * 
    FROM {db_name}.{table_name}
    """
    run_str = 'F' + str(run_nr)

    t_str = str(t_due)
    if len(t_str)==3:   
        t_str = '0' + t_str[:1] + ':' + t_str[1:]
    else:
        t_str = t_str[:2] + ':' + t_str[2:]
    df_db = pd.read_sql(q, con=config.instance_url + db_name)

    idx = df_db.loc[(df_db['run']==run_str) & (df_db['s_time']==t_str)].index[0]

    if int(is_off)==1:
        print('canceling')
        df_db.loc[(df_db['run']==run_str) & (df_db.index==idx), 'off'] = 1
    else:
        print('filling')
        df_db.loc[(df_db['run']==run_str) & (df_db.index==idx), 'off'] = 0
    print(df_db.loc[(df_db['run']==run_str) & (df_db.index==idx), ['run', 's_time', 'off']])
    df_db.to_sql(table_name, con=config.instance_url + db_name, if_exists='replace', index=False)
    return

if __name__ == '__main__':
    run_status()
