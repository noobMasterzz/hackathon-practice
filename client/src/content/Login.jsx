function Login() {
    return (
        <>
            <div className="popup">
                <form action="submit" className="form">
                    <h1>Login</h1>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="submit" value="Login" />
                    <p>Don't have an account?</p>
                </form>
            </div>
        </>
    )
  }
  
  export default Login
  