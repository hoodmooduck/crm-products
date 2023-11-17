import './cardProduct.scss'
import noImg from '../../assets/img/noProductImg.png'

type cardData = {
    id: number,
    title: string,
    description: string,
    image: string,
    price: string

}

interface cardPropsInterface {
    props: cardData,
    changeProduct: ()=> void,
    deleteProduct: () => void
}

function CardProduct({props, changeProduct, deleteProduct}: cardPropsInterface) {
    return(
        <div className='cardProduct'>
            <div className="cardProduct-controllButtonts">
                <div onClick={changeProduct} className="cardProduct-change control-btn"></div>
                <div onClick={deleteProduct} className="cardProduct-delete control-btn"></div>
            </div>
            <div className="cardProduct-img">
                <img src={props.image !== '' ? props.image : noImg} alt={props.title} />
            </div>
            <div className="cardProduct-title bold">{props.title}</div>
            <div className="cardProduct-description"><span className="bold">Описание: </span>{props.description}</div>
            <div className="cardProduct-price bold">{props.price+' ₽'}</div>
        </div>
    )
}

export default CardProduct
