import './addProduct.scss'

interface propsInterface {
    disabled?: boolean,
    onClick: ()=> void
}

function AddProductButton({disabled, onClick}: propsInterface) {
    return(
        <div onClick={onClick} className={`${disabled ? 'disabledButton-UI' : 'button-UI_addPr'}`}>
            <span className="button-UI_text">Добавить товар</span>
        </div>
    )
}

export default AddProductButton
