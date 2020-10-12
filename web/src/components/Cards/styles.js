import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  background: #FF9F69;
  max-width: 403px;
  max-height: 169px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  justify-content: space-between;
`;

export const Content = styled.div`
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
    color: #000;
    font-size: 2rem;
    line-height: 2.5rem;
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

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  color: #FFF;

  svg {
    margin-top: 15px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #7582D6;
    }
  }
`;