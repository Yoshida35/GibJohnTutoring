import { styled } from "styled-components";
import ChatBoxLogo from "../assets/ChatBoxLogo.png";

export default function ChatBot() {
  function ChatBoxOnClick() {}
  return (
    <StyledDiv onClick={ChatBoxOnClick}>
      <StyledImage src={ChatBoxLogo} alt="Speech Chat Box Logo" />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: fixed;
  padding-left: 90vw;
  padding-top: 85vh;

  // position: fixed;
  // top: 80%;
  // left: 80%;
`;

const StyledImage = styled.img`
  width: 70px;
`;
