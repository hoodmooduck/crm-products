import { useDispatch, useSelector } from "react-redux";
import CardProduct from "../../UI/cardProduct/cardProduct";
import empty from "../../assets/img/empty.svg";
import { deleteProducts, getAllProducts } from "../../store/api";
import { selectProduct } from "../../store/getProducts";
import './productList.scss'
import { useEffect, useState } from "react";
import Loader from "../loader/loader";

function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.value);
    const loading = useSelector((state) => state.products.loading);
  
    const [prod, setProd] = useState()
    const [load, setLoad] = useState()
    
    useEffect(() => {
      setProd(products)
      addProducts(dispatch)
    }, [prod]);

    useEffect(() => {
      setLoad(loading)
    }, [loading]);
  
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
    <div className="productList">
      {
        !load? 
        <Loader />
        :
        products.products.length === 0 ? 
        <div className="productList-isEmpty">
          <img src={empty} alt="empty" />
          <span className="productList-text">
            В данный момент товары отсутствуют
          </span>
        </div>
        : 
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

export default ProductList;
