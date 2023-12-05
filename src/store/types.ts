export interface Product {
    id?: number;
    title: string;
    price: number;
    description: string;
    image: File | null; 
}

export type InitialState = {
  value: Product[],
  selectProd: Product | null,
  loading: boolean
}

export type Products = {
  products: Product[] ,
}
export type Loading = {
  products: number | null,
}
