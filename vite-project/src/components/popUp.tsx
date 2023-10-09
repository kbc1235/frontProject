import React from "react";
import styled from "styled-components";
interface PopUpProps {
  title: string;
  content: React.ReactNode;
  onClose: () => void;
}
export default function PopUp({ title, content, onClose }: PopUpProps) {
  return (
    <PopUpWrap>
      <PopUpContent>
        <PopUpHeader>
          <PopUpTitle>{title}</PopUpTitle>
          <PopUpClose onClick={onClose}>X</PopUpClose>
        </PopUpHeader>
        <PopUpBody>{content}</PopUpBody>
      </PopUpContent>
      <PopUpDim />
    </PopUpWrap>
  );
}

export const PopUpWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
`;

export const PopUpDim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.15);
`;
export const PopUpContent = styled.div`
  position: relative;
  min-width: 600px;
  max-width: 1200px;
  height: 400px;
  overflow-y: auto;
  border-radius: 10px;
  background-color: #fff;
  z-index: 1;
`;

export const PopUpHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  border-bottom: 1px solid #eef2ff;
`;

export const PopUpBody = styled.div`
  padding: 10px;
`;
export const PopUpTitle = styled.h4``;

export const PopUpClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-left: auto;
  border-radius: 50%;
  background: #e2e2e2;
  font-size: 12px;
`;
