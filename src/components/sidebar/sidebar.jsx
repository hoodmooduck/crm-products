import { ChangeEvent, useEffect, useState } from 'react'
import AddProductButton from '../../UI/addProduct/addProduct.tsx'
import RemoveProductButton from '../../UI/removeProduct/removeProduct.tsx'
import './sidebar.scss'
// @ts-ignore
import { addProducts, changeProducts, getAllProducts } from '../../modules/api.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '../../modules/getProducts.js';



function Sidebar() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescritption] = useState('')
    const [validate, setValidtate] = useState(false)
    const dispatch = useDispatch()
    const productSelected = useSelector((state) => state.products.selectProd);

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInputChange = (e) => {
      e.preventDefault()
      const file = e.target.files[0];
      setSelectedFile(file);
      console.log(e.target.files[0]);
    };

    const productData = {
        title: name,
        price: parseInt(price),
        description: description,
        image: selectedFile
    }

    const productData_selected = {
        id: productSelected?.id,
        title: name,
        price: parseInt(price),
        description: description,
        image: productSelected?.image
    }

    const changeName = (e) => {
        setName(e.target.value)        
    }

    const changePrice = (e) => {
        setPrice(e.target.value)
    }

    const changeDescription = (e) => {
        setDescritption(e.target.value)
    }

    const clearForm = () => {
        setName('')
        setDescritption('')
        setSelectedFile(null)
        setPrice('')
    }

    useEffect(()=>{
        if(name !== '' && price !==''){
            setValidtate(true)
        }
    },[name, price])
    useEffect(()=>{
        if(productSelected !== null){
            setName(productSelected.title)
            setDescritption(productSelected.description)
            setSelectedFile(null)
            setPrice(productSelected.price)
        }else{
            clearForm()
        }
    },[productSelected])
    function removeProduct(dis) {
        dis(changeProducts(productData_selected))
        resetProducts(dispatch)
        clearForm()
        selectProd(dispatch)
    }
    function selectProd(dis) {
        dis(selectProduct(null))
    }
    function resetProducts(dis) {
        dis(getAllProducts())
        clearForm()
    }
    function addProduct(dis) {
        dis(addProducts(productData))
        resetProducts(dispatch)
    }
    

    return(
        <div className="sidebar">
            <span className='sidebar-title'>Добавление товара</span>
            <span className='sidebar-text'>Заполните все обязательные поля с *</span>
            <form action="/" method={productSelected === null ? "put" : "post"}>
                <input 
                    onChange={changeName}
                    value={name} 
                    className='inp-class'
                    type="text" 
                    placeholder='Название*' 
                    id="sidebar-name"
                />
                <input 
                    onChange={changePrice}
                    value={price}
                    className='inp-class' 
                    type="number" 
                    placeholder='Цена*' 
                    id="sidebar-price" 
                />
                <input 
                    onChange={handleFileInputChange}
                    className='inp-class'
                    type="file" id="sidebar-img" 
                />
                <textarea 
                    value={description}
                    onChange={changeDescription}
                    className='inp-class'
                    placeholder='Описание товара'
                >
                </textarea>
                <AddProductButton 
                onClick=
                {
                    productSelected !== null ?
                    ()=>removeProduct(dispatch)
                    :
                    ()=> addProduct(dispatch)
                } 
                disabled={!validate ? true : false}
                text={productSelected !== null ? 'Редактировать товар' : 'Добавить товар'}
                />
                <RemoveProductButton
                    disabled={productSelected !== null ? false : true}
                    onClick={()=> selectProd(dispatch)}
                />
            </form>
        </div>
    )
}

export default Sidebar