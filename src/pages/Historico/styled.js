import styled from "styled-components";
import {
    textColor,
    baseColor1,
    baseColor2,
    formColor,
  } from "../../constants/colors";
  
  export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 375px;
  min-height: 100vh;
  background-color: #f2f2f2;
  padding-bottom: 200px;

  h3 {
    /*  topo | direita | inferior | esquerda*/

    margin: 0 20px 0 17px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: ${textColor};
  }
`;

export const SubHeader = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 90px 0px 28px 0;
  /*  topo | direita | inferior | esquerda*/
  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: ${baseColor2};
  }

  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    margin-top: 17px;
    color: ${textColor};
  }
`;