import { createSlice } from '@reduxjs/toolkit'
import data from '../assets/data/data_service'


const initialState = {
    EmployeeList: []
    // EmployeeList: data.getEmployees()
}

const employeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        setEmployees: (state, action) => {
            state.EmployeeList = action.payload;
        }
    }
});

export const fetchEmployees = () => async (dispatch) => {
    try {
        const employeesData = await data.getEmployees();
        dispatch(setEmployees(employeesData));
        // console.log('sliceData:', employeesData.docs);

    } catch (error) {
        console.error(error);
    }
};

export const { setEmployees } = employeeSlice.actions;
export default employeeSlice.reducer;