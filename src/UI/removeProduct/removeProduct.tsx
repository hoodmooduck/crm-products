import './removeProduct.scss'

interface propsInterface {
    disabled?: boolean,
    onClick: ()=> void
}

function RemoveProductButton({disabled, onClick}: propsInterface) {
    return(
        <div onClick={onClick} style={{display: `${disabled ? 'none' : 'flex'}`}} className='button-remPr'>
            <span className="button-UI_text">Отменить редактирование</span>
        </div>
    )
}

export default RemoveProductButton
