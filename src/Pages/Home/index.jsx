import * as S from "./styles";

import logoImg from '../../images/github-img.png'
import { useAuth } from "../../hooks/auth";

export default function Home () {
  const { logged } = useAuth()

  console.log(logged, 'PAGE: HOME')

  return(
    <S.Container>
      <S.Header>
        <S.RightSide>
          <img src={logoImg} alt="logoImg" />
        </S.RightSide>

        <S.LeftSide>
          <section></section>
        </S.LeftSide>
      </S.Header>
      <h2>HOME</h2>
    </S.Container>
  )
}