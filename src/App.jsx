import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from './routes/Index'
import Details from './routes/Details'

function App() {
  const router = createBrowserRouter([
    {path: '/AT-WORK__SPA/', element: <Index/>, children:[
      {path: ':id', element: <Details/>}
    ]}
  ])
  return <RouterProvider router={ router } />
}

export default App
