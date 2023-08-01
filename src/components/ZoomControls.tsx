import React from "react";
import styled from "@emotion/styled";
import ViewerButton from "./ViewerButton";
import Minus from "../icons/Minus";
import Plus from "../icons/Plus";

const Container = styled.div`
  position: absolute;
  padding: 10px 10px 0 0;
  top: 0;
  right: 0;

  & button:first-of-type {
    border-radius: 4px 4px 0 0;
    border-bottom: 1px solid #a9a9a9 !important;
  }

  & button:last-of-type {
    border-radius: 0 0 4px 4px;
  }
`;

interface ZoomControlsProps {
  zoomInHandler: () => void;
  zoomOutHandler: () => void;
}

const ZoomControls: React.FC<ZoomControlsProps> = ({
  zoomInHandler,
  zoomOutHandler,
}) => {
  return (
    <Container>
      <ViewerButton
        onClickHandler={zoomInHandler}
        icon={<Plus />}
        titleText="zoom in"
      />
      <ViewerButton
        onClickHandler={zoomOutHandler}
        icon={<Minus />}
        titleText="zoom out"
      />
    </Container>
  );
};

export default ZoomControls;
