import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Login = lazy(() => import('../pages/Login'))
const Signup = lazy(() => import('../pages/Signup'))

const Routes = () =>
  createBrowserRouter([
    {
      path: '*',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    }
  ])

export default Routes
