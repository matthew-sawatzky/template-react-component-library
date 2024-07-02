import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledRadioButton = styled.input<RadioButtonProps>`
  margin: 10px;
  cursor: pointer;
  
  &:disabled {
    cursor: not-allowed;
    background-color: grey;
  }
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "grey" : "#0056b3")};
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({ label, disabled, ...props }) => {
  return (
    <label>
      <StyledRadioButton type="radio" disabled={disabled} {...props} />
      {label}
    </label>
  );
};

export default RadioButton;
