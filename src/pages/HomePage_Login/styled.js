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
`;

export const Form = styled.form`
  width: 303px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 6px;
  
  input {
    width: 303px;
    height: 45px;

    font-family: "Lexend Deca";
    font-style: normal;
    /* font-weight: 400; */
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
    /* color: ${formColor}; */
  }
  button {
    align-self: center;

  }
`;
