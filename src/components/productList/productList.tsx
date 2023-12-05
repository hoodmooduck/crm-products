import CardProduct from "../../UI/cardProduct/cardProduct";
import empty from "../../assets/img/empty.svg";
import { deleteProducts, getAllProducts } from "../../store/api";
import { selectProduct } from "../../store/getProducts";
import './productList.scss'
import { useEffect, useState } from "react";
import Loader from "../loader/loader";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Product } from "../../store/types";


function ProductList() {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.products.value);
    const loading = useAppSelector((state) => state.products.loading);
  
    const [prod, setProd] = useState<Product[]>(products)
    const [load, setLoad] = useState<boolean>(loading)
    
    useEffect(() => {
      setProd(products)
      addProducts(dispatch)
    }, [prod]);

    useEffect(() => {
      setLoad(loading)
    }, [loading]);
  
    function addProducts(dis: any) {
      dis(getAllProducts())
    }
  
    function selectProd(dis: any, product: Product) {
      dis(selectProduct(product))
    }
    
    function deleteProduct(dis: any, id: number) {
      dis(deleteProducts(id))
      setProd(products)
    }
  
  return (
    <section className="productList">
      {
        !load? 
        <Loader />
        :
        products?.length === 0 ? 
        <figure className="productList-isEmpty">
          <img src={empty} alt="empty" />
          <figcaption className="productList-text">
            В данный момент товары отсутствуют
          </figcaption>
        </figure>
        : 
        products && products.map((el: any, idx: number)=>(
          <CardProduct
            deleteProduct={() => deleteProduct(dispatch, el.id)}
            changeProduct={()=> selectProd(dispatch, el)}  
            props={el} 
            key={idx}
          />
        ))
      }
    </section>
  );
}

export default ProductList;
