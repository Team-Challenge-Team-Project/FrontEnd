type TLookProps = {
  img: string;
  title: string;
  description: string;
  price: string;
};

type TLookDataProps = {
  id: string;
  img: string;
  look: TLookProps[];
};

export const ourLooksData: TLookDataProps[] = [
  {
    id: 'a4cf4c62',
    img: 'ourLooks.png',
    look: [
      {
        img: 'jacket.png',
        title: 'Cotton denim jacket',
        description: '',
        price: '£154',
      },
      {
        img: 'trousers.png',
        title: 'Aspesi',
        description: 'Сotton chino trousers',
        price: '£282',
      },
      {
        img: 'tshirt.png',
        title: 'Gucci',
        description: 'Interlocking G-patch cotton T-shirt ',
        price: '£600',
      },
    ],
  },
  {
    id: '8674f021',
    img: 'ourLooks2.jpeg',
    look: [
      {
        img: 'trousers2.png',
        title: 'Polo ralph lauren',
        description: 'Wide-leg trousers',
        price: '£306',
      },
      {
        img: 'waistcoat.png',
        title: 'Saint laurent',
        description: 'Button fastening waistcoat',
        price: '£1055',
      },
      {
        img: 'hat.png',
        title: 'Borsalino',
        description: 'Sophie Panama hat',
        price: '£239',
      },
    ],
  },
  {
    id: 'e338066a',
    img: 'ourLooks3.jpeg',
    look: [
      {
        img: 'jacket.png',
        title: 'Cotton denim jacket',
        description: '',
        price: '£154',
      },
      {
        img: 'trousers.png',
        title: 'Aspesi',
        description: 'Сotton chino trousers',
        price: '£282',
      },
      {
        img: 'tshirt.png',
        title: 'Gucci',
        description: 'Interlocking G-patch cotton T-shirt ',
        price: '£600',
      },
    ],
  },
];
