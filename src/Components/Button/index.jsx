import { ButtonComponents } from "./styles";

export default function Button({ type, children }) {
  return(
    <ButtonComponents type={type}>
      {children}
    </ButtonComponents>
  )
}