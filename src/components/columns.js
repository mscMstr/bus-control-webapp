export const COLUMNS = [
    {
        Header: 'Run',
        accessor: 'run'
    },
    {
        Header: 'Bus ID',
        accessor: 'bus_id'
    },
    {
        Header: "Operator ID",
        accessor: "op_id"
    },
    {
        Header: "Time Due",
        accessor: "s_time"
    },
    {
        Header: "Scheduled Intervals (min)",
        accessor: "s_hws"
    },
    {
        Header: 'Predicted Time',
        accessor: 'p_time',
        Cell: row => {
            row.styles['color'] = '#fff';
            row.styles['backgroundColor'] = 'green';
            return row.value.toUpperCase();
          }
    },
    {
        Header: 'Predicted Intervals (min)',
        accessor: 'p_hws'
    },
    {
        Header: 'Predicted Schedule Dev (min)',
        accessor: 'p_dev'
    },
    {
        Header: 'Recommended Holding',
        accessor: 'r_act'
    },
    {
        Header: 'Recommended Time',
        accessor: 'r_time'
    },
    {
        Header: 'Recommended Intervals',
        accessor: 'r_hws'
    },
    {
        Header: 'Recommended Schedule Dev (min)',
        accessor: 'r_dev'
    },
    {
        Header: 'Actual Holding',
        accessor: 'a_act'
    },
    {
        Header: 'Actual Time',
        accessor: 'a_time'
    },
    {
        Header: 'Actual Intervals',
        accessor: 'a_hws'
    },
    {
        Header: 'Actual Schedule Dev',
        accessor: 'a_dev'
    },
    {
        Header: 'Off',
        accessor: "off"
    }
]