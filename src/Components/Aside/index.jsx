import { Link } from "react-router-dom";
import logoImg from '../../images/github-img.svg'

import * as S from "./styles";

export default function Aside() {
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
        <i className="pi pi-sign-out" style={{ fontSize: '1.3rem' }}></i>
        sair
      </S.Footer>
    </S.Container>
  )
}
