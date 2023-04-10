import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DesignerPage from './components/designerpage/DesignerPage'
import Home from './components/home/Home'
import './App.css'
import { Children } from 'react'
import UserState from './store/UserState'

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/designerpage', element: <DesignerPage /> },

  ])

  return (
    <RouterProvider router={router}>
      <UserState>
        {Children}
      </UserState>
    </RouterProvider>
  )
}

export default App
