import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Logo from '../images/hiking logo.png'

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('/api/login', {email, password})
            console.log(response)
            if(response.data.user.role.toLowerCase() === "admin"){
                navigate('/admin/dashboard')
            }else{
                //else if not -> if regular user only
                navigate('/')
            }
        } catch (error) {
            console.log(error)
            setError(error)
        }
    }
    return (
        <form onSubmit={handleLogin} className="bg-main rounded-md p-5 flex flex-col gap-3 items-center text-white">
            {error && <p className='bg-red-500 w-full p-3 text-center font-medium rounded'>Incorrect email or password</p>}
            <img className='w-16' src={Logo} alt='logo' /> 
            <h1 className='text-center font-medium text-xl'>Login</h1>
            <div className='flex flex-col gap-1.5 w-full'>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="text" placeholder="Email" />
            </div>
            <div className='flex flex-col gap-1.5 w-full'>
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" type="password" />
            </div>
            <button className='btn-primary mt-3'>Login</button>
            <p>Don't have an account?</p>
        </form>
    )
  }
  
  export default Login
  