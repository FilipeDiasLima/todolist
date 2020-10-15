import styled from 'styled-components';

import imageBack from '../../assets/background-image.png';

export const Container = styled.div`
  display: flex;
  height: 100vh;

  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 820px;
  
  > h1 {
    margin-bottom: 70px;
    font-size: 6rem;
    line-height: 7.5rem;
  }

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;

    > h2 {
      font-size: 2.8rem;
      line-height: 3.5rem;
    }

    > input{
      margin-top: 20px;
      border: none;
      box-sizing: border-box;
      border-radius: 15px;
      width: 100%;
      padding: 20px;
      background: #DAD9D9;
      font-size: 2rem;
      line-height: 2.5rem;

      & + input {
        margin-top: 16px;
      }

      &:focus {
        border: 2px solid #7671DE;
      }
    }

    > span {
      color: #F63C75;
      align-self: flex-start;
      margin: 0 3px 10px;
      font-weight: bold;
      font-size: 1.4rem;
    }

    > button {
      border-radius: 10px;
      border: 0;
      width: 70%;
      padding: 0 16px;
      height: 56px;
      background: #7671DE;
      border-radius: 15px;
      font-weight: 500;
      margin-top: 16px;
      font-size: 2.3rem;
      color: #fff;
      transition: background-color 0.3s;

      &:hover {
        background-color: #4A45A8;
      }
    }
  }

  a {
      color: #2B00FF;
      display: block;
      margin-top: 16px;
      text-decoration: none;
      transition: color 0.2s;
      font-size: 2rem;
    }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${imageBack}) no-repeat center;
  background-size: cover;
  border-radius: 0px 50px 50px 0px;
`;