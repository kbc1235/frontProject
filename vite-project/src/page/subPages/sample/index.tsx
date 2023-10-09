import React from "react";
import { useNavigate } from "react-router-dom";
export default function PopupPageSampleMain() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/sample/popup");
        }}
      >
        POPUP SAMPLE
      </button>
    </div>
  );
}
