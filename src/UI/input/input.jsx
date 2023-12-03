
import './input.scss';



function Input({id,value, type, onChange, className}) {

  return (
    <input 
        onChange={onChange}
        value={value}
        className={className} 
        type={type} 
        id={id} 
        required
    />
  );
}

export default Input;
