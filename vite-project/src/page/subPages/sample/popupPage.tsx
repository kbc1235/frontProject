import { useState } from "react";
import PopUp from "../../../components/popUp";

export default function PopupPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsPopupOpen(true);
        }}
      >
        팝업오픈
      </button>

      {isPopupOpen && (
        <PopUp
          title={"샘플팝업"}
          content={<>test</>}
          onClose={() => {
            setIsPopupOpen(!isPopupOpen);
          }}
        />
      )}
    </div>
  );
}
