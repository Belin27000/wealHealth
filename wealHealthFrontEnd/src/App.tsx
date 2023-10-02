
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/CreateEmployee/Home'
import Layout from './Layout/Layout'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>

          <Route element={<Layout />} >

            <Route index element={<Home />} />

            <Route path='/home' element={<Home />} />


          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
