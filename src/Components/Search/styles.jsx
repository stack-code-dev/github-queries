import styled from "styled-components";

export const SearchGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3.2rem;

  input {
    width: 70%;
    border: 1px solid #333;
    border-radius: 5px 0px 0px 5px;

    padding: .7rem 1.5rem;

    font-size: 1.2rem;

    box-shadow: 0 0 0 0;
  }

  button {
    border-radius: 0px 5px 5px 0px;
    background: #333;
    box-shadow: 0 0 0 0;

    transition: all .2s ease-in-out;

    &:hover {
      filter: opacity(.8)
    }
  }
`;