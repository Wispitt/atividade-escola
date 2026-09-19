import { createHashRouter } from "react-router-dom";

import { Home } from './pages/Home';
import { Login } from './pages/Login';

export const router = createHashRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
]);