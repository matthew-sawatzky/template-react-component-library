import React, { useState } from "react";
import styled from "styled-components";

// Define props interface
export interface DropdownProps {
  options?: string[];
  disabled?: boolean;
}

const DropdownContainer = styled.div`
  position: relative;
  width: 200px;
`;

const DropdownSelect = styled.select<{ disabled?: boolean }>`
  width: 100%;
  background-color: ${(props) => (props.disabled ? "#f0f0f0" : "white")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "grey" : "#0056b3")};
  }
`;

const Dropdown: React.FC<DropdownProps> = ({ options, disabled = false }) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <DropdownContainer>
      <DropdownSelect
        value={selectedOption}
        onChange={handleChange}
        disabled={disabled}
      >
        <option value="">Select an option...</option>
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </DropdownSelect>
    </DropdownContainer>
  );
};

export default Dropdown;
