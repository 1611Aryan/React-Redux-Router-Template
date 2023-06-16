import { RouterProvider } from 'react-router-dom'
import Petal from './components/PetalLoader'
import Routes from './routes'

const App = () => {
  return <RouterProvider router={Routes()} fallbackElement={<Petal />} />
}

export default App
