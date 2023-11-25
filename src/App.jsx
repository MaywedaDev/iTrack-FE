import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import Signup from './pages/signup'
import Home from './pages/home'
import Signin from './pages/signin'


const theme = createTheme({
  palette: {
    primary: {
      main: "#8347E7",
    }
  }
})


function App() {
  const [count, setCount] = useState(0)

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
    </>
    )
  )

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  )
}

export default App
