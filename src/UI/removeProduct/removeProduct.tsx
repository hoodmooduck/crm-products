import './removeProduct.scss'

interface propsInterface {
    disabled?: boolean,
    onClick: ()=> void
}

function RemoveProductButton({disabled, onClick}: propsInterface) {
    return(
        <button onClick={onClick} style={{display: `${disabled ? 'none' : 'flex'}`}} className='button-remPr'>
            <span className="button-remPr_text">Отменить редактирование</span>
        </button>
    )
}

export default RemoveProductButton
