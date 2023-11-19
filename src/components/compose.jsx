
import { useEffect, useState } from 'react';
import '../index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProducts, getAllProducts } from '../modules/api';
import CardProduct from '../UI/cardProduct/cardProduct.tsx'
import Sidebar from './sidebar/sidebar.jsx'
import { selectProduct } from '../modules/getProducts.js';



function Compose() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.value);


  const [prod, setProd] = useState()

  
  useEffect(() => {
    setProd(products)
    addProducts(dispatch)
  }, [prod]);

  function addProducts(dis) {
    dis(getAllProducts())
  }

  function selectProd(dis, product) {
    dis(selectProduct(product))
  }
  
  function deleteProduct(dis, id) {
    dis(deleteProducts(id))
    setProd(products)
  }
  
  return (
    <div className="wrapper">
      <Sidebar ></Sidebar>
      {
        products.products && products.products.map((el,idx)=>(
          <CardProduct 
            deleteProduct={() => deleteProduct(dispatch, el.id)}
            changeProduct={()=> selectProd(dispatch, el)}  
            props={el} 
            key={idx}
          />
        ))
      }
    </div>
  );
}

export default Compose;
