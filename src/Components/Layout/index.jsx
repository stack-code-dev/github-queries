import { Outlet } from "react-router-dom";
import Aside from "../Aside";
import Content from "../Content";
import MainHeader from "../MainHeader";

import * as S from "./styles";

export default function Layout() {
  return(
    <S.Grid>
      <MainHeader />
      <Aside />
      <Content>
        <Outlet />
      </Content>
    </S.Grid>
  )
}