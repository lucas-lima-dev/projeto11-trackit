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
  justify-content: space-between;
  margin: 22px 0px 28px 0;
  /*  topo | direita | inferior | esquerda*/
  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: ${baseColor2};
  }

  button {
    width: 40px;
    height: 35px;
    background: #52b6ff;
    border: none;
    border-radius: 4.63636px;
    cursor: pointer;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
    line-height: 34px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #ffffff;
  }
`;

export const StyledHabitoCard = styled.div`
  width: 340px;
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 29px;
`;

export const HabitoInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  margin:18px;
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
`;

export const WeekDayContainer = styled.div`
  display: flex;
  
`;

export const WeekDay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right:4px;
  background-color: #ffffff;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;

  /* color: #DBDBDB; */
  color: ${formColor};
`;
