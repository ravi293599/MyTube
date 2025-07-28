
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Body from './Components/Body'
import Header from './Components/Header'
import Home from './Pages/Home'
import Store from './Utils/Store'
import { Provider } from 'react-redux'
import Watch from './Pages/Watch'
import MainContainer from './Components/MainContainer'

function App() {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/watch",
      element: <Watch />
    }
  ])
  return (
    <>
    <Provider store={Store}>
      <Header />
      <RouterProvider router={AppRouter} />
    </Provider>
    </>
  )
}

export default App
