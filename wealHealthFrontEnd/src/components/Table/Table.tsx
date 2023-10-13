/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react';

import { columnDef } from './columns';
import { flexRender, useReactTable, getCoreRowModel, getSortedRowModel, getPaginationRowModel } from '@tanstack/react-table';
import './table.scss'
import { Employee } from '../../type/employee'
import { FaArrowAltCircleUp, FaArrowCircleDown } from 'react-icons/fa'



const Table = ({ employees }: { employees: Employee[] }) => {


    // console.log(employees.docs);

    const [employeesList, setEmployeesList] = useState([])
    const [sorting, setSorting] = useState([])



    useEffect(() => {
        if (employees && employees.docs) {

            try {
                const filteredData: { id: string; }[] = employees.docs.map((doc) => ({ ...doc.data(), id: doc.id, }))
                console.log(filteredData);
                setEmployeesList(filteredData)
            } catch (error) {
                console.error('Erreur dans le composant Table :', error);
            }
        }
    }, [employees])



    // const finalData = employeesList
    const finalData = useMemo(() => employeesList, [employeesList])


    const finalColumnDef = useMemo(() => columnDef, [])


    const table = useReactTable({
        columns: finalColumnDef,
        data: finalData,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            sorting: sorting,
        },
        onSortingChange: setSorting,
    });



    return (
        <>
            <table className='Table' >
                <thead>
                    {table.getHeaderGroups().map(headerEl => {

                        return <tr key={headerEl.id}>
                            {headerEl.headers.map((columnEl) => {
                                return (
                                    <th key={columnEl.id} onClick={columnEl.column.getToggleSortingHandler()}>
                                        {flexRender(
                                            columnEl.column.columnDef.header,
                                            columnEl.getContext()
                                        )}
                                        {
                                            { asc: <FaArrowAltCircleUp />, desc: <FaArrowCircleDown /> }[
                                            columnEl.column.getIsSorted() ?? null
                                            ]
                                        }
                                    </th>
                                )
                            })}
                        </tr>
                    })}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(rowEl => {
                        return <tr key={rowEl.id}>{rowEl.getVisibleCells().map(cellEl => {
                            return <td key={cellEl.id}>
                                {flexRender(cellEl.column.columnDef.cell,
                                    cellEl.getContext()
                                )}
                            </td>
                        })}</tr>
                    })}
                </tbody>
            </table >
            <hr />
            <div className='pageManagment'>
                <button onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
                    First Page
                </button>
                <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                    {"<<"}
                </button>
                <div>Page {table.options.state.pagination?.pageIndex !== undefined ? table.options.state.pagination.pageIndex + 1 : 'N?A'} on {table.getPageCount()} </div>
                <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                    {">>"}
                </button>
                <button onClick={() => table.getPageCount() - 1} disabled={!table.getCanNextPage()}>
                    Last Page
                </button>
            </div>
        </>
    )

};

export default Table;