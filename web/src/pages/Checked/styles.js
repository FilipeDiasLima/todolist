import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 23px 30px 30px 140px;
  height: 100%;
  width: 100vw;

  > div + div {
    margin-top: 25px;
  }
`;

export const Titles = styled.div`
  display: flex;
  flex-direction: column;


  h1 {
    text-align: left;
    font-size: 4.5rem;
  }

  h2 {
    text-align: left;
    margin-top: 16px;
    font-size: 3rem;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  height: 100%;
  max-width: 100%;
  
  > div {
    margin-right: 25px;
    margin-top: 45px;
  }
`;