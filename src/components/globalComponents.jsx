import { Link, Outlet } from "react-router-dom"
import AuthConsumer from "./auth"

export const HomePage= ()=>{
    const auth = AuthConsumer()
    console.log(auth)
    return (
        <main className="my-5">
          <h1 className="w-40 py-2 mx-auto bg-yellow-400 rounded text-gray text">Authentication</h1>  
           
           <Nav></Nav>
            <div className="flex justify-center py-2 text-center">
            <Outlet></Outlet>
            </div>
        </main>
    )
}

export const HomeContent= ()=>{
    return (
        <div>
            Home Page Contents
        </div>
    )
}

export const Nav= ()=>{
    return (
        <nav className="flex justify-center gap-3 py-2 my-4 bg-indigo-500 text-gray-50">
            <Link to={'/'}>Home</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Register</Link>
            <Link to={'/settings'}>Settings</Link>
            <Link to={'/dashboard'}>Dashboard</Link>
        </nav>
    )
}

export const LoginPage= ()=>{
    return (
        <div>
            Login Page
        </div>
    )
}

export const RegisterPage= ()=>{
    return (
        <div>
            Register Page
        </div>
    )
}
export const DashboardPage= ()=>{
    return (
        <div>
            Dashboard Page
        </div>
    )
}
export const SettingsPage= ()=>{
    return (
        <div>
            Settings Page
        </div>
    )
}