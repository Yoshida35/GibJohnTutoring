import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import Popup from "../components/Popup";
import { useState } from "react";

const NavigationBar = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <StyledLogo>GibJohn Tutoring</StyledLogo>
      <StyledDiv>
        <Button
          onClick={() => {
            navigate("/");
          }}
          text="Home"
        />
        <Button
          onClick={() => {
            navigate("/FindATutor");
          }}
          text="Find a Tutor"
        />
        <Button onClick={() => setButtonPopup(true)} text="Login" />
      </StyledDiv>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />
    </>
  );
};

export default NavigationBar;

const StyledDiv = styled.div`
  display: flex;
  padding-right: 50px;
  padding-top: 20px;
  gap: 20px;
  justify-content: flex-end;
  align-items: flex-start;
`;

const StyledLogo = styled.div`
  position: absolute;
  padding-top: 20px;
`;
