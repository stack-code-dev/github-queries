import { useLocation } from "react-router-dom";
import { useMemo } from "react";

import * as S from "./styles";

export default function MainHeader() {
  const { pathname } = useLocation();

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
          Ivo Junior
        </S.UserName>
        <img src={'https://avatars.githubusercontent.com/u/60287007?v=4'} alt="avatar" />
      </S.RigthSide>
      
      <S.Title>
        {pageName}
      </S.Title>
    </S.Container>
  )
}
