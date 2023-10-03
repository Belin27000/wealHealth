
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/CreateEmployee/Home'
import Layout from './Layout/Layout'
import EmployeeList from './pages/EmployeeList/EmployeeList'
// import { LocalizationProvider } from '@mui/lab'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>

          <Route element={<Layout />} >

            <Route index element={<Home />} />

            <Route path='/home' element={<Home />} />
            <Route path='/employeeList' element={<EmployeeList />} />


          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
