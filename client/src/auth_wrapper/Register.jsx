import { useState } from 'react'
import axios from 'axios'

function Register() {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
       try{
            const response = await axios.post('/api/register', {firstname, lastname, email, password})
            console.log(response)
       }catch(e){
            console.log(e)
       }
        
    }
    return (
        <>
            <div onSubmit={handleSubmit}>
                <form>
                    <h1>Register</h1>
                    <label htmlFor="firstname"></label>
                    <input value={firstname} onChange={(e) => setFirstname(e.target.value)} id="firstname" type="text" />
                    <label htmlFor="lastname"></label>
                    <input value={lastname} onChange={(e) => setLastname(e.target.value)} id="lastname" type="text" />
                    <label htmlFor="firstname"></label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="text" />
                    <label htmlFor="firstname"></label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" type="password" />
                    <button>Submit</button>
                    <p>Don't have an account?</p>
                </form>
            </div>
        </>
    )
  }
  
  export default Register
  