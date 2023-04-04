import React, { useMemo, useState } from 'react';
import { useTable } from 'react-table';
import DATA from './data/data.json';
import { COLUMNS } from './columns';
import './table.css';
import DataTable from 'react';
import Modal from "./Modal"

export const Table = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => DATA, [])

    const conditionalRowStyles = [
        {
          when: row => row.off = 1,
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

    const [openModal, setOpenModal] = useState(false);
    
  return (
    <div className="table">
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
                            <tr onClick={() => setOpenModal(true)} {...row.getRowProps()}>
                                {row.cells.map( cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  )
}
