import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 23px 30px 30px 140px;
  height: 100%;
  width: 100vw;
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

export const Content = styled.div`
  display: flex;
  margin-top: 100px;
  width: 100%;
  height: 60vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .add {
    width: 219px;
    height: 56px;
    background: #4CAA55;
    border-radius: 15px;
    border: none;
    margin-top: 36px;
    font-size: 2rem;
    font-weight: bold;
    color: #FFF;
    transition: background-color 0.3s;

    &:hover {
      background: #47C653;
    }
  }

  .cancel {
    width: 151px;
    height: 50px;
    background: #D45858;
    border-radius: 15px;
    border: none;
    margin-top: 15px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #FFF;
    transition: background-color 0.3s;

    &:hover {
      background: #F54A4A;
    }
  }

`;

export const NewCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  max-width: 500px;
  max-height: 300px;
  height: 100%;
  width: 100%;
  background: #5D5F74;
  border-radius: 10px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > input {
    border: none;
    padding: 5px;
    background: transparent;
    font-size: 2.4rem;
    color: #FFF;
    font-weight: bold;

    &::placeholder {
      color: #C4C4C4;
    }

  }

  .description{
    border: none;
    padding: 5px;
    background: transparent;
    font-size: 2.4rem;
    font-family: 'Quicksand';
    color: #FFF;
    margin-top: 30px;
    resize: none;

    &::placeholder {
      color: #C4C4C4;
    }
  }

`;

export const Time = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 50px;

  > input {
      border-radius: 5px;
      border: none;
      background: #EFF0F2;
      padding: 10px;
      max-width: 100px;
      max-height: 100px;
      width: 100%;
      height: 30px;
      font-size: 1.6rem;
    }

  > input+input{
      margin-left: 10px;
      max-width: 180px;
    }
`;