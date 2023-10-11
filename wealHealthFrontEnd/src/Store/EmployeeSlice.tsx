import { createSlice } from '@reduxjs/toolkit'

const employeeSlice = createSlice({
    name: 'employees',
    initialState: [],
    reducers: {
        setEmployees: (state, action) => {
            return action.payload;
        }
    }
});
export const { setEmployees } = employeeSlice.actions;
export default employeeSlice.reducer;