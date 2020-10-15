import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  flex-direction: column;
  max-width: 82px;
  height: 100vh;
  width: 100%;

  padding: 30px 0;
  background: #FFFFFF;
  border-radius: 0px 35px 35px 0px;
  align-items: center;
  overflow: hidden;

  box-shadow: 3px 0px 7px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.div`
  margin-bottom: 260px;
  transition: transform 1s;

  &:hover {
    transform: rotate(360deg);
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  .link {
    border: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .unselected {
      width: 100%;
      height: 50px;
      text-decoration: none;
      display: flex;
      align-items: center;
      background: transparent;
      border: none;
      transition: transform 0.4s;

      svg {
        margin-left: 21px;
        color: #5D5F74;
        transition: color 0.3s;

        &:hover {
          color: #5F649A;
        }
      }

      &:hover {
        transform: scale(1.5);
      }
    }

    .selected {
      width: 100%;
      height: 50px;
      text-decoration: none;
      display: flex;
      align-items: center;
      background: transparent;
      border: none;
      transform: translateX(9px);

      svg {
        transform: scale(1.5);
        margin-left: 11px;
        color: #5F649A;
      }
    }

    & + div {
      margin-top: 63px;
    }
  }
`;