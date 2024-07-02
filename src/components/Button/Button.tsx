import React from "react";
import styled, { css } from "styled-components";

// Define props interface
export interface ButtonProps {
  label?: string;
  primary?: boolean;
  disabled?: boolean;
}

// Define styled component
const StyledButton = styled.button<ButtonProps>`
  --accent-color: black;

  /* Base styles */
  background: transparent;
  border-radius: 3px;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
  transition: all 200ms ease-in-out;
  width: 11rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "grey" : "#0056b3")};
  }
`;

const Button: React.FC<ButtonProps> = ({
  label,
  disabled = false,
  ...rest
}) => {
  return (
    <StyledButton disabled={disabled} {...rest}>
      {label}
    </StyledButton>
  );
};


export default Button;
