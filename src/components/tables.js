import React, { useMemo, useState, useEffect } from 'react';
import { useTable } from 'react-table';
import { COLUMNS_NAVY_PIER, COLUMNS_RED, COLUMNS_BROWN, COLUMNS_BLUE } from './columns';
import './table.css';
import {ModalNavyPier, ModalRed, ModalBrown, ModalBlue} from "./Modal"
import useTableData from './useTableData'

export const TableNavyPier = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const columns = useMemo(() => COLUMNS_NAVY_PIER, [])

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const response = await fetch("https://bus-control-web-demo.ue.r.appspot.com/bus/top?num=3&orderby=prddtm_np");
            if (!response.ok) {
              // This will capture HTTP errors like 404 or 500, but not network errors
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const json = await response.json();
            setData(json);
          } catch (error) {
            // If the error is a network error, error.message might be something like "Failed to fetch"
            setError(error);
            console.error("Fetching data error:", error);
          } finally {
            setLoading(false);
          }
        };
      
        fetchData();
      }, []);
    
    const [selectedRowData, setSelectedRowData] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const conditionalRowStyles = [
        {
          when: row => row.on = 0,
          style: {
            backgroundColor: 'gray',
            color: 'red',
          },
        },
      ];

    const table = useTable({
        columns: columns,
        data: data,
    })

    const { getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow, } = table

    const id = (selectedRowData["trip_id"])

    const getSelectedRowValues = selectedRow => {
        setSelectedRowData(selectedRow.original); // use .original to get the full data object
    };

    
    if (loading) {
        return <div>Loading...</div>; // Or some spinner component
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }

  return (
    <div className="table">
        {openModal && <ModalNavyPier closeModal={setOpenModal} trip_id={id} rowData={selectedRowData} />}
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            //<tr onClick={() => {setOpenModal(true); setRow(row.getRowProps().cells.map);}} {...row.getRowProps()}>
                            <tr {...row.getRowProps()} onClick={() => {getSelectedRowValues(row); setOpenModal(true)}}>
                                {row.cells.map( cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        
    </div>
  )
}


export const TableRed = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const columns = useMemo(() => COLUMNS_RED, [])

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const response = await fetch("https://bus-control-web-demo.ue.r.appspot.com/bus/top?num=3&orderby=prdtm_red");
            if (!response.ok) {
              // This will capture HTTP errors like 404 or 500, but not network errors
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const json = await response.json();
            setData(json);
          } catch (error) {
            // If the error is a network error, error.message might be something like "Failed to fetch"
            setError(error);
            console.error("Fetching data error:", error);
          } finally {
            setLoading(false);
          }
        };
      
        fetchData();
      }, []);
    
    const [selectedRowData, setSelectedRowData] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const conditionalRowStyles = [
        {
          when: row => row.on = 0,
          style: {
            backgroundColor: 'gray',
            color: 'red',
          },
        },
      ];

    const table = useTable({
        columns: columns,
        data: data,
    })

    const { getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow, } = table

    const id = (selectedRowData["rid"])

    const getSelectedRowValues = selectedRow => {
        setSelectedRowData(selectedRow.original); // use .original to get the full data object
    };

    
    if (loading) {
        return <div>Loading...</div>; // Or some spinner component
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
    
  return (
    <div className="table">
        {openModal && <ModalRed closeModal={setOpenModal} run={id} rowData={selectedRowData} />}
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            //<tr onClick={() => {setOpenModal(true); setRow(row.getRowProps().cells.map);}} {...row.getRowProps()}>
                            <tr {...row.getRowProps()} onClick={() => {getSelectedRowValues(row); setOpenModal(true)}}>
                                {row.cells.map( cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        
    </div>
  )
}


export const TableBrown = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const columns = useMemo(() => COLUMNS_BROWN, [])
    // const { data, loading, error } = useTableData("https://bus-control-web-demo.ue.r.appspot.com/bus/top?num=3&orderby=prddtm_np");

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const response = await fetch("https://bus-control-web-demo.ue.r.appspot.com/bus/top?num=3&orderby=prdtm_brown");
            if (!response.ok) {
              // This will capture HTTP errors like 404 or 500, but not network errors
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const json = await response.json();
            setData(json);
          } catch (error) {
            // If the error is a network error, error.message might be something like "Failed to fetch"
            setError(error);
            console.error("Fetching data error:", error);
          } finally {
            setLoading(false);
          }
        };
      
        fetchData();
      }, []);
    
    const [selectedRowData, setSelectedRowData] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const conditionalRowStyles = [
        {
          when: row => row.on = 0,
          style: {
            backgroundColor: 'gray',
            color: 'red',
          },
        },
      ];

    const table = useTable({
        columns: columns,
        data: data,
    })

    const { getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow, } = table

    const id = (selectedRowData["rid"])

    const getSelectedRowValues = selectedRow => {
        setSelectedRowData(selectedRow.original); // use .original to get the full data object
    };

    
    if (loading) {
        return <div>Loading...</div>; // Or some spinner component
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
    
  return (
    <div className="table">
        {openModal && <ModalBrown closeModal={setOpenModal} run={id} rowData={selectedRowData} />}
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            //<tr onClick={() => {setOpenModal(true); setRow(row.getRowProps().cells.map);}} {...row.getRowProps()}>
                            <tr {...row.getRowProps()} onClick={() => {getSelectedRowValues(row); setOpenModal(true)}}>
                                {row.cells.map( cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        
    </div>
  )
}


export const TableBlue = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const columns = useMemo(() => COLUMNS_BLUE, [])

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const response = await fetch("https://bus-control-web-demo.ue.r.appspot.com/bus/top?num=3&orderby=prdtm_blue");
            if (!response.ok) {
              // This will capture HTTP errors like 404 or 500, but not network errors
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const json = await response.json();
            setData(json);
          } catch (error) {
            // If the error is a network error, error.message might be something like "Failed to fetch"
            setError(error);
            console.error("Fetching data error:", error);
          } finally {
            setLoading(false);
          }
        };
      
        fetchData();
      }, []);
    
    const [selectedRowData, setSelectedRowData] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const conditionalRowStyles = [
        {
          when: row => row.on = 0,
          style: {
            backgroundColor: 'gray',
            color: 'red',
          },
        },
      ];

    const table = useTable({
        columns: columns,
        data: data,
    })

    const { getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow, } = table

    const id = (selectedRowData["rid"])

    const getSelectedRowValues = selectedRow => {
        setSelectedRowData(selectedRow.original); // use .original to get the full data object
    };

    
    if (loading) {
        return <div>Loading...</div>; // Or some spinner component
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
    
  return (
    <div className="table">
        {openModal && <ModalBlue closeModal={setOpenModal} run={id} rowData={selectedRowData} />}
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            //<tr onClick={() => {setOpenModal(true); setRow(row.getRowProps().cells.map);}} {...row.getRowProps()}>
                            <tr {...row.getRowProps()} onClick={() => {getSelectedRowValues(row); setOpenModal(true)}}>
                                {row.cells.map( cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        
    </div>
  )
}
