import React, { useMemo, useState } from 'react';
import { useReactTable, flexRender, getCoreRowModel, Column } from '@tanstack/react-table'
import mData from '../assets/data/mockEmployeeData.json'





const Table = () => {


    const data = useMemo(() => mData, [])
    // type columns = import('@tanstack/react-table').ColumnDef<[]>

    const columns: Column[] = useMemo(
        () => [
            {
                header: 'First name',
                accessorykey: 'Firstname',
            },
            {
                header: 'Last Name',
                accessorykey: 'LastName',
            },
            {
                header: 'Start Date',
                accessorykey: 'StartDate',
            },
            {
                header: 'Department',
                accessorykey: 'Department',
            },
            {
                header: 'Date of Birth',
                accessorykey: 'DateOfBirth',
            },
            {
                header: 'Street',
                accessorykey: 'Street',
            },
            {
                header: 'city',
                accessorykey: 'city',
            },
            {
                header: 'state',
                accessorykey: 'state',
            },
            {
                header: 'zip code',
                accessorykey: 'zipeCode',
            }

        ],
        []
    )
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
    console.log(table);

    return (
        <div className='Table' >
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>FirstName</td>
                    </tr>
                </tfoot>
            </table>
        </div >

    )

};

export default Table;