
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { Suspense, lazy } from 'react'
const Home = lazy(() => import('./pages/CreateEmployee/Home'))
const Layout = lazy(() => import('./Layout/Layout'))
const EmployeeList = lazy(() => import('./pages/EmployeeList/EmployeeList'))

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>

          <Routes>
            <Route element={<Layout />} >

              <Route index element={<Home />} />

              <Route path='/home' element={<Home />} />
              <Route path='/employeeList' element={<EmployeeList />} />
            </Route>

          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
