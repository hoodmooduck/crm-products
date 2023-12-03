import { ChangeEvent, useEffect, useState } from 'react'
import AddProductButton from '../../UI/addProduct/addProduct.tsx'
import RemoveProductButton from '../../UI/removeProduct/removeProduct.tsx'
import './sidebar.scss'
// @ts-ignore
import { addProducts, changeProducts, getAllProducts } from '../../store/api.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '../../store/getProducts.js';
import Input from '../../UI/input/input.jsx';



function Sidebar() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [errorValue, setErrorValue] = useState(-1)
    const [description, setDescritption] = useState('')
    const [validate, setValidtate] = useState(false)
    const dispatch = useDispatch()
    

    const [selectedFile, setSelectedFile] = useState(null);

    
    const productSelected = useSelector((state) => state.products.selectProd);
    const productData_selected = {
        id: productSelected?.id,
        title: name,
        price: parseInt(price),
        description: description,
        image: selectedFile
    }

    const productData = {
        title: name,
        price: parseInt(price),
        description: description,
        image: selectedFile
    }

    

    
    const handleFileInputChange = (e) => {
        e.preventDefault()
        const file = e.target.files[0];
        setSelectedFile(file);
  
      };

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
        if(name !== '' || price !==''){
            setValidtate(true)
        }
    },[name, price])
    useEffect(()=>{
        if(productSelected !== null){
            setName(productSelected.title)
            setDescritption(productSelected.description)
            setSelectedFile(null)
            setPrice(productSelected.price)
        }
    },[productSelected])
    function removeProduct(dis) {
        dis(changeProducts(productData_selected))
        resetProducts(dispatch)
        clearForm()
        selectProd(dispatch )
    }
    function selectProd(dis) {
        dis(selectProduct(null))
    }
    function resetProducts(dis) {
        dis(getAllProducts())
        clearForm()
    }
    function addProduct(dis) {
        if(name !== ''){
            if(price !==''){
                dis(addProducts(productData))
                resetProducts(dispatch)
                clearForm()
                setErrorValue(-1)
            }else{
                setErrorValue(1)
            }
        }else{
            setErrorValue(0)
        }
    }
    

    return(
        <section className="sidebar">
            <h2 className='sidebar-title'>Добавление товара</h2>
            <h2 className='sidebar-text'>Заполните все обязательные поля с *</h2>
            <form className='sidebar-form' action="/" method={productSelected === null ? "put" : "post"}>
                <div className="sidebar-form__string">
                    {errorValue === 0 ? <p className="sidebar-error">Обязательное поле для заполнения</p> : null}
                    <Input
                        onChange={changeName}
                        value={name}
                        type={'text'}
                        id={"sidebar-name"}
                        className={'sidebar-input'}
                    />
                    <label className='sidebar-label' htmlFor="sidebar-name">Название*</label>  
                </div>
                <div className="sidebar-form__string">
                    {errorValue === 1 ? <p className="sidebar-error">Обязательное поле для заполнения</p> : null}
                    <Input
                        onChange={changePrice}
                        value={price}
                        type={'text'}
                        id={"sidebar-price"}
                        className={'sidebar-input'}
                    />
                    <label htmlFor="sidebar-price">Цена*</label>
                </div>
                <div className="sidebar-form__string">
                    <input 
                        onChange={handleFileInputChange}
                        className='sidebar-input__file'
                        type="file" 
                        id="sidebar-img" 
                    />
                    <label htmlFor="sidebar-price">{selectedFile? selectedFile.name : 'Фото '}</label>
                </div>
                <div className="sidebar-form__string">
                    <textarea 
                        value={description}
                        onChange={changeDescription}
                        className='sidebar-textarea'
                        required
                    />
                    <label htmlFor="sidebar-price">Описание товара</label>
                </div>
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
        </section>
    )
}

export default Sidebar