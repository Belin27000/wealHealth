import { configureStore } from '@reduxjs/toolkit'
import EmployeeList from './EmployeeSlice.js'

const store = configureStore({
    reducer: {
        employees: EmployeeList,
    }
})

export default store;