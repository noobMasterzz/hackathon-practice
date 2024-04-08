import { Outlet } from "react-router-dom"

const AuthWrapper = () => {
  return (
    <div className="h-full px-2 grid place-items-center">
        <div className="w-full max-w-[400px]">
            <Outlet />
        </div>
    
    </div>
  )
}

export default AuthWrapper
