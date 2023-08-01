import React, { useState, useEffect, useRef } from "react";
import Toolbar from "./Toolbar";
import styled from "@emotion/styled";
import Left from "../icons/Left";
import Right from "../icons/Right";
import Gallery from "../icons/Gallery";

import ToolbarButton from "./ToolbarButton";
import Drawer from "./Drawer";
import FullScreenAPI from "../helpers/FullScreenAPI";
import OpenSeadragonViewer from "./OpenSeadragonViewer";
import ZoomControls from "./ZoomControls";
import FullScreenControls from "./FullScreenControls";
import ImageInfo, { fetchImageInfos } from "../helpers/ImageInfo";
import theme from "../helpers/theme";

const Container = styled.div`
  position: relative;
  width: ${(props: { viewerWidth: string; viewerHeight: string }) =>
    props.viewerWidth};
  height: ${(props: { viewerWidth: string; viewerHeight: string }) =>
    props.viewerHeight};
  display: flex;
  flex-direction: column;

  &.fullscreen {
    height: 100%;
  }
`;

const ViewerWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow-y: hidden;
  flex-grow: 1;
  flex: 1;
`;

interface ImageGalleryProps {
  iiifUrls: string[];
  width?: string;
  height?: string;
  showToolbar?: boolean;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  iiifUrls,
  width = "800px",
  height = "500px",
  showToolbar = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [isInFullScreen, setIsInFullScreen] = useState<boolean>(false);
  const [imageInfos, setImageInfos] = useState<ImageInfo[]>([]);

  const reactIIIFViewerRef = useRef<HTMLDivElement | null>(null);
  const openSeadragonRef = useRef<any | null>(null);

  useEffect(() => {
    fetchImageInfos(iiifUrls).then((infos: ImageInfo[]) => {
      setImageInfos(infos);
    });

    const handleFullScreenChange = () => {
      if (
        document.fullscreenElement ||
        (document as any).webkitCurrentFullScreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement
      ) {
        setIsInFullScreen(true);
      } else {
        setIsInFullScreen(false);
        setDrawerOpen(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
    document.addEventListener("mozfullscreenchange", handleFullScreenChange);
    document.addEventListener("msfullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullScreenChange
      );
    };
  }, [iiifUrls]);

  const enterFullScreen = () => {
    FullScreenAPI.enter(reactIIIFViewerRef.current);
  };

  const exitFullScreen = () => {
    FullScreenAPI.exit();
  };

  const zoomIn = () => {
    openSeadragonRef.current.zoomIn();
  };

  const zoomOut = () => {
    openSeadragonRef.current.zoomOut();
  };

  const nextImage = () => {
    setCurrentIndex(Math.min(currentIndex + 1, iiifUrls.length - 1));
  };

  const previousImage = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0));
  };

  const setImage = (index: number) => {
    setCurrentIndex(index);
    toggleDrawer();
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const isFirstImage = () => currentIndex === 0;
  const isLastImage = () => currentIndex === iiifUrls.length - 1;

  const getThumbnailUrls = () => {
    return imageInfos.map((imageInfo) => {
      return imageInfo.getThumbnailUrl();
    });
  };

  return (
    <Container
      className={`react-iiif-viewer ${isInFullScreen ? "fullscreen" : ""}`}
      data-testid="react-iiif-viewer"
      ref={reactIIIFViewerRef}
      viewerWidth={width}
      viewerHeight={height}
      data-cur-iiif-url={iiifUrls[currentIndex]}
    >
      <ViewerWrapper>
        <OpenSeadragonViewer
          iiifUrl={iiifUrls[currentIndex]}
          ref={openSeadragonRef}
        />

        <Drawer
          thumbnailUrls={getThumbnailUrls()}
          isOpen={drawerOpen}
          isInFullScreen={isInFullScreen}
          currentIndex={currentIndex}
          onThumbnailSelectedHandler={(index) => setImage(index)}
        />
      </ViewerWrapper>

      <ZoomControls
        zoomInHandler={() => zoomIn()}
        zoomOutHandler={() => zoomOut()}
      />

      {FullScreenAPI.isEnabled() && (
        <FullScreenControls
          isInFullScreen={isInFullScreen}
          enterFullScreenHandler={() => enterFullScreen()}
          exitFullScreenHandler={() => exitFullScreen()}
        />
      )}

      {showToolbar && (
        <Toolbar
          left={
            <ToolbarButton
              icon={<Left fill={theme.toolbarButtonColor} />}
              titleText="previous image"
              onClickHandler={() => previousImage()}
              isDisabled={isFirstImage()}
            />
          }
          center={
            <ToolbarButton
              icon={<Gallery fill={theme.toolbarButtonColor} />}
              titleText="more images"
              onClickHandler={() => toggleDrawer()}
              isDisabled={false}
            />
          }
          right={
            <ToolbarButton
              icon={<Right fill={theme.toolbarButtonColor} />}
              titleText="next image"
              onClickHandler={() => nextImage()}
              isDisabled={isLastImage()}
            />
          }
        />
      )}
    </Container>
  );
};

export default ImageGallery;
