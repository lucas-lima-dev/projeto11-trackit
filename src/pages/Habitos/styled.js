import styled from "styled-components";
import { Trash } from "@styled-icons/bootstrap/Trash";

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

export const StyledAddHabito = styled.div`
  width: 340px;
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 29px;
  position: relative;
`;

export const HabitoInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 18px;
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
  margin-right: 4px;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  
  /* color: #DBDBDB; */
  background: ${props => props.selected ? "#CFCFCF" : "#ffffff"};
  border: 1px solid ${props => props.selected ? "CFCFCF" : "#d5d5d5"};
  color: ${props => props.selected ? "#ffffff" : "DBDBDB"};
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 130px;
  left: 143px;

  p {
    margin-right: 23px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    color: ${baseColor1};
    cursor:pointer;
  }

  button {
    width: 84px;
    height: 35px;
    background-color: ${baseColor1};
    border: none;
    border-radius: 4.63636px;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    color: #fff;
    cursor:pointer;
  }
`;

export const ContainerListaHabitos = styled.div`
`
export const StyledListaHabitos = styled.div`
  display: flex;
  flex-direction: column;
  gap:10px;
`;

export const StyledHabitoCard = styled.div`
  width: 340px;
  height: 91px;
  background: #ffffff;
  border-radius: 5px;
  position: relative;

  h4 {
    /*  topo | direita | inferior | esquerda*/
    margin: 13px 0 8px 15px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    color: ${textColor};
  }
`;

export const TrashCan = styled(Trash)`
  width: 13px;
  height: 15px;
  color: ${textColor};
  position: absolute;
  top: 15px;
  left: 315px;
`;

export const WeekDayContainer2 = styled.div`
display: flex;
margin-left:15px;
`
