/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo } from 'react';
// import mData from '../assets/data/mockEmployeeData.json'
import { db } from '../../config/firebase'
import { getDocs, collection } from 'firebase/firestore'
import { columnDef } from './columns';
import { flexRender, useReactTable, getCoreRowModel } from '@tanstack/react-table';
import './table.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setEmployees } from '../../Store/EmployeeSlice'
// import { log } from 'console';
// import { useReactTable } from "@tanstack/react-table"


interface TableProps {
    employees: any[]; // Définissez le type des employés
}


const Table: React.FC<TableProps> = (employees) => {
    // console.log(employeeCollectionRef);
    console.log(employees);

    const dispatch = useDispatch()
    const employee = useSelector((state) => state.employees);
    // const [employee, setEmployee] = useState([])

    useEffect(() => {
        const employeeCollectionRef = collection(db, "Employees")

        const getEmployeeList = async () => {
            //Read the data from our database
            try {
                const data = await getDocs(employeeCollectionRef)
                const filteredData: { id: string; }[] = data.docs.map((doc) => ({ ...doc.data(), id: doc.id, }))
                // console.log(filteredData);
                dispatch(setEmployees(filteredData))
            } catch (err) {
                console.error(err);
            }
        }
        getEmployeeList()
    }, [dispatch])

    // console.log({ employee });

    const finalData = useMemo(() => employee, [])
    const finalColumnDef = useMemo(() => columnDef, [])
    // console.log({ finalData });


    const table = useReactTable({
        columns: finalColumnDef,
        data: finalData,
        getCoreRowModel: getCoreRowModel(),
    });

    // console.log(table);


    return (
        <table className='Table' >
            <thead>
                {table.getHeaderGroups().map(headerEl => {

                    return <tr key={headerEl.id}>
                        {headerEl.headers.map((columnEl) => {
                            return (
                                <th key={columnEl.id}>
                                    {flexRender(
                                        columnEl.column.columnDef.header,
                                        columnEl.getContext()
                                    )}
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

    )

};

export default Table;