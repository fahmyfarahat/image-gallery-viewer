import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  display: block !important;
  height: 35px;
  width: 35px;
  background-color: #d0d0d0;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  outline: none;
`;

interface ViewerButtonProps {
  onClickHandler: () => void;
  icon: React.ReactNode;
  titleText: string;
}

const ViewerButton: React.FC<ViewerButtonProps> = ({
  onClickHandler,
  icon,
  titleText,
}) => {
  return (
    <Button onClick={onClickHandler} title={titleText}>
      {icon}
    </Button>
  );
};

export default ViewerButton;
