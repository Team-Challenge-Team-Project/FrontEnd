export type TLookProps = {
  img: string;
  title: string;
  description: string;
  price: string;
};

export type TLookDataProps = {
  id: string;
  img: string;
  look: TLookProps[];
};
