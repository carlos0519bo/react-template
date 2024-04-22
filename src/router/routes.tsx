import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { routePaths } from './routerManager';
import { MainLayout } from '@/components';
import { Home } from '@/features';

export const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: routePaths.Home,
        element: <Home />,
      },
      {
        path: routePaths.About,
        element: <>about</>,
      },
      {
        path: routePaths.Contact,
        element: <>Contact</>,
      },
    ],
  },
  {
    path: '*',
    element: <>error: 404</>,
  },
];

export const router = createBrowserRouter(routes);
