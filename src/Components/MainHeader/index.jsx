import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { useAuth } from "../../hooks/auth";

import * as S from "./styles";

export default function MainHeader() {
  const { pathname } = useLocation();
  const { user } = useAuth();

  const pageName = useMemo(() => {
    const typeStatus = {
      '/my-repositories': 'Meus repositórios',
      '/others-repositories': 'Outros repositórios',
      '/search-user': 'Buscar usuários'
    }

    return typeStatus[pathname]
  } ,[pathname])

  return (
    <S.Container>
      <S.RigthSide>
        <S.UserName>
          {user.userName}
        </S.UserName>
        <img src={user.userImg} alt="profileImage" />
      </S.RigthSide>
      
      <S.Title>
        {pageName}
      </S.Title>
    </S.Container>
  )
}
