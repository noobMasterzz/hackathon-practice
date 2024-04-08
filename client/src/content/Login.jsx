function Login() {
    return (
        <>
            <div className="popup">
                <form action="submit">
                    <h1>Login</h1>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="submit" value="Login" />
                    <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                </form>
            </div>
        </>
    )
  }
  
  export default Login
  