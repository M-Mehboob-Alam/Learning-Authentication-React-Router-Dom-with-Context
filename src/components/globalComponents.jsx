import {  NavLink, Outlet, useNavigate } from "react-router-dom"
import AuthConsumer, { AuthProvider } from "./auth"



export const HomeContent= ()=>{
    return (
        <div>
            Home Page Contents
        </div>
    )
}

export const Nav= ()=>{
    function ActiveLink(props){
        return <NavLink
        style={({isActive})=>{
            return {
                color: isActive ? 'black' : ''
            }
        }}
        {...props}
        
        />
            
        
    }
    
    return (
        <nav className="flex justify-center gap-3 py-2 my-4 bg-indigo-500 text-gray-50">
            <ActiveLink to={'/'}>Home</ActiveLink>
            <ActiveLink to={'/login'}>Login</ActiveLink>
            <ActiveLink to={'/register'}>Register</ActiveLink>
            <ActiveLink to={'/settings'}>Settings</ActiveLink>
            <ActiveLink to={'/dashboard'}>Dashboard</ActiveLink>
        </nav>
    )
}

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
export const LoginPage= ()=>{
    const [authed, dispatch] = AuthConsumer();
    let navigate = useNavigate()
    console.log(authed);
    return (
        <div>
            <h1>This is Login Page</h1>

            <button className="px-5 bg-indigo-500 border rounded text-gray-50"
            onClick={()=> {
                dispatch({type:'login'});
                navigate('/dashboard', {replace:true});
            }}
            >
                Login
            </button>
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
    const [authed, dispatch] = AuthConsumer();
    let navigate = useNavigate();
    
    return (
        <div>
            this is Dashboard Page
            <br></br>
            <button className="px-5 bg-indigo-500 border rounded text-gray-50 "
            onClick={()=>{
            dispatch({type:'logout'})
            navigate('/login', {replace:true})
            }}
            > 
                Logout
            </button>
            
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