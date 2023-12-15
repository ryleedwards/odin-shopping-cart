import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import ShopPage from '../pages/ShopPage';
import { array, func } from 'prop-types';

const Router = ({ items, setQuantity }) => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage items={items} />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/shop',
      element: <ShopPage items={items} setQuantity={setQuantity} />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

Router.propTypes = {
  items: array.isRequired,
  setQuantity: func.isRequired,
};

export default Router;
