import Image, { StaticImageData } from "next/image";
import React, { useState, ReactElement } from "react";
import Modal from "../Modal/Modal";

type Props = {
  image: StaticImageData;
  modalBody: ReactElement;
  classname?: string;
  setClicked: () => void;
};

const ProjectCard = ({ image, modalBody, classname, setClicked }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className={`relative hover:scale-105 cursor-pointer max-w-[calc(50%-.5rem)] sm:max-w-[calc(33.3%-1.655rem)] ${classname}`}
        onClick={() => {
          setShowModal(true);
          setClicked();
        }}
      >
        <Image
          src={image}
          alt="catering-img"
          className="w-full h-full aspect-square object-cover shadow-lg"
        />
      </div>{" "}
      <Modal isOpen={showModal} onClose={closeModal}>
        {modalBody}
      </Modal>
    </>
  );
};

export default ProjectCard;
