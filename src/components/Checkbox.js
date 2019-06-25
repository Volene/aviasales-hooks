import React from "react";
import styled from "styled-components";

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  
`;

const Icon = styled.svg`
  fill: none;
  stroke: #2196f3;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  cursor: pointer;
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`

  display: inline-block;
  width: 19px;
  height: 19px;
  background: ${props =>!props.checked ? "1px solid #d2d5d6" : "1px solid #2196f3"};
  border: ${props =>!props.checked ? "1px solid #d2d5d6" : "1px solid #2196f3"};
  border-radius: 3px;
  border-radius: 3px;
  transition: all 150ms;
  

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 0px pink;
  }

  ${Icon} {
    cursor: pointer;
    visibility: ${props => (props.checked ? "visible" : "hidden")}
  }
`;

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 19 19">
        <polyline points="6,7 9,11 14,5" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;
