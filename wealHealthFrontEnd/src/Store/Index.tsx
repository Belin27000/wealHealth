import { configureStore } from '@reduxjs/toolkit'
import EmployeeList from './EmployeeSlice.js'

const store = configureStore({
    reducer: {
        employees: EmployeeList,
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store;