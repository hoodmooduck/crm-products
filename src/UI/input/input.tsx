
import { ChangeEvent } from 'react';
import './input.scss';

type PropsInput = {
  id: string,
  value: string,
  type: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  className: string,
}

function Input({id,value, type, onChange, className} : PropsInput) {

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
