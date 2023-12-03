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
        <article className='cardProduct'>
            <div className="cardProduct-controllButtonts">
                <button onClick={changeProduct} className="cardProduct-change control-btn"></button>
                <button onClick={deleteProduct} className="cardProduct-delete control-btn"></button>
            </div>
            <div className="cardProduct-img">
                <img src={props.image !== '' ? props.image : noImg} alt={props.title} />
            </div>
            <div className="cardProduct-info">
                <h2 className="cardProduct-title">{props.title}</h2>
                <p className="cardProduct-description">
                    <span className="bold">Описание: </span>
                    {props.description}
                </p>
                <p className="cardProduct-price">{props.price+' ₽'}</p>
            </div>

        </article>
    )
}

export default CardProduct
