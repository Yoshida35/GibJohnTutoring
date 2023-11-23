import React, { useState } from 'react'
import { styled } from 'styled-components'

export default function Login() {
  const [FullName, setFullName] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [ConfirmPassword, setConfirmPassword] = useState();
  const [PhoneNumber, setPhoneNumber] = useState();
  const [DOB, setDOB] = useState();
  const [IsError, setIsError] = useState(false);
  let ErrorMessage = "Error Message"


  


  function Submit() {
    return (
      console.log("Submitted")
    )
  }

  return (
    <StyledPopup>
      <StyledInnerPopup>
      <p>Login:</p>
        <StyledTextBoxDiv>

            <p>Enter Full Name:</p>
            <StyledInput placeholder='Enter Full Name...'/>

            <p>Enter Email:</p>
            <StyledInput placeholder='Enter Email...'/>

            <p>Enter Password:</p>
            <StyledInput type='password' placeholder='Enter Password...'/>

            <p>Confirm Password:</p>
            <StyledInput type='password' placeholder='Confirm Password...'/>

            <p>Enter Phone Number:</p>
            <StyledInput placeholder='Enter Phone Number...'/>

            <p>Enter Date Of Birth:</p>
            <StyledInput placeholder='Enter DOB...'/>

            <StyledButton onClick={Submit}>Submit</StyledButton>
            <div>{IsError ? `${ErrorMessage}` : <p></p>}</div>
        </StyledTextBoxDiv>
    </StyledInnerPopup>
  </StyledPopup>
  )
}




const StyledTextBoxDiv = styled.div`
display: flex;
flex-direction: column;
align-items: stretch;
`

const StyledInput = styled.input`
`

const StyledButton = styled.button`
`

const StyledPopup = styled.div`
display: flex;
position: fixed;
width: -webkit-fill-available;
height: 100vh;
background-color: rgba(0, 0, 0, 0.3);
justify-content: center;
align-items: center;
top: 0px;
`

const StyledInnerPopup = styled.div`
position: relative;
padding: 32px;
width: 100%;
max-width: 640px;
background-color: skyblue;
`