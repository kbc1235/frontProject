import React from "react";
import styled from "styled-components";

interface ContWrapProps {
  children: React.ReactNode;
}

export default function ContWrap({ children }: ContWrapProps) {
  return <ContentWrap>{children}</ContentWrap>;
}

export const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: auto;
  box-sizing: border-box;
`;
