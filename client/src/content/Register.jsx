function Register() {
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
  