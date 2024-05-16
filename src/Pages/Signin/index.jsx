import { useState } from 'react';
import logoImg from '../../images/github-img.png'
import Input from "../../Components/Input";
import Button from '../../Components/Button';
import { useAuth } from '../../hooks/auth';

import * as S from "./styles";

export default function Signin () {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const { signIn } = useAuth()

  const handleLogin = (e) => {
    e.preventDefault()

    signIn(email, password)
  }

  return(
    <S.Container>
      <S.Header>
        <img src={logoImg} alt="logo-img" />
      </S.Header>

      <S.Form onSubmit={(e) => handleLogin(e)}>
        <S.FormTitle>Sign In</S.FormTitle>

        <Input 
          placeholder={'E-mail'}
          type={'email'}
          focus={true}
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />

        <Input 
          placeholder={'Password'} 
          type={'password'} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />

        <Button type={'submit'}>
          Signin
        </Button>
      </S.Form>
    </S.Container>
  )
}