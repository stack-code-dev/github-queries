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
