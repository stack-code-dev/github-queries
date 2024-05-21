import styled from "styled-components";

export const Container = styled.aside`
  grid-area: AS;
  background: #222;

  border-right: 2px solid #333;
  padding: 1rem;
`;

export const Header = styled.header`
  margin-bottom: 3rem;
  padding: 1rem;
  
  img {
    height: 5rem;
  }
`;

export const MenuContent = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  padding: 1rem 1.5rem;

  a {
    display: flex;
    align-items: center;
    gap: .7rem;

    color: #333;
    font-size: 1.6rem;
    text-decoration: none;

    transition: all .2s ease-in-out;

    i {
      color: #fff;
    }
  }


  a:hover {
    transform: translate(.5rem);
    
    span {
      text-decoration: underline;
      color: #478be6;
    }

    i {
      color: #478be6;
    }
  }
`;

export const LinkTitle = styled.span`
  color: #fff;
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 3rem;
  left: 3rem;
  
  color: #fff;
  font-size: 1.6rem;
  text-transform: uppercase;
  transition: all .2s ease-in-out;
  
  cursor: pointer;

  i {
    margin-right: .7rem;
  }

  button {
    color: #fff;
    font-size: 1.6rem;
    text-transform: uppercase;
    
    background: none;
  }
  
  &:hover {
    transition: all .2s ease-in-out;
    transform: translate(.5rem);
    text-decoration: underline;
    color: #478be6;
  }
`;
