import React from "react";
import Modal from "react-modal";

const QuestionPaperModal = ({ isOpen, toggleQuestionPaper, data }) => {
  let questionNumber = 0; // Initialize question number
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleQuestionPaper}
      contentLabel="Question Paper Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
        },
        content: {
          margin: "auto",
          background: "#f0f0f0", // Light grey background
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)", // Box shadow
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
          position: "relative",
        }}
      >
        <h2>Question Paper</h2>
        <button
          onClick={toggleQuestionPaper}
          style={{
            marginLeft: "auto",
            background: "none",
            border: "none",
          }}
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
          {/* Cross icon for close */}
        </button>
      </div>
      <div className="mt-3">
        {data.map((item, itemIndex) => (
          <div key={itemIndex} className="question-paper-container">
            <div
              dangerouslySetInnerHTML={{
                __html: item.questionTextAndImages[0].text[0],
              }}
            />
            {item.subQuestions.map((subQuestion, subQuestionIndex) => {
              questionNumber++;
              return (
                <div
                  key={`${itemIndex}-${subQuestionIndex}`}
                  className="sub-question"
                >
                  <div>
                    <br />
                    <strong>Q. {questionNumber}:</strong>
                  </div>
                  {subQuestion.questionTextAndImages.map(
                    (textAndImages, textAndImagesIndex) => (
                      <div
                        className="d-flex flex-column"
                        key={textAndImagesIndex}
                      >
                        {textAndImages.text.map((text, index) => (
                          <p key={index}>{text}</p>
                        ))}
                      </div>
                    )
                  )}
                  {/* Add a line after each question */}
                  <hr />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default QuestionPaperModal;
