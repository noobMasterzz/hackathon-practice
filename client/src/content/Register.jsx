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
            <div className="popup">
                <form action="submit" className="form">
                    <h1>Register</h1>
                    <label htmlFor="firstname"></label>
                    <input id="firstname" type="text" />
                    <label htmlFor="lastname"></label>
                    <input id="lastname" type="text" />
                    <label htmlFor="firstname"></label>
                    <input id="email" type="text" />
                    <label htmlFor="firstname"></label>
                    <input id="password" type="password" />
                    <label htmlFor="firstname"></label>
                    <input type="submit" value="Login" />
                    <p>Don't have an account?</p>
                </form>
            </div>
        </>
    )
  }
  
  export default Register
  