import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  background: #e6e6e6;
  height: 100vh;
`;

export const Header = styled.div`
  img {
    height: 100px;
  }
`;

export const FormTitle = styled.h3``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
  
  border-radius: 5px;
  border: 1px solid #333;

  background: #cbcbcb;

  width: 40%;
  margin-bottom: 10px;
`;
