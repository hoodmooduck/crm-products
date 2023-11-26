import { createSlice } from '@reduxjs/toolkit';


const productsSlice = createSlice({
  name: 'products',
  initialState: {
    value: [],
    selectProd: null,
    loading: false
  },
  reducers: {
    isLoading: (state, action) => {
      state.loading = action.payload
    },
    setProducts: (state, action) =>{
      state.value = action.payload
    },
    selectProduct: (state, action)=>{
      state.selectProd = action.payload
    }
  },
});


export const { setProducts, selectProduct, isLoading } = productsSlice.actions;

export default productsSlice.reducer

