import { useState } from 'react';
import logoImg from '../../images/github-img.png'
import Input from "../../Components/Input";
import Button from '../../Components/Button';
import { useAuth } from '../../hooks/auth';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../FirebaseConfig';

import * as S from "./styles";

export default function Signin () {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const { signIn, logged } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault()

    signIn(email, password)
  }

  const handleAuthWithGihub = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        if(!logged){
          const userImg = result.user.photoURL;
          const userName = result.user.displayName;
          const githubName = result.user.reloadUserInfo.screenName;

          signIn(userImg, userName, githubName)
        }
      })
      .catch((error) => console.log(error))
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
          placeholder={'Senha'} 
          type={'password'} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />

        <S.ButtonControllers>
          <Button type={'submit'}>
            Entrar
          </Button>

          <S.Paragrapher>
            ou
          </S.Paragrapher>

          <Button type={'button'} onClick={() => handleAuthWithGihub()}>
            <i className="pi pi-github" ></i>
            Continuar com Github
          </Button>
        </S.ButtonControllers>
      </S.Form>
    </S.Container>
  )
}