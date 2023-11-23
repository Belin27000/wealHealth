import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react';
import { columnDef } from './columns';
import { flexRender, useReactTable, getCoreRowModel, getSortedRowModel, getPaginationRowModel } from '@tanstack/react-table';
import './table.scss';
import { FaArrowAltCircleUp, FaArrowCircleDown } from 'react-icons/fa';
const Table = ({ employees }) => {
    // console.log(employees.docs);
    const [employeesList, setEmployeesList] = useState([]);
    const [sorting, setSorting] = useState([]);
    useEffect(() => {
        if (employees) {
            try {
                const filteredData = employees.docs.map((doc) => ({ ...doc.data(), id: doc.id, }));
                setEmployeesList(filteredData);
            }
            catch (error) {
                console.error('Erreur dans le composant Table :', error);
            }
        }
    }, [employees]);
    // const finalData = employeesList
    const finalData = useMemo(() => employeesList, [employeesList]);
    const finalColumnDef = useMemo(() => columnDef, []);
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
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: 'numberRow', children: _jsx("select", { value: table.options.state.pagination?.pageSize, onChange: (e) => table.setPageSize(parseInt(e.target.value, 10)), children: [1, 5, 10].map(pageSizeEl => {
                        return [_jsxs("option", { value: pageSizeEl, children: ["number of row : ", " ", pageSizeEl] }, pageSizeEl)];
                    }) }) }), _jsxs("table", { className: 'Table', children: [_jsx("thead", { children: table.getHeaderGroups().map(headerEl => {
                            return _jsx("tr", { children: headerEl.headers.map((columnEl) => {
                                    return (_jsxs("th", { onClick: columnEl.column.getToggleSortingHandler(), children: [flexRender(columnEl.column.columnDef.header, columnEl.getContext()), (() => {
                                                const sortState = columnEl.column.getIsSorted();
                                                if (sortState === 'asc') {
                                                    return _jsx(FaArrowAltCircleUp, {});
                                                }
                                                else if (sortState === 'desc') {
                                                    return _jsx(FaArrowCircleDown, {});
                                                }
                                                else {
                                                    return null;
                                                }
                                            })()] }, columnEl.id));
                                }) }, headerEl.id);
                        }) }), _jsx("tbody", { children: table.getRowModel().rows.map(rowEl => {
                            return _jsx("tr", { children: rowEl.getVisibleCells().map(cellEl => {
                                    return _jsx("td", { children: flexRender(cellEl.column.columnDef.cell, cellEl.getContext()) }, cellEl.id);
                                }) }, rowEl.id);
                        }) })] }), _jsx("hr", {}), _jsxs("div", { className: 'pageManagment', children: [_jsx("button", { onClick: () => table.setPageIndex(0), disabled: !table.getCanPreviousPage(), children: "First Page" }), _jsx("button", { onClick: () => table.previousPage(), disabled: !table.getCanPreviousPage(), children: "<<" }), _jsxs("div", { children: ["Page ", table.options.state.pagination?.pageIndex !== undefined ? table.options.state.pagination.pageIndex + 1 : 'N?A', " on ", table.getPageCount(), " "] }), _jsx("button", { onClick: () => table.nextPage(), disabled: !table.getCanNextPage(), children: ">>" }), _jsx("button", { onClick: () => table.setPageIndex(table.getPageCount() - 1), disabled: !table.getCanNextPage(), children: "Last Page" })] })] }));
};
export default Table;
