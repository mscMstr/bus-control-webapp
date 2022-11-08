import config
import pandas as pd
import pendulum
import click

@click.command()
@click.option('--name',default='joseph', help='real_time_{db_name}')
@click.option('--run_nr', prompt='Run number', help='int(3)')
@click.option('--t_due', prompt='Time due', help='int(3) or int(4)')
@click.option('--hold_time',prompt='Hold time instructed', help='int(3) or int(4)')
@click.option('--time_instr',prompt='Time at which instructed', help='int(3) or int(4)')
@click.option('--verified',prompt='Verified?(1 if true 0 if no)', help='int(1)')

def mid_actions(run_nr, t_due, hold_time, time_instr, name, verified, dt_now=pendulum.now('America/Chicago').replace(tzinfo=None)):
    db_name = 'real_time_' + name
    table_name = 'Jpk_RT_' + dt_now.strftime('%m%d')
    q = f"""
    SELECT * 
    FROM {db_name}.{table_name}
    """
    run_str = 'F' + str(run_nr)
    t_due_str = str(t_due)
    t_instr = str(time_instr)

    # convert times
    if len(t_due_str)==3:   
        t_due_str = '0' + t_due_str[:1] + ':' + t_due_str[1:]
    else:
        t_due_str = t_due_str[:2] + ':' + t_due_str[2:]

    if len(t_instr)==3:
        t_instr = '0' + t_instr[:1] + ':' + t_instr[1:]
    elif len(t_instr)==4:
        t_instr = t_instr[:2] + ':' + t_instr[2:]
    elif len(t_instr)==5:
        t_instr = '0' + t_instr[:1] + ':' + t_instr[1:3] + ':' + t_instr[3:]
    elif len(t_instr)==6:
        t_instr = t_instr[:2] + ':' + t_instr[2:4] + ':' + t_instr[4:]
    
    t_instr_str = dt_now.strftime('%Y%m%d') + ' ' + t_instr
    
    df_db = pd.read_sql(q, con=config.instance_url + db_name)

    idx_refresh = df_db.loc[(df_db['run']==run_str) & (df_db['s_time']==t_due_str)].index[0]

    df_db.loc[idx_refresh, 't_mid_ht'] = pd.to_datetime(t_instr_str)
    df_db.loc[idx_refresh, 'mid_ht'] = hold_time
    if not df_db.empty:
        df_db.to_sql(table_name, con=config.instance_url + db_name, if_exists='replace', index=False)
    else:
        print('produced empty dashboard. Did not refresh')
    return 
    # return df_db

if __name__ == '__main__':
    mid_actions()
