import { InputComponent } from './styles'

export default function Input({ placeholder, type, required, focus }) {
  return(
    <InputComponent 
      placeholder={placeholder}
      type={type}
      required={required}
      autoFocus={focus}
    />
  )
}