import axios from 'axios';
import { isLoading, setProducts } from './getProducts.js';

export const getAllProducts = () => {

  return async function(dispatch){
    dispatch(isLoading(false))
    try {
      const response = await axios.get('http://localhost:3030/api/products')
      dispatch(setProducts((JSON.parse(response.data))))
      dispatch(isLoading(true))
    } catch (error) {
      console.error('\nошибка: ',error.message, ' \nкод: ', error.code);
      dispatch(setProducts([]))
      dispatch(isLoading(false))
    }
  }
};

const headers = {
  "Content-Type": 'multipart/form-data'
}

export const addProducts = (productData) => {

  return async function(dispatch) {
    dispatch(isLoading(false))
    try {
      await axios.post('http://localhost:3030/api/products', productData, {headers});
      dispatch(setProducts(productData));
      dispatch(isLoading(true))
    } catch (error) {
      console.error('\nошибка: ', error.message, ' \nкод: ', error.code);

      dispatch(isLoading(true))
    }
  }
};

export const changeProducts = (productData) => {

  return async function(dispatch) {
    dispatch(isLoading(false))
    try {
      await axios.put('http://localhost:3030/api/products', productData, {headers});
      dispatch(setProducts(productData));
      dispatch(isLoading(true))
    } catch (error) {
      console.error('\nошибка: ', error.message, ' \nкод: ', error.code);
      dispatch(setProducts([]))
      dispatch(isLoading(true))
    }
  }
};

export const deleteProducts = (id) => {

  return async function(dispatch) {
    dispatch(isLoading(false))
    try {
      await axios.delete(`http://localhost:3030/api/products/${id}`);
      dispatch(isLoading(true))
    } catch (error) {
      console.error('\nошибка: ', error.message, ' \nкод: ', error.code);
      dispatch(isLoading(true))
    }
  }
};

