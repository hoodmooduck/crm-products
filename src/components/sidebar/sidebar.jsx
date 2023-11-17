// взять id объекта заусунть его в один слайс, затем после нажатия на кнопку сохранить изменения 
// нужно будет пройтись Array.filter() по всему доступному массиву и заменить элемент 
// Array.filter(el => el.id === id)
import { ChangeEvent, useEffect, useState } from 'react'
import AddProductButton from '../../UI/addProduct/addProduct.tsx'
import './sidebar.scss'
// @ts-ignore
import { addProducts, getAllProducts } from '../../modules/api.js';
import { useDispatch } from 'react-redux';



function Sidebar() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescritption] = useState('')
    const [validate, setValidtate] = useState(false)
    const dispatch = useDispatch()

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInputChange = (e) => {
      e.preventDefault()
      const file = event.target.files[0];
      setSelectedFile(file);
      console.log(event.target.files[0]);
    };

    const productData = {
        title: name,
        price: parseInt(price),
        description: description,
        image: selectedFile
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

    useEffect(()=>{
        if(name !== '' && price !==''){
            setValidtate(true)
        }
    },[name, price])
    function resetProducts(dis) {
        dis(getAllProducts())
    }
    function addProduct(dis) {
        dis(addProducts(productData))
        resetProducts(dispatch)
    }
    

    return(
        <div className="sidebar">
            <span className='sidebar-title'>Добавление товара</span>
            <span className='sidebar-text'>Заполните все обязательные поля с *</span>
            <form action="/" method="post">
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
                    type="file" id="sidebar-img" />

                <textarea 
                    value={description}
                    onChange={changeDescription}
                    className='inp-class'
                    placeholder='Описание товара'
                >
                </textarea>
                <AddProductButton onClick={()=> addProduct(dispatch)} disabled={!validate ? true : false}></AddProductButton>
            </form>
        </div>
    )
}

export default Sidebar