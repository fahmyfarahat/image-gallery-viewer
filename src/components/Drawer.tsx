import React from "react";
import styled from "@emotion/styled";
import theme from "../helpers/theme";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${theme.thumbnailDrawerBackgroundColor}
  position: absolute;
  top: 100%;
  transition: top .3s ease-in;
  z-index: 1000;

  &.opened {
    top: 0;
  }
`;

const ThumbnailGrid = styled.div<{ isInFullScreen: boolean }>`
  height: 100%;
  padding: 30px 30px 0 30px;
  overflow-y: auto;
  box-sizing: border-box;

  display: grid;
  grid-auto-rows: ${(props) =>
    props.isInFullScreen
      ? theme.thumbnailHeightFullscreen
      : theme.thumbnailHeight};
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: ${theme.thumbnailDrawerBackgroundColor};
  }

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.toolbarButtonColor};
  }
`;

const ThumbnailWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    opacity: .7;

    &:hover {
      opacity: 1;
    }

    &.current {
      opacity: 1;

      &:after {
        content: '';
        top: 0;
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        outline: 3px solid ${theme.thumbnailSelectedColor};
    }
`;

const Thumbnail = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
`;

interface DrawerProps {
  thumbnailUrls: string[];
  isOpen: boolean;
  isInFullScreen: boolean;
  currentIndex: number;
  onThumbnailSelectedHandler: (index: number) => void;
}

const Drawer: React.FC<DrawerProps> = ({
  thumbnailUrls = [],
  isOpen = false,
  isInFullScreen = false,
  currentIndex = 0,
  onThumbnailSelectedHandler = () => {},
}) => {
  return (
    <Container className={isOpen ? "opened" : ""}>
      <ThumbnailGrid isInFullScreen={isInFullScreen}>
        {thumbnailUrls.map((url, index) => {
          return (
            <ThumbnailWrapper
              key={index}
              className={currentIndex === index ? "current" : ""}
              onClick={() => onThumbnailSelectedHandler(index)}
            >
              <Thumbnail src={url} />
            </ThumbnailWrapper>
          );
        })}
      </ThumbnailGrid>
    </Container>
  );
};

export default Drawer;
