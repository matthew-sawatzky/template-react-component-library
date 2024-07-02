import React from 'react';
import styled from 'styled-components';

export interface LabelProps {
  label?: string;
  htmlFor?: string;
  disabled?: boolean;
}

const StyledLabel = styled.label<LabelProps>`
  font-size: 1rem;
  color: grey;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    color: ${(props) => (props.disabled ? "grey" : "#0056b3")};
  }
`;

const Label: React.FC<LabelProps> = ({ disabled = false}) => {
  return (
    <StyledLabel disabled={disabled}>
      Test Label
    </StyledLabel>
  );
};


export default Label;
