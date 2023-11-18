import React, { ReactElement, useEffect, useRef, useState } from "react";

type Props = { isOpen: boolean; onClose: () => void; children: ReactElement };

const Modal = ({ isOpen, onClose, children }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mouseup", handleClickOutside);
    } else {
      document.removeEventListener("mouseup", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 flex items-center p-4 justify-center${
        isOpen ? "opacity-1 z-[1000]" : "opacity-0 z-[-10]"
      }`}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div
        className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg z-10 ${
          isOpen ? "scale-100" : "scale-0"
        }`}
        ref={modalRef}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
