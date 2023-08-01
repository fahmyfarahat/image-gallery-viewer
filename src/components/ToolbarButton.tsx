import React from "react";
import styled from "@emotion/styled";

const Button = styled.button<{ isDisabled: boolean }>`
  width: 45px;
  height: 45px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  opacity: ${(props) => (props.isDisabled ? 0.3 : 1)};
`;

interface ToolbarButtonProps {
  onClickHandler: () => void;
  icon: React.ReactNode;
  titleText: string;
  isDisabled: boolean;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  onClickHandler,
  icon,
  titleText,
  isDisabled = false,
}) => {
  return (
    <Button onClick={onClickHandler} title={titleText} isDisabled={isDisabled}>
      {icon}
    </Button>
  );
};

export default ToolbarButton;
