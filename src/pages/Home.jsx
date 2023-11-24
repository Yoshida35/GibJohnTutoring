import { styled } from "styled-components";
import NavigationBar from "../Navigation/NavigationBar";
import React from "react";
import ChatBot from "../components/ChatBot";

export default function Home() {
  return (
    <>
      <ChatBot />
      <NavigationBar />
      <StyledDiv>Home</StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  font-size: 40px;
`;
