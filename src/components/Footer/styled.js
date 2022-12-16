import styled from "styled-components";
import { baseColor1 } from "../../constants/colors";

export const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 375px;
  height: 70px;
  background: #ffffff;
  position: fixed;
  bottom: 0;
  


  h4,h5 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    cursor: pointer;
    color: ${baseColor1};
    
  }
  

  img{
    margin-bottom: 50px;
    cursor: pointer;
  }
`;
