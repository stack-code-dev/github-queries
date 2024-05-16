import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Aside from "../Aside";
import Content from "../Content";
import MainHeader from "../MainHeader";
import { useAuth } from "../../hooks/auth";

import * as S from "./styles";

export default function Layout() {
  const { logged } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if(!logged) {
      navigate('/login', { replace: true })
    } 
    
  },[logged, navigate])

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