import styled from "styled-components";
import { baseColor2 } from "../../constants/colors";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 375px;
  height: 70px;
  background: ${baseColor2};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: fixed;
  top:0;

  /*  topo | direita | inferior | esquerda*/
  h1 {
    font-family: "Playball";
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    margin-top: 10px;
    margin-left: 18px;

    color: #ffffff;
  }
`;



export const StyledUserImg = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 98.5px;
  margin-top: 9px;
  margin-right: 18px;
`;
