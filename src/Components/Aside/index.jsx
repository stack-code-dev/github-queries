import { Link } from "react-router-dom";
import logoImg from '../../images/github-img.svg'
import { useAuth } from "../../hooks/auth";
import { Button } from "primereact/button";

import * as S from "./styles";

export default function Aside() {
  const { signOut } = useAuth()

  return (
    <S.Container>
      <S.Header>
        <img src={logoImg} alt="logoImg" />
      </S.Header>

      <S.MenuContent>
        <Link to='/my-repositories'>
          <i className="pi pi-book" style={{ fontSize: '1.3rem' }}></i>
          <S.LinkTitle>
            Meus repositórios
          </S.LinkTitle>
        </Link>

        <Link to='/others-repositories'>
          <i className="pi pi-server" style={{ fontSize: '1.3rem' }}></i>
          <S.LinkTitle>
            Outros repositórios
          </S.LinkTitle>
        </Link>

        <Link to='/search-user'>
          <i className="pi pi-user" style={{ fontSize: '1.3rem' }}></i>
          <S.LinkTitle>
            Buscar usuários
          </S.LinkTitle>
        </Link>
      </S.MenuContent>

      <S.Footer>
        <Button onClick={() => signOut()}>
          <i className="pi pi-sign-out" style={{ fontSize: '1.3rem' }}></i>
          sair
        </Button>
      </S.Footer>
    </S.Container>
  )
}
