import React from "react";
import Modal from "react-modal";
import "./Instruction.css";
import questionSymbol from "../../assets/images/question_symbol.jpeg";

const InstructionModal = ({ isOpen, toggleInstruction }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleInstruction}
      contentLabel="Instruction Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          margin: "auto",
          background: "#f0f0f0",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
          border: "none",
          padding: "25px",
        },
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px 0",
        }}
      >
        <h2>Instructions</h2>
        <button
          onClick={toggleInstruction}
          style={{ marginLeft: "auto", background: "none", border: "none" }}
        >
          <span
            role="img"
            aria-label="close"
            style={{
              position: "fixed",
              top: "50px",
              background: "#bababa",
              height: "30px",
              width: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
            }}
          >
            ❌
          </span>{" "}
        </button>
      </div>
      <div className="ct-ins-wrapper" style={{ maxHeight: "80vh" }}>
        <div className="ct-ins-page">
          <p>
            <strong>General Instructions for Candidate:</strong>
            <br />
            1. The clock will be set at the server. The countdown timer at the
            top right corner of the screen will display the remaining time
            available for you to complete the examination. When the timer
            reaches zero, the examination will end by itself. You need not
            terminate the examination or submit your paper.
            <br />
            <br />
            2. The question paper will have a mix of Multiple Choice Question
            (MCQ) type with options and non-MCQ type.
            <br />
            <br />
            3. You will not be allowed to use any calculator or any other
            computing machine or device. An on-screen calculator will be
            provided, which can be used for computing.
            <br />
            <br />
            4. The Question Palette displayed on the right side of the screen
            will show the status of each question using one of the following
            symbols.
          </p>
          <p>
            &nbsp;
            <img src={questionSymbol} alt="" width="609" height="316" />
          </p>
          <p>
            *If a question is answered and ‘Marked for Review’ (Serial No. E),
            then the answer will be considered for evaluation unless the status
            is modified by the candidate.
            <br />
            <br />
            5. You can click on the arrow which appears to the left of the
            question palette to collapse the question palette thereby maximizing
            the question window. To view the question palette again, you can
            click on which appears on the right side of the question window.
            <br />
            <br />
            <strong>6. To answer a question, do the following:</strong>
            <br />
            <br />
            a. Click on the question number in the Question Palette to go to
            that question directly.
            <br />
            <br />
            b. Select an answer for a multiple choice type question by clicking
            on the bubble placed before the choices in the form of radio buttons
            (o). For Non-MCQ questions, type in the answer in the space provided
            on the screen using the on-screen keyboard.
            <br />
            <br />
            c. Click on ‘Save & Next’ to save your answer for the current
            question and then go to the next question. Alternatively, you may
            click on Mark for Review & Next to save your answer for the current
            question and also to mark it for review, and then go to the next
            question.
          </p>
          <p>
            <br />
            Caution: Your answer for the current question will not be saved if
            you navigate directly to another question by clicking on a question
            number and not click ‘Save & Next’ or ‘Mark for Review & Next’
            button.
            <br />
            <br />
            d. You will be able to view all the questions of a section by
            clicking on the ‘Question Paper’ button. This feature is provided
            for you to see the entire question paper by respective section.
            <br />
            <br />
            <strong>Changing the response:</strong>
            <br />
            <br />
            7. Procedure for changing the response of a question:
            <br />
            <br />
            a. To deselect your chosen answer, click on the question number on
            the palette and click on the ‘Clear Response’ button.
          </p>
          <p>
            b. To change your chosen answer, click on the radio button
            corresponding to another option.
          </p>
          <p>
            c. To save your changed answer, you MUST click on the ‘Save & Next’
            or ‘Mark for Review & Next’ button.
            <br />
            <br />
            8. Note that ONLY Questions for which answers are saved or marked
            for review after answering will be considered for evaluation.
            <br />
            <br />
            9. Sections in this question paper are displayed on the top bar of
            the screen. Questions in a Section can be viewed by clicking on the
            name of that Section. The Section you are currently viewing will be
            highlighted.
            <br />
            <br />
            10. After clicking the Save & Next button for the last question in a
            Section, you will automatically be taken to the first question of
            the same Section in sequence.
            <br />
            <br />
            11. You can move the mouse cursor over the name of a Section to view
            the answering status for that Section.
          </p>
          <p>
            <br />
            <br />
            <br />
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default InstructionModal;
