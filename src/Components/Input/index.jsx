import { InputComponent } from './style'

export default function Input({ placeholder, type, required }) {
  return(
    <InputComponent 
      placeholder={placeholder}
      type={type}
      required={required}
    />
  )
}