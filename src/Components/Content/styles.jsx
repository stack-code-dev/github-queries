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

  padding: 0rem 2rem 0rem;

  gap: 2.5rem;

  height: calc(100vh - 130px);

  overflow-y: auto;

`;

export const Repositories = styled.div`
  display: flex;
  flex-direction: column;

  gap: .9rem;

  padding: 1rem;

  background: #e6e6e6;

  border-radius: .7rem;
`;

export const HeaderRepo = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
`;

export const Title = styled.a`
  color: #478be6;
  font-weight: bold;
  font-size: 2rem;
`;

export const Tag = styled.div`
  color: #333;
  font-size: .9rem;

  border: 1px solid #333;
  border-radius: 1rem;
  padding: .1rem .5rem;

  &:hover {
    background: #333;
    color: #fff;
  }
`;

export const Details = styled.h3``;

export const Star = styled.span`
  /* font-size: 1.5rem; */
  font-size: 1.2rem;
`;

export const Forks = styled.span`
  i {
    transform: rotate(270deg)
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  gap: 5rem;
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2rem;
`;

export const Language = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LastUpdated = styled.div`
`;
