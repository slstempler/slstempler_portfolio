import './App.css';
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import ErrorPage from './routes/error-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/projects",
        element: (<div><p>heh project heh</p><Outlet /></div>),
        children: [
          {
            path: "/projects/:projectname",
            element: <p>hehe project NAME</p>
          }
        ]
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
