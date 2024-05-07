import { Categories } from '../pages/categories/Categories';
import { Home } from '../pages/home/Home';
import { Product } from '../pages/product/Product';
import {
  CATEGORIES_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  PRODUCT_PAGE_ROUTE,
} from '../utils/routeConstants';

export const publicRoutes = [
  {
    path: HOME_PAGE_ROUTE,
    Component: Home,
  },
  {
    path: PRODUCT_PAGE_ROUTE,
    Component: Product,
  },
  {
    path: CATEGORIES_PAGE_ROUTE,
    Component: Categories,
  },
];
