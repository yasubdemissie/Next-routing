"use client";
import { useRouter } from "next/navigation";

function ModalBackDrop() {
  const navigate = useRouter();
  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          navigate.back();
        }
      }}
    />
  );
}

export default ModalBackDrop;
