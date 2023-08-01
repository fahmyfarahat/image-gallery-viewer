import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import OpenSeadragon from "openseadragon";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";

const ZOOM_PER_CLICK = 2.0;
const ZOOM_IN_FACTOR = ZOOM_PER_CLICK / 1.0;
const ZOOM_OUT_FACTOR = 1.0 / ZOOM_PER_CLICK;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #202020;
`;

interface OpenSeadragonViewerProps {
  iiifUrl: string;
}

export interface OpenSeadragonViewerHandles {
  zoomIn: () => void;
  zoomOut: () => void;
}

const OpenSeadragonViewer = forwardRef<
  OpenSeadragonViewerHandles,
  OpenSeadragonViewerProps
>((props, ref) => {
  const { iiifUrl } = props;
  const viewerId = useRef(uuidv4());
  const openSeadragon = useRef<OpenSeadragon.Viewer | null>(null);

  useEffect(() => {
    openSeadragon.current = new (OpenSeadragon as any)({
      id: viewerId.current,
      tileSources: [iiifUrl],
      showNavigationControl: false,
      visibilityRatio: 1,
    });

    return () => {
      openSeadragon.current?.destroy();
    };
  }, [iiifUrl]);

  const zoomIn = () => {
    openSeadragon.current?.viewport.zoomBy(ZOOM_IN_FACTOR);
    openSeadragon.current?.viewport.applyConstraints();
  };

  const zoomOut = () => {
    openSeadragon.current?.viewport.zoomBy(ZOOM_OUT_FACTOR);
    openSeadragon.current?.viewport.applyConstraints();
  };

  useImperativeHandle(ref, () => ({
    zoomIn,
    zoomOut,
  }));

  return <Container id={viewerId.current} />;
});

export default OpenSeadragonViewer;
