import styled from "styled-components";

export const Container = styled.div`
  background: orange;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: blue;

  padding: 1rem;
`;

export const RightSide = styled.div`
  img {
    height: 50px;
  }
`;

export const LeftSide = styled.div`
  width: 40px;
  height: 40px;
  background: green;
  border-radius: 50%;
`;