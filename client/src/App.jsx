import { Route, Routes, useNavigate } from 'react-router-dom'
import Admin from './content/Admin'
import Header from './content/Header'
import AuthWrapper from './auth_wrapper/AuthWrapper'
import Login from './auth_wrapper/Login'
import Register from './auth_wrapper/Register'
import { useContext } from 'react'
import AuthContext from './content/Provider'
function App() {
const { isAuthenticated } = useContext(AuthContext)
  return (
    <div className='h-dvh flex flex-col'>
      <Header />
      <div className='h-dvh overflow-y-auto'>
          <Routes>
             {isAuthenticated &&  <Route path="/admin/dashboard" element={<Admin />} /> }
              {!isAuthenticated &&  <Route element={<AuthWrapper />}>
                  <Route path="/login" element={<Login />} />
                  <Route path='/register' element={<Register />} />
              </Route> }
              <Route path='*' element={<h2>Not Found</h2>} />
          </Routes>
      </div>
    </div>
  )
}

export default App
