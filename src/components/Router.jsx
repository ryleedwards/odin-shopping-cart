import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../routes/root';
import ErrorPage from './ErrorPage';

function Router() {
  const router = createBrowserRouter([
    { path: '/', element: <Root />, errorElement: <ErrorPage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
