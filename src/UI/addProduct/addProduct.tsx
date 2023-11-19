import './addProduct.scss'

interface propsInterface {
    disabled?: boolean,
    onClick: ()=> void,
    text: string
}

function AddProductButton({disabled, onClick, text}: propsInterface) {
    return(
        <div onClick={disabled? ()=>{} : onClick} className={`${disabled ? 'disabledButton-UI' : 'button-UI_addPr'}`}>
            <span className="button-UI_text">{text}</span>
        </div>
    )
}

export default AddProductButton
