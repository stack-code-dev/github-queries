import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Content = styled.div`
  background: #222;
  border-radius: 8px;

  display: flex;
  padding: 2rem;

  gap: 1.5rem;
`;

export const UserImage = styled.div`
  img {
    width: 8rem;
    height: 8rem;

    border-radius: 50%
  }
`;

export const CentralContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 1rem;
`;

export const UserTitle = styled.div`
  display: flex;
  align-items: center;

  gap: .8rem;
`;

export const UserName = styled.h2`
  color: #478be6;
  font-weight: bold;
  font-size: 2rem;
`;

export const LoginName = styled.h4`
  color: #717e8b;;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const Details = styled.p`
  color: #fff;
  font-size: 1.4rem;
`;

export const Footer = styled.div`
  display: flex;
  gap: 2rem;

  color: #898b8d;
  font-size: 1rem;
`;

export const City = styled.span`
  display: flex;
  align-items: center;

  position: relative;

  font-size: 1.2rem;

  &:before {
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

export const RepositoriesNumber = styled.span`
  display: flex;
  align-items: center;
  position: relative;

  font-size: 1.2rem;

  i {
    font-size: 1.2rem;
    margin-right: .2rem
  }

  &:before {
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

export const Follows = styled.div`
  display: flex;
  align-items: center;

  font-size: 1.2rem;

  i {
    font-size: 1.2rem;
    margin-right: .2rem
  }
`;

export const RightSide = styled.div``;

export const Repositories = styled.button`
  padding: .5rem 1rem;
  border-radius: 5px;

  background: #333;
  color: #fff;

  transition: all .2s ease-in-out;

  cursor: pointer;

  &:hover {
    background: #fff;
    color: #333;
  }
`;

