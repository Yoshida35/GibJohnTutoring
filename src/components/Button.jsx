import styled from "styled-components";

const Button = (props) => {
    return ( 
        <StyledButton onClick={props.onClick} {...props.style}>{props.text}</StyledButton>
    );
};

const StyledButton = styled.button`

    font-size: 30px;

    background-color: white;
    border-color: transparent;
    border-radius: 15px;
    
    
    transition: 0.2s ease;
    &:hover {
        color: white;
        background-color: blue;
        transform: scale(1.1)
    }
    &:active {
        text-decoration: none;
        transform: scale(0.9)
    }
`

export default Button