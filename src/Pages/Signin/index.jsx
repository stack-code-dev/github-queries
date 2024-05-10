import logoImg from '../../images/github-img.png'
import Input from "../../Components/Input";
import Button from '../../Components/Button';
import { useAuth } from '../../hooks/auth';
import { useEffect } from 'react';

import * as S from "./styles";

export default function Signin () {
  const { logged, signIn } = useAuth()

  useEffect(() => {
    console.log(logged, 'PAGE: SIGNIN')
  },[logged])

  return(
    <S.Container>
      <S.Header>
        <img src={logoImg} alt="logo-img" />
      </S.Header>

      <S.Form onClick={() => signIn()}>
        <S.FormTitle>Sign In</S.FormTitle>

        <Input placeholder={'E-mail'} type={'email'} focus={true} required />

        <Input placeholder={'Password'} type={'password'} required />

        <Button type={'submit'}>Signin</Button>
      </S.Form>
    </S.Container>
  )
}