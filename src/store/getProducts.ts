import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product, InitialState, Products} from './types';

const initialState: InitialState = {
  value: [],
  selectProd: null,
  loading: false
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    isLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setProducts: (state, action: PayloadAction<Products>) =>{
      state.value = action.payload.products
    },
    selectProduct: (state, action: PayloadAction<Product | null>)=>{
      state.selectProd = action.payload
    }
  },
});


export const { setProducts, selectProduct, isLoading } = productsSlice.actions;

export default productsSlice.reducer



