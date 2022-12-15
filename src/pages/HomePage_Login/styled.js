import styled from "styled-components";
import { formColor } from "../../constants/colors";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 180px;
    height: 178.38px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin: 68px 98px 33px 97px;
    /*  topo | direita | inferior | esquerda*/
  }
  p {
    margin-top:25px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;

    color: #52b6ff;
    cursor: pointer;
  }
`;

export const Form = styled.form`
  width: 303px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 6px;

  input {
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 6px;
    position: relative;

    ::placeholder {
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 19.976px;
      line-height: 25px;
      position: absolute;
      top: 7px;
      left: 8px;
      /* color: #DBDBDB; */
      color: ${formColor};
    }
  }
  button {
    align-self: center;
    width: 303px;
    height: 45px;
    background: #52b6ff;
    border-radius: 4.63636px;
    border: none;
    cursor: pointer;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;

    color: #ffffff;
  }
`;
