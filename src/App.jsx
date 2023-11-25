import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import Signup from './pages/signup'
import Home from './pages/home'
import Signin from './pages/signin'
import Layout from './components/layout'
import Invoices from './pages/invoices'
import Settings from './pages/settings'
import CreateNew from './pages/createNew'
import Transactions from './pages/transactions'
import Customers from './pages/customers'


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
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='sign-up' element={<Signup />} />
        <Route path='sign-in' element={<Signin />} />
        <Route path='customers' element={<Customers />} />
        <Route path='invoices' element={<Invoices />} />
        <Route path='settings' element={<Settings />} />
        <Route path='create-new' element={<CreateNew />} />
        <Route path='transactions' element={<Transactions />} />
      </Route>
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
