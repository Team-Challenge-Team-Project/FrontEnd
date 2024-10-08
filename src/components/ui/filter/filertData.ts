import { TFilterData } from './types'

export const filterItemPropsData: TFilterData[] = [
  {
    title: 'Category',
    id: 1,
    selectedItems: [],
    subTitle: [
      {
        subTitleTitle: 'Women',
        id: 1,
        subTitleItem: [
          'T-Shirts', 'Tops', 'Shirts',
          'Blouses', 'Skirts', 'Shorts',
          'Sweaters', 'Hoodies', 'Trousers',
          'Jeans', 'Jackets', 'Coats',
          'Accessories', 'Underwear'
        ]
      },
      {
        subTitleTitle: 'Man',
        id: 2,
        subTitleItem: [
          'Shirts', 'T-Shirts', 'Shorts',
          'Sweaters', 'Hoodies', 'Trousers',
          'Jeans', 'Jackets', 'Coats',
          'Accessories', 'Underwear'
        ]
      }
    ]
  },
  {
    title: 'Brand',
    id: 2,
    selectedItems: [],
    radioItem: [
      'Aspesi', 'Balenciaga', 'Borsalino',
      'Calvin Klein', 'Chocoolate', 'Gucci',
      'PS Paul Smith', 'Polo Ralph Lauren', 'Saint Laurent',
      'Stone Island'
    ]
  },
  {
    title: 'Size',
    id: 3,
    selectedItems: [],
    radioItem: [
      'XS', 'S', 'M',
      'L', 'XL', 'XXL',
      'One Size'
    ]
  },
  {
    title: 'Price',
    id: 4,
    selectedItems: [],
    progressBarItem: {
      start: 0, end: 10000, currencies: ['€']
    }
  }
]


