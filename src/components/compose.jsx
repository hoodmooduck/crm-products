
import { useEffect, useState } from 'react';
import '../index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProducts, getAllProducts } from '../modules/api';
import CardProduct from '../UI/cardProduct/cardProduct.tsx'
import Sidebar from './sidebar/sidebar.jsx'



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
  
  function deleteProduct(dis, id) {
    dis(deleteProducts(id))
    setProd(products)
  }
  
  return (
    <div className="wrapper">
      <Sidebar></Sidebar>
      {
        products.products && products.products.map((el,idx)=>(
          <CardProduct deleteProduct={() => deleteProduct(dispatch, el.id)} props={el} key={idx}></CardProduct>
        ))
      }
    </div>
  );
}

export default Compose;
