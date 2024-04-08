import { createContext, useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AuthContext = createContext()

export const Provider = ({children}) => {
    const navigate = useNavigate()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    //validate user here
    useEffect(() => {
      const validateUser = async () => {
        const response = await axios.get('/api/authenticate-user');
        console.log(response)
        if(response.data.isUserAuthenticated) {
          setIsAuthenticated(true)
          navigate("/admin/dashboard")
        }else{
          navigate("/login")
        }
      }
      validateUser()
    }, [])
  return (
   <AuthContext.Provider value={{isAuthenticated }}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthContext