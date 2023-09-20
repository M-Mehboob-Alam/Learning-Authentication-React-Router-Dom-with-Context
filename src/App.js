import { Outlet, useRoutes } from 'react-router-dom';
import './App.css';
import { DashboardPage, HomeContent, HomePage, LoginPage, RegisterPage, RequiredAuth, SettingsPage } from './components/globalComponents';
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
          element: <RequiredAuth><DashboardPage></DashboardPage></RequiredAuth>
        },
        {
          path:'/settings',
          element: <RequiredAuth><SettingsPage></SettingsPage></RequiredAuth>
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
