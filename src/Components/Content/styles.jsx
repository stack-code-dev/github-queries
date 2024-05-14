import styled from "styled-components";
import logoGit2 from '../../images/logo-git2.svg'

export const Container = styled.div`
  grid-area: CT;
  background: #fff;

  display: flex;
  flex-direction: column;

  position: relative;
  background-image: url(${logoGit2});
  background-position: bottom -120px right -200px;
  background-size: 95vh;
  background-repeat: no-repeat;

  gap: 2.5rem;

  height: calc(100vh - 130px);

  overflow: hidden;
`;
