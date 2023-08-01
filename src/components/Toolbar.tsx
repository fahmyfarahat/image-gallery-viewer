import React from "react";
import styled from "@emotion/styled";
import theme from "../helpers/theme";

const Container = styled.div`
  display: flex;
  height: ${theme.toolbarHeight};
  width: 100%;
  background-color: #000000;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

interface ToolbarProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
}

const Toolbar: React.FC<ToolbarProps> = ({ left, center, right }) => {
  return (
    <Container>
      <Left>{left}</Left>
      <Center>{center}</Center>
      <Right>{right}</Right>
    </Container>
  );
};

export default Toolbar;
