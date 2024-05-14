import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items : center;
  flex-direction: column;

  font-weight: 500;
  font-size: 1.7rem;

  img {
    padding: 2rem;
    height: 35rem;
    width: 35rem;
  }
`;

export const Message = styled.h2`
    background: #fff;
    padding: .5rem 1rem;
    border-radius: 10px;
    color: #6556FF;
`;
