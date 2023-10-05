import { useMemo } from 'react';
import { useReactTable, flexRender, getCoreRowModel, ColumnDef } from '@tanstack/react-table'
import mData from '../assets/data/mockEmployeeData.json'
// import { log } from 'console';





const Table = () => {
    interface EmployeeData {
        FirstName: string;
        LastName: string;
        StartDate: Date;
        Department: string;
        DateOfBirth: Date;
        Street: string;
        city: string;
        state: string;
        zipeCode: string;
    }


    const data = useMemo(() => mData, [])
    // type columns = import('@tanstack/react-table').ColumnDef<[]>

    const columns: ColumnDef<EmployeeData>[] = useMemo(
        () => [
            {
                header: 'First name',
                accessor: 'Firstname',
            },
            {
                header: 'Last Name',
                accessor: 'LastName',
            },
            {
                header: 'Start Date',
                accessor: 'StartDate',
            },
            {
                header: 'Department',
                accessor: 'Department',
            },
            {
                header: 'Date of Birth',
                accessor: 'DateOfBirth',
            },
            {
                header: 'Street',
                accessor: 'Street',
            },
            {
                header: 'city',
                accessor: 'city',
            },
            {
                header: 'state',
                accessor: 'state',
            },
            {
                header: 'zip code',
                accessor: 'zipeCode',
            }

        ],
        []
    )
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
    console.log(table.getRowModel().rows);

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
                            {row.original && (
                                Object.keys(row.original).map(key => (
                                    <td key={key}>
                                        {row.original[key] as string}
                                    </td>
                                ))
                            )

                            }
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