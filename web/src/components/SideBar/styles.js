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
  background: transparent;
  align-items: center;
  overflow: hidden;

  box-shadow: 3px 0px 7px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.div`
  margin-bottom: 260px;
  font-size: 3rem;
  line-height: 3.7rem;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  .link {
    background: #5F649A;
    border: none;
    width: 100%;

    a {
      width: 100%;
      height: 50px;
      text-decoration: none;
      display: flex;
      align-items: center;
      background: #EFF0F2;
      border: none;
      transition: transform 0.2s;

      svg {
        margin-left: 21px;
        color: #5D5F74;
        transition: color 0.3s;

        &:hover {
          color: #5F649A;
        }
      }

      &:hover {
        transform: translateX(10px);
      }
    }

    .selected {
      width: 100%;
      height: 50px;
      text-decoration: none;
      display: flex;
      align-items: center;
      background: #EFF0F2;
      border: none;
      transform: translateX(10px);

      svg {
        margin-left: 11px;
        color: #5D5F74;
      }
    }

    & + div {
      margin-top: 63px;
    }
  }
`;