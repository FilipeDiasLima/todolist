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

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  background: #8692FF;
  max-width: 403px;
  max-height: 169px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  justify-content: space-between;
  overflow: hidden;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.35);
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.03);
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 319px;
  
  > strong {
    color: #FFF;
    font-size: 2rem;
    line-height: 2.5rem;
  }

  > span {
    margin-top: 6px;
    color: #FFF;
    font-size: 2rem;
    line-height: 2.5rem;
    min-height: 75px;
    width: 100%;
  }

  > footer {
    margin-top: 12px;
    display: flex;
    flex-direction: row;

    > span {
      color: #FFF;
      font-size: 1.6rem;
      line-height: 2rem;

      & + span{
        margin-left: 20px;
      }
    }
  }
`;

export const CardIcons = styled.div`
  display: flex;
  flex-direction: column;

  a,button {
    text-decoration: none;
    color: #FFF;
    background: transparent;
    border: none;

    svg {
      margin-top: 15px;
      cursor: pointer;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.3);
      }
    }
  }
`;