import axios from 'axios';
import { setProducts } from './getProducts.js';

export const getAllProducts = () => {
  return async function(dispatch){
    try {
      const response = await axios.get('http://localhost:3030/api/products')
      dispatch(setProducts((JSON.parse(response.data))))

    } catch (error) {
      console.error('\nошибка: ',error.message, ' \nкод: ', error.code);
      dispatch(setProducts([]))
    }
  }
};

const headers = {
  "Content-Type": 'multipart/form-data'
}

export const addProducts = (productData) => {
  return async function(dispatch) {
    try {
      await axios.post('http://localhost:3030/api/products', productData, {headers});
      dispatch(setProducts(productData));
    } catch (error) {
      console.error('\nошибка: ', error.message, ' \nкод: ', error.code);
      // dispatch(setProducts([]))
    }
  }
};

export const changeProducts = (productData) => {
  return async function(dispatch) {
    try {
      await axios.put('http://localhost:3030/api/products', productData, {headers});
      dispatch(setProducts(productData));
    } catch (error) {
      console.error('\nошибка: ', error.message, ' \nкод: ', error.code);
      dispatch(setProducts([]))
    }
  }
};

export const deleteProducts = (id) => {
  return async function(dispatch) {
    try {
      await axios.delete(`http://localhost:3030/api/products/${id}`);
    } catch (error) {
      console.error('\nошибка: ', error.message, ' \nкод: ', error.code);
      dispatch(setProducts([]))
    }
  }
};

