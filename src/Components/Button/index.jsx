import { ButtonComponents } from "./styles";

export default function Button({ type, children, onClick }) {
  return(
    <ButtonComponents type={type} onClick={onClick}>
      {children}
    </ButtonComponents>
  )
}