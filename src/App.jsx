import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from './routes/Header'
import Index from './routes/Index'
import Details from './routes/Details'

function App() {
  const router = createBrowserRouter([
    {path: '/AT-WORK__SPA/', element: <Header/>, children:[
      {index: true, element: <Index/>},
      {path: ':id', element: <Details/>},
    ]}
  ])
  return <RouterProvider router={ router } />
}

export default App
