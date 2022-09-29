import './App.css';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import ErrorPage from './routes/error-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/projects",
    element: <Root />
  },
  {
    path: "/projects/:content",
    element: <Root />
  },
  {
    path: "/contact",
    element: <Root routeContent="contact"/>
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
