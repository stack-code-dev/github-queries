import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  height: calc(100vh - 196px);
  overflow-y: auto;
`;

export const Content = styled.div`
  padding: 0rem 2rem;
`;

export const Repositories = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  padding: 2rem;

  background: #e6e6e6;
  background: #222;

  border-radius: .7rem;

  margin-bottom: 1rem;
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

  text-decoration: none;

  cursor: pointer;

  transition: all .2s ease-in-out; 

  &:hover {
    text-decoration: underline;
  }
`;

export const Tag = styled.div`
  color: #717e8b;
  font-size: .9rem;

  border: 1px solid #717e8b;
  border-radius: 1rem;
  padding: .1rem .5rem;

  &:hover {
    background: #333;
    color: #fff;
  }
`;

export const Details = styled.span`
  color: #fff;
  font-size: 1.4rem;
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
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  gap: 2rem;
  
  color: #898b8d;
  font-size: 1.2rem;

  i {
    font-size: 1.2rem;
    margin-right: .3rem;
    color: #898b8d;
  }

  span:before {
    content: '';
    position: absolute;
    top: 7px;
    right: -10px;
    width: .3rem;
    height: .3rem;
    border-radius: 50%;
    background: #898b8d;
  }
`;

export const Language = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const Star = styled.span`
  position: relative;
`;

export const LastUpdated = styled.div`
  font-size: 1.1rem;
  color: #898b8d;
`;
