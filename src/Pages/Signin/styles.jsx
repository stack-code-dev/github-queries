import styled from "styled-components";

const bigScreen = '1100px'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #e6e6e6;
  height: 100vh;
`;

export const Header = styled.div`
  img {
    height: 100px;
  }

  @media screen and (min-width: ${bigScreen}) {
    img {
      height: 120px
    }
  }
`;

export const FormTitle = styled.h3`
  font-size: 1.8rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 1rem;
  
  width: 300px;
`;

export const ButtonControllers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;  

  p {
    display: block;
  }

  i {
    font-size: 1.5rem;
  }

  button[type="submit"] {
    font-weight: 500;

    border: 2px solid #000;
    transition: all .2s ease-in-out;

    &:hover {
      opacity: .7;
    }
  }

  button[type="button"] {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 1rem;

    background: #fff;
    color: #000;

    font-weight: 500;

    border: 2px solid #000;
    border-radius: 1rem;

    transition: all .2s ease-in-out;

    &:hover {
      color: #fff;
      background: #000;
    }
  }
`;

export const Paragrapher = styled.p`
  font-size: 1.5rem;
`;

