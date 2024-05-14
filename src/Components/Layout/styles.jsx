import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 130px auto;

  grid-template-areas: 
  'AS MH'
  'AS CT';

  height: 100vh;
  
  min-width: 315px;
`;