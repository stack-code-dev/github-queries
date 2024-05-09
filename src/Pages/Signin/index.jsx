import * as S from "./styles";

import logoImg from '../../images/github-img.png'
import Input from "../../Components/Input";

export default function Signin () {
  return(
    <S.Container>
      <S.Header>
        <img src={logoImg} alt="logo-img" />
      </S.Header>

      <S.Form>
        <S.FormTitle>Sign In</S.FormTitle>

        <Input placeholder={'E-mail'} type={'email'} required />

        <Input placeholder={'Password'} type={'password'} required />

        <button>Signin</button>
      </S.Form>
    </S.Container>
  )
}