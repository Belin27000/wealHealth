import { configureStore } from '@reduxjs/toolkit';
import EmployeeList from './EmployeeSlice.js';
import thunk from 'redux-thunk';
const store = configureStore({
    reducer: {
        employees: EmployeeList,
    },
    middleware: [thunk]
});
export default store;
