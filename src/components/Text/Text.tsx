import React from 'react';
import styled from 'styled-components';

export interface TextProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const StyledText = styled.p<TextProps>`
  font-size: 16px;
  line-height: 1.5;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    color: ${(props) => (props.disabled ? "grey" : "#0056b3")};
  }
`;

const Text: React.FC<TextProps> = ({ disabled = false}) => {
  return (
    <StyledText disabled={disabled}>
      This is a test text.
    </StyledText>
  );
};


export default Text;
