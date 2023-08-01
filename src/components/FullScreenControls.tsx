import React from "react";
import Expand from "../icons/Expand";
import Minimize from "../icons/Minimize";
import styled from "@emotion/styled";
import ViewerButton from "./ViewerButton";

const Container = styled.div`
  position: absolute;
  padding: 10px 0 0 10px;
  top: 0;
  left: 0;
`;

interface FullScreenControlsProps {
  isInFullScreen: boolean;
  enterFullScreenHandler: () => void;
  exitFullScreenHandler: () => void;
}

const FullScreenControls: React.FC<FullScreenControlsProps> = ({
  isInFullScreen,
  enterFullScreenHandler,
  exitFullScreenHandler,
}) => {
  const renderButton = () => {
    if (isInFullScreen) {
      return (
        <ViewerButton
          icon={<Minimize />}
          onClickHandler={exitFullScreenHandler}
          titleText="exit fullscreen"
        />
      );
    }

    return (
      <ViewerButton
        icon={<Expand />}
        onClickHandler={enterFullScreenHandler}
        titleText="enter fullscreen"
      />
    );
  };

  return <Container>{renderButton()}</Container>;
};

export default FullScreenControls;
