import './addProduct.scss'

interface propsInterface {
    disabled?: boolean,
    onClick: ()=> void,
    text: string
}

function AddProductButton({disabled, onClick, text}: propsInterface) {
    return(
        <button onClick={disabled? ()=>{} : onClick} className={`${disabled ? 'button-UI__disabled' : 'button-UI'}`}>
            <p className="button-UI_text">{text}</p>
        </button>
    )
}

export default AddProductButton
