import { Outlet, useRoutes } from 'react-router-dom';
import './App.css';

function App() {
  let routes = useRoutes([
    {
      path:'/',
      element: <div>Home <Outlet></Outlet></div>,
      children: [
        {
          index: true,
          element:<div>Home Content Area</div>
        },
        {
          path:'/login',
          element: <div>Login</div>
        },
        {
          path:'/dashboard',
          element: <div>Dashboard</div>
        },
        {
          path:'/settings',
          element: <div>Settings</div>
        },
        {
          path:'/register',
          element: <div>Register</div>
        },
      ]
    },
   
  ]);
 return ( <div className='text-center'>
      {routes}
  </div>)
 
}

export default App;
