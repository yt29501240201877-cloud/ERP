import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Login from "../src/pages/Login/Login"
import Dashboard from "../src/pages/Dashboard/Dashboard"
import Users from "../src/pages/Dashboard/users"
import NewUser from "../src/pages/Dashboard/NewUser"
import './App.css'

const router = createBrowserRouter([
  { path: '/', element: <Login/> },
  { path: 'Dashboard',   element: <Dashboard/> ,
      children: [
        {path: 'users', element: <Users/>},
        {path: 'New_user', element: <NewUser/>}
      ]
  },
])



function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
