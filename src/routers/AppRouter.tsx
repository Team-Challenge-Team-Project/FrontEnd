import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { publicRoutes } from './routes';
import { Root } from '../components/ui/Root';

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      id: 'root',
      path: '/',
      element: <Root />,
      children: publicRoutes,
      errorElement: <h1>Error 404 page</h1>,
    },
  ]);
  return <RouterProvider router={router} />;
}
