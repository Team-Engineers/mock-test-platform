import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap"; 
const ScoreCardModal = ({ isOpen, onClose, attempted, correct, score }) => {

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Score Card</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table">
          <thead>
            <tr className="text-center">
              <th>Attempted</th>
              <th>Correct</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>{attempted}</td>
              <td>{correct}</td>
              <td>{score}</td>
            </tr>
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <button type="button" className="btn btn-secondary" onClick={onClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ScoreCardModal;
