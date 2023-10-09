import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface ToastProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Toast({ value }: ToastProps) {
  const [toastText, setToastText] = useState("");
  useEffect(() => {
    if (toastText) {
      setTimeout(() => {
        setToastText(value);
      }, 2000);
    }
  }, [toastText]);
  return <ToastWrap>{toastText}</ToastWrap>;
}

export const ToastWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  padding: 10px;
  border-radius: 5px;
  background: #1e2c98;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
`;
