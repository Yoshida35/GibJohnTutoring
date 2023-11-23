import { styled } from "styled-components"
import NavigationBar from "../Navigation/NavigationBar"
import React from 'react';

export default function Home() {
  return (
    <>
      <NavigationBar/>
        <StyledDiv>
          Home
        </StyledDiv>
    </>
  )
}

const StyledDiv = styled.div`
font-size: 40px;
`