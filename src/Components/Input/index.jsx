import { InputComponent } from './styles'

export default function Input({ placeholder, type, required, focus, onChange }) {
  return(
    <InputComponent 
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      required={required}
      autoFocus={focus}
    />
  )
}