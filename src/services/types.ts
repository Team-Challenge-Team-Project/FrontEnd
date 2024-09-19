export type ClothingItem = {
  id: string;
  sex: string;
  subCategory: string;
  brand: string;
  operationBrand: string;
  description: string;
  operationDescription: string;
  price: string;
  operationPrice: string;
  size: string;
  page: string;
  sort: string;
  productSize?: {
    letters: string;
  };
  image: string;
};

export type ClothingItems = {
  content: ClothingItem[];
  pageable: {
    size: number;
    offset: number;
    page: number;
    sort: {
      description: 'asc' | 'desc';
      name: string;
    };
  };
  totalElements: number;
  totalPages: number; // Corrected from totalPage to totalPages
};

export type ApiResponse<T> = T & { status: number };

export type ClothesByFilters = {
  sex?: 'MAN' | 'WOMAN' | string;
  subCategory?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  size?: string;
  [key: string]: string | number | boolean | undefined;
};

export  type UserRegisterResponse = {
  id: string;
  name: string;
  email: string;
  favorite: string[]
}
