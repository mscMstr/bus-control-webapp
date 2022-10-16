from curses import newpad
import config
import pandas as pd
import pendulum
import click

@click.command()
@click.option('--name',default='joseph', help='real_time_{db_name}')
@click.option('--run_nr', prompt='Run number', help='int(3)')
@click.option('--t_due', prompt='Time due', help='int(3) or int(4)')
@click.option('--t_act',prompt='Actual time', help='int(3) or int(4)')

def actions(run_nr, t_due, t_act, name, dt_now=pendulum.now('America/Chicago').replace(tzinfo=None)):
    db_name = 'real_time_' + name
    table_name = 'Jpk_RT_' + dt_now.strftime('%m%d')
    q = f"""
    SELECT * 
    FROM {db_name}.{table_name}
    """
    run_str = 'F' + str(run_nr)
    t_due_str = str(t_due)
    new_dep_t_str = str(t_act)

    if len(t_due_str)==3:   
        t_due_str = '0' + t_due_str[:1] + ':' + t_due_str[1:]
    else:
        t_due_str = t_due_str[:2] + ':' + t_due_str[2:]

    if len(new_dep_t_str)==3:
        new_dep_t_str = '0' + new_dep_t_str[:1] + ':' + new_dep_t_str[1:]
    elif len(new_dep_t_str)==4:
        new_dep_t_str = new_dep_t_str[:2] + ':' + new_dep_t_str[2:]
    elif len(new_dep_t_str)==5:
        new_dep_t_str = '0' + new_dep_t_str[:1] + ':' + new_dep_t_str[1:3] + ':' + new_dep_t_str[3:]
    elif len(new_dep_t_str)==6:
        new_dep_t_str = new_dep_t_str[:2] + ':' + new_dep_t_str[2:4] + ':' + new_dep_t_str[4:]
    
    dt_str = dt_now.strftime('%Y%m%d') + ' ' + new_dep_t_str
     
    df_db = pd.read_sql(q, con=config.instance_url + db_name)

    idx_refresh = df_db.loc[(df_db['run']==run_str) & (df_db['s_time']==t_due_str)].index[0]
    p_time_dt =df_db.loc[idx_refresh, 'p_time_dt']
    s_time_dt = df_db.loc[idx_refresh, 's_time_dt']

    if p_time_dt >= s_time_dt:
        df_db.loc[idx_refresh, 'a_time_dt'] = pd.to_datetime(dt_str)
        df_db.loc[idx_refresh, 'a_time'] = df_db.loc[idx_refresh, 'a_time_dt'].strftime('%H:%M')
        df_db.loc[idx_refresh, 'a_act'] = int(((df_db.loc[idx_refresh, 'a_time_dt'] - p_time_dt).total_seconds()/60))
        df_db.loc[idx_refresh, 'a_hw'] = df_db.loc[idx_refresh, 'p_hw'].copy() + df_db.loc[idx_refresh, 'a_act'].copy()
        df_db.loc[idx_refresh, 'a_fhw'] = df_db.loc[idx_refresh, 'p_fhw'].copy() - df_db.loc[idx_refresh, 'a_act'].copy()
        df_db.loc[idx_refresh, 'a_hws'] = df_db.loc[idx_refresh, 'a_hw'].astype(int).astype(str) + '/' + df_db.loc[idx_refresh, 'a_fhw'].astype(int).astype(str)
        df_db.loc[idx_refresh, 'a_dev'] = df_db.loc[idx_refresh, 'p_dev'].copy() + df_db.loc[idx_refresh, 'a_act'].copy()
    else:
        # in case there were no predictions received for some reason!
        df_db.loc[idx_refresh, 'a_time_dt'] = pd.to_datetime(dt_str)
        df_db.loc[idx_refresh, 'a_time'] = df_db.loc[idx_refresh, 'a_time_dt'].strftime('%H:%M')
        df_db.loc[idx_refresh, 'a_act'] = int(((df_db.loc[idx_refresh, 'a_time_dt'] - s_time_dt).total_seconds()/60))
        df_db.loc[idx_refresh, 'a_hw'] = df_db.loc[idx_refresh, 's_hw'].copy() + df_db.loc[idx_refresh, 'a_act'].copy()
        df_db.loc[idx_refresh, 'a_fhw'] = df_db.loc[idx_refresh, 's_fhw'].copy() - df_db.loc[idx_refresh, 'a_act'].copy()
        df_db.loc[idx_refresh, 'a_hws'] = df_db.loc[idx_refresh, 'a_hw'].astype(int).astype(str) + '/' + df_db.loc[idx_refresh, 'a_fhw'].astype(int).astype(str)
        df_db.loc[idx_refresh, 'a_dev'] = df_db.loc[idx_refresh, 'a_act'].copy()

    df_db.to_sql(table_name, con=config.instance_url + db_name, if_exists='replace', index=False)
    return 
    # return df_db

if __name__ == '__main__':
    actions()
