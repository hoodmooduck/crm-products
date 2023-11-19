import { createSlice } from '@reduxjs/toolkit';


const productsSlice = createSlice({
  name: 'products',
  initialState: {
    value: [],
    selectProd: null
  },
  reducers: {
    setProducts: (state, action) =>{
      state.value = action.payload
    },
    selectProduct: (state, action)=>{
      state.selectProd = action.payload
    }
  },
});


export const { setProducts, selectProduct } = productsSlice.actions;

export default productsSlice.reducer

