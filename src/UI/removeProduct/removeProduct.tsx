import './removeProduct.scss'

interface propsInterface {
    disabled?: boolean,
}

function RemoveProductButton({disabled}: propsInterface) {
    return(
        <div className={`${disabled ? 'disabledButton-UI' : 'button-remPr'}`}>
            <span className="button-UI_text">Отменить редактирование</span>
        </div>
    )
}

export default RemoveProductButton
