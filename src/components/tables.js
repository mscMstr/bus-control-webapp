import React, { useMemo, useState } from 'react';
import { useTable } from 'react-table';
import DATA from './data/data.json';
import { COLUMNS_NAVY_PIER, COLUMNS_RED, COLUMNS_BROWN, COLUMNS_BLUE } from './columns';
import './table.css';
import DataTable from 'react';
// import tableData from './tableData.js'
import {ModalNavyPier, ModalRed, ModalBrown, ModalBlue} from "./Modal"

export const TableNavyPier = () => {

    const columns = useMemo(() => COLUMNS_NAVY_PIER, [])
    const data = useMemo(() => DATA, [])

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
        data: data
    })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, } = table

    const [selectedRowData, setSelectedRowData] = useState([]);

    const getSelectedRowValues = selectedRow => {
        setSelectedRowData({ ...selectedRow.values });
    };

    const [openModal, setOpenModal] = useState(false);
    const id = (selectedRowData["rid"])
    
  return (
    <div className="table">
        {openModal && <ModalNavyPier closeModal={setOpenModal} run={id} rowData={selectedRowData} />}
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

    const columns = useMemo(() => COLUMNS_RED, [])
    const data = useMemo(() => DATA, [])

    const table = useTable({
        columns: columns,
        data: data
    })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, } = table

    const [selectedRowData, setSelectedRowData] = useState([]);

    const getSelectedRowValues = selectedRow => {
        setSelectedRowData({ ...selectedRow.values });
    };

    const [openModal, setOpenModal] = useState(false);
    const id = (selectedRowData["rid"])
    
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

    const columns = useMemo(() => COLUMNS_BROWN, [])
    const data = useMemo(() => DATA, [])

    const table = useTable({
        columns: columns,
        data: data
    })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, } = table

    const [selectedRowData, setSelectedRowData] = useState([]);

    const getSelectedRowValues = selectedRow => {
        setSelectedRowData({ ...selectedRow.values });
    };

    const [openModal, setOpenModal] = useState(false);
    const id = (selectedRowData["rid"])
    
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

    const columns = useMemo(() => COLUMNS_BLUE, [])
    const data = useMemo(() => DATA, [])

    const table = useTable({
        columns: columns,
        data: data
    })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, } = table

    const [selectedRowData, setSelectedRowData] = useState([]);

    const getSelectedRowValues = selectedRow => {
        setSelectedRowData({ ...selectedRow.values });
    };

    const [openModal, setOpenModal] = useState(false);
    const id = (selectedRowData["rid"])
    
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
