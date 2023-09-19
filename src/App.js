import { Outlet, useRoutes } from 'react-router-dom';
import './App.css';
import { DashboardPage, HomeContent, HomePage, LoginPage, RegisterPage, SettingsPage } from './components/globalComponents';
function App() {
  let routes = useRoutes([
    {
      path:'/',
      element: <HomePage>
        <Outlet></Outlet>
      </HomePage>,
      children: [
        {
          index: true,
          element:<HomeContent></HomeContent>
        },
        {
          path:'/login',
          element: <LoginPage></LoginPage>
        },
        {
          path:'/dashboard',
          element: <DashboardPage></DashboardPage>
        },
        {
          path:'/settings',
          element: <SettingsPage></SettingsPage>
        },
        {
          path:'/register',
          element: <RegisterPage></RegisterPage>
        },
      ]
    },
   
  ]);
 return ( <div className='text-center'>
      {routes}
  </div>)
 
}

export default App;
