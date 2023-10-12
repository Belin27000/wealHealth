import { db } from '../../config/firebase'

import { collection, getDocs, addDoc } from 'firebase/firestore'

interface Employee {
    firstName: string,
    lastName: string,
    city: string,
    dateOfBirth: string,
    department: string,
    startDate: string,
    street: string,
    zipCode: string,
}
const getEmployees = async () => {
    // console.log('getEmployees function is called');

    const collectionRef = collection(db, "Employees")
    const data = await getDocs(collectionRef)
    // console.log('Data fetches:', data.docs);

    return data
}
const addEmployees = async (newEmployee: Employee) => {
    const collectionRef = collection(db, "Employees")
    return await addDoc(collectionRef, newEmployee)
}
const getDepartment = async () => {
    const collectionRef = collection(db, "Department")
    const data = await getDocs(collectionRef)
    return data
}
const getStates = async () => {
    const collectionRef = collection(db, "States")
    const data = await getDocs(collectionRef)
    return data
}

const allData = {
    getEmployees,
    addEmployees,
    getDepartment,
    getStates
}
export default allData