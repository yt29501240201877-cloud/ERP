import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from "../src/pages/Login/Login"
import './App.css'

const router = createBrowserRouter([
  { path: '/', element: <Login/>,
    // children: [
    //   { path: '/dashboard',   element: <div>Dashboard</div> },
    //   { path: '/impact',      element: <ImpactHub /> },
    //   { path: '/eligibility', element: <EligibilityAdmin /> },
    //   { path: '/screening',   element: <MedicalScreening /> },
    // ]
  },
])



function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
