import styled from "styled-components";

export const Container = styled.div`
  grid-area: MH;

  display: flex;
  flex-direction: column;

  padding: 2rem;
`;

export const Title = styled.div`
  margin-bottom: 3rem;

  font-size: 2.3rem;
  font-weight: 600;
  color: #333;
`;

export const RigthSide = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  gap: 1rem;

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
`;

export const UserName = styled.span`
  display: block;
  
  font-size: 1.4rem;
  color: #333;
  font-weight: 600;
`;


