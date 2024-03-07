import React from "react";
import Modal from "react-modal";
import "./Instruction.css";
import questionSymbol from "../../assets/images/question_symbol.jpeg";
import { useParams } from "react-router-dom";

const InstructionModal = ({ isOpen, toggleInstruction }) => {
  const { topic } = useParams();
  let totalQuestion = "60";
  let time = "60";
  let marks = "300";
  if (topic.toLowerCase() === "general_english_mock_test") {
    totalQuestion = "50";
    time = "45";
    marks = "200";
  }
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
            ✖
          </span>{" "}
        </button>
      </div>
      <div className="ct-ins-wrapper" style={{ maxHeight: "80vh" }}>
        <div className="ct-ins-wrapper">
          <div className=" d-flex justify-content-between align-items-center">
            <strong>Duration: {time} Mins</strong>
            <strong>Maximum Marks : {marks}</strong>
          </div>
          <div className="ct-ins-page">
            <p>
              <p></p>
              <p>
                <br />
                <strong>Read the following instructions carefully.</strong>
                <br />
                &nbsp;
              </p>
              <p>
                1. The Test contains {totalQuestion} questions out of which{" "}
                {totalQuestion - 10} questions are to be attempted.
              </p>
              <p>
                2. The candidate can not attempt more than {totalQuestion - 10}{" "}
                Questions, however they can change the already attempted
                Question among the {totalQuestion} Questions.
              </p>

              <p>&nbsp;</p>
              <p>
                3.Each question has 4 options out of which only one is
                correct.Each question has 4 options out of which only one is
                correct.
              </p>
              <p>4. You have to finish the test in {time} minutes.</p>
              <p>
                5.You will be awarded 5 marks for each correct answer and there
                will be 1 negative marking
              </p>
              <p>
                6.There is no penalty for the questions that you have not
                attempted.
              </p>
              <p>
                7. Once you start the test, you will not be allowed to reattempt
                it. Make sure that you complete the test before you submit the
                test and/or close the browser.
                <br />
                <br />
              </p>
            </p>
            <u>
              <b>About Question Paper:</b>
            </u>
            <br />
            <br />1 The Question Paper consists of multiple choice objective
            type questions with 4 options out of which only 1 is correct.
            <br />
            <br />2 There is a TIMER (Clock) available on the TOP RIGHT HAND
            CORNER of the Screen; you are requested to keep an eye on it for
            knowing the time remaining for the completion of the exam.
            <br />
            <br />3 The questions can be answered in any order within the given
            time frame. The candidate should click with the mouse on the correct
            choice, from 4 options given. In case, the candidate does not wish
            to attempt any question, it can be left blank.
            <br />
            <br />4 The candidate can change the option of a question later by
            selecting a new option in case he/she wishes to. In case candidate
            does not want to answer the question, he/she can deselect the answer
            by clicking <button className="test-button">Clear</button> provided
            against the question.
            <br />
            <br />
            5 The question palette at the right of the screen shows the
            following status of each of the questions numbered
            <br />
            <br />
            <ul className="que-ans-states">
              <li>
                <span className="label skipped"></span> You have not answered
                the question.
              </li>
              <li>
                <span className="label attempted"></span> You have answered the
                question.
              </li>
              <li>
                <span className="label bookmarked"></span> You have NOT answered
                the question, but have marked the question for review.
              </li>
              <li>
                <span className="label attempted bookmarked"></span> You have
                answered the question, but marked it for review.
              </li>
            </ul>
            <br />
            <b>
              PS: Questions which are attempted and marked for review would be
              treated as attempted questions only as long as the candidate does
              not <button className="test-button ">Clear</button> the option
              selected.
            </b>
            <br />
            <br />6 On the completion of the test duration, even if the
            candidate does not click on an answer or does not click on the{" "}
            <button type="button" className="test-button">
              Submit Test
            </button>{" "}
            button, a NIL result will be saved automatically by the computer.
            <br />
            <br />7 The candidate will only be able to submit the test on
            completion of the stipulated {time} Minutes. In case a candidate not
            completed his/her test at the completion of stipulated {time}{" "}
            Minutes, the system shall automatically submit the test.
            <br />
            <br />
            {/* <br /> */}
            <p>
              <strong>General Instructions for Candidate:</strong>
              <br />
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
              then the answer will be considered for evaluation unless the
              status is modified by the candidate.
              <br />
              <br />
              5. You can click on the arrow which appears to the left of the
              question palette to collapse the question palette thereby
              maximizing the question window. To view the question palette
              again, you can click on which appears on the right side of the
              question window.
              <br />
              <br />
              <strong>6. To answer a question, do the following:</strong>
              <br />
              <br />
              a. Click on the question number in the Question Palette to go to
              that question directly.
              <br />
              <br />
              b. Select an answer for a multiple choice type question by
              clicking on the bubble placed before the choices in the form of
              radio buttons (o). For Non-MCQ questions, type in the answer in
              the space provided on the screen using the on-screen keyboard.
              <br />
              <br />
              c. Click on ‘Save & Next’ to save your answer for the current
              question and then go to the next question. Alternatively, you may
              click on Mark for Review & Next to save your answer for the
              current question and also to mark it for review, and then go to
              the next question.
            </p>
            <p>
              <br />
              Caution: Your answer for the current question will not be saved if
              you navigate directly to another question by clicking on a
              question number and not click ‘Save & Next’ or ‘Mark for Review &
              Next’ button.
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
              c. To save your changed answer, you MUST click on the ‘Save &
              Next’ or ‘Mark for Review & Next’ button.
              <br />
              <br />
              8. Note that ONLY Questions for which answers are saved or marked
              for review after answering will be considered for evaluation.
              <br />
              <br />
              9. Sections in this question paper are displayed on the top bar of
              the screen. Questions in a Section can be viewed by clicking on
              the name of that Section. The Section you are currently viewing
              will be highlighted.
              <br />
              <br />
              10. After clicking the Save & Next button for the last question in
              a Section, you will automatically be taken to the first question
              of the same Section in sequence.
              <br />
              <br />
              11. You can move the mouse cursor over the name of a Section to
              view the answering status for that Section.
            </p>
            <p>
              <br />
            </p>
            <div align="center">
              <b>"ALL THE BEST"</b>
              <br /> <br />
            </div>
            {/* <br /> */}
          </div>
        </div>
        {/* <div className="ct-ins-page"></div> */}
      </div>
    </Modal>
  );
};

export default InstructionModal;
