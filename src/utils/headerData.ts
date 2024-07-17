type TMenuItems = {
  key: string;
  category: string;
  children: string[];
};

export const menuItems: TMenuItems[] = [
  {
    key: 'women',
    category: 'Women',
    children: [
      'All',
      'New Arrivals',
      'Dresses',
      'T-Shirts',
      'Tops',
      'Shirts',
      'Blouses',
      'Skirts',
      'Shorts',
      'Sweaters',
      'Hoodies',
      'Trousers',
      'Jeans',
      'Jackets',
      'Coats',
      'Accessories',
      'Underwear',
      'SALE',
    ],
  },
  {
    key: 'men',
    category: 'Men',
    children: [
      'All',
      'New Arrivals',
      'Shirts',
      'T-shirts',
      'Shorts',
      'Sweaters',
      'Hoodies',
      'Trousers',
      'Jeans',
      'Jackets',
      'Coats',
      'Accessories',
      'Underwear',
      'SALE',
    ],
  },
];
