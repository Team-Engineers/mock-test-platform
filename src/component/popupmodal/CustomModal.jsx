import React from "react";
import "../instruction/Instruction.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap"; 

const CustomModal = ({
  isOpen,
  onRequestClose,
  heading,
  paragraphs,
  subParagraphs,
  buttons,
}) => {

  return (
    <Modal show={isOpen} onHide={onRequestClose}>
      <Modal.Header closeButton>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        {subParagraphs.map((subParagraph, index) => (
          <p key={index}>{subParagraph}</p>
        ))}
      </Modal.Body>
      <Modal.Footer>
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={button.onClick}
            className={`btn ${button.className}`}
          >
            {button.label}
          </button>
        ))}
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
