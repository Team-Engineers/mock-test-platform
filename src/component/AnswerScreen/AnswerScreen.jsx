import React, { useState, useEffect } from "react";
import "../practicequestions/question.css";
import { MathText } from "../mathJax/MathText";
import "./AnswerScreen.css";
import ScoreCardModal from "./ScoreCardModal";

const AnswerScreen = ({ data }) => {
  let dataLength = data?.length || 0;

  let optionsUI;
  let questionStatus;
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const storedOptionsUI = localStorage.getItem("optionsUI");
  // console.log("storedoptionui", storedOptionsUI);
  if (storedOptionsUI !== "undefined" && storedOptionsUI !== null) {
    optionsUI = JSON.parse(storedOptionsUI);
  }

  const storedQuestionStatus = localStorage.getItem("questionStatus");
  if (storedQuestionStatus !== "undefined" && storedQuestionStatus !== null) {
    questionStatus = JSON.parse(storedQuestionStatus);
  }
  // console.log("storedquestionstuats", storedQuestionStatus);

  if (optionsUI === "undefined" || optionsUI === null) {
    const defaultOptionsUI = Array(dataLength).fill(undefined);
    localStorage.setItem("optionsUI", JSON.stringify(defaultOptionsUI));
    optionsUI = defaultOptionsUI;
  }

  if (questionStatus === undefined || questionStatus === null) {
    const defaultQuestionStatus = Array(dataLength).fill("not_visited");
    defaultQuestionStatus[0] = "not_answered";
    localStorage.setItem(
      "questionStatus",
      JSON.stringify(defaultQuestionStatus)
    );
    questionStatus = defaultQuestionStatus;
  }

  // console.log("data is their or not", data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // console.log("questionstatus ", questionStatus);
  const [isAccordionCollapsed, setIsAccordionCollapsed] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const handleAccordionToggle = () => {
    setIsAccordionCollapsed(!isAccordionCollapsed);
  };
  let totalPages = data?.length;

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const storedPage = localStorage.getItem("currentPage");
    const parsedPage = parseInt(storedPage, 10);
    if (!isNaN(parsedPage) && parsedPage >= 0) {
      setCurrentPage(parsedPage);
    } else {
      setCurrentPage(0);
    }
    return () => {
      localStorage.removeItem("currentPage");
    };
  }, []);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex % totalPages);
    window.scrollTo(0, 0);
    setIsAccordionCollapsed(false);
    localStorage.setItem("currentPage", pageIndex);
    setShowCorrectAnswer(false);
  };

  const showAnswer = () => {
    setShowCorrectAnswer(!showCorrectAnswer);
  };

  const answers = [];

  data.forEach((questionObject) => {
    if (questionObject && questionObject.subQuestions) {
      questionObject.subQuestions.forEach((subQuestion) => {
        if (subQuestion) {
          answers.push(subQuestion.correctOptionIndex);
        }
      });
    }
  });

  const findStatus = ({ status, index }) => {
    if (status === "answered" || status === "review_answered") {
      if (optionsUI[index] === answers[index]) return "correct";
      else return "incorrect";
    } else if (status === "not_answered" || status === "review") {
      return "unanswered";
    }
    return "skipped";
  };

  // console.log("correctAnswers", answers);
  // console.log("optionsUI", optionsUI);
  // console.log("questionStatus", questionStatus);

  const handleButtonPageChange = (currentPage, isNext) => {
    if (isNext) {
      setCurrentPage((currentPage + 1) % totalPages);
    } else {
      setCurrentPage((currentPage - 1 + totalPages) % totalPages);
    }
    window.scrollTo(0, 0);
    setIsAccordionCollapsed(false);
    localStorage.setItem("currentPage", currentPage);
    setShowCorrectAnswer(false);
  };
  let attemptedQuestions = 0;
  let score = 0;
  let correctQuestions = 0;
  if (isModalOpen) {
    const calculateScore = () => {
      for (let i = 0; i < data?.length; i++) {
        if (
          questionStatus?.[i] === "answered" ||
          questionStatus?.[i] === "review_answered"
        ) {
          attemptedQuestions++;

          if (optionsUI?.[i] === answers[i]) {
            score += 5;
            correctQuestions++;
          } else {
            score -= 1;
          }
        }
      }
      return score;
    };
    calculateScore();
    console.log("score is calucalting");
  }
  return (
    <section className="answer-screen question-practice-v2">
      {data ? (
        <div className=" w-100 d-flex parawala">
          <div className={`testknock-left`}>
            <div className="border-wrapper">
              <div className="question-box paragraph ms-2">
                <div className="question-number-container">
                  <span
                    className={`question-number b-none mb-0 id-${data[currentPage]?._id}`}
                  >
                    Question No. {`${currentPage + 1} `}
                    <span className={`question-status`}>
                      Status :{" "}
                      <span
                        className={` ${findStatus({
                          status: questionStatus?.[currentPage],
                          index: currentPage,
                        })}`}
                        style={{ border: "none" }}
                      >
                        {findStatus({
                          status: questionStatus?.[currentPage],
                          index: currentPage,
                        }).toUpperCase()}
                      </span>
                    </span>
                  </span>
                  <button
                    className="score-card-btn me-2"
                    onClick={() => setIsModalOpen(true)}
                  >
                    View Scorecard
                  </button>
                  <ScoreCardModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    attempted={attemptedQuestions}
                    correct={correctQuestions}
                    score={score}
                  />
                </div>

                <div className="question-option para-type">
                  <div className="question left-review item-passage">
                    <div className="mb-3">
                      {data[currentPage]?.description[0] ? (
                        <strong>Direction:</strong>
                      ) : (
                        ""
                      )}
                      {data[currentPage]?.description?.map(
                        (desc, descIndex) => (
                          <MathText
                            className="question-text mb-2"
                            key={descIndex}
                            text={desc}
                            textTag="h6"
                          />
                        )
                      )}
                    </div>
                    {data[currentPage]?.questionTextAndImages[0]?.text[0] ? (
                      <>
                        <div className="d-flex gap-3">
                          <div className="question-text ">
                            {data[currentPage]?.questionTextAndImages?.map(
                              (textAndImages, textAndImagesIndex) => (
                                <div
                                  className="d-flex flex-column"
                                  key={textAndImagesIndex}
                                >
                                  {textAndImages?.text.map(
                                    (text, textIndex) => (
                                      <MathText
                                        className="question-text mb-2"
                                        key={textIndex}
                                        text={text}
                                        textTag="h6"
                                      />
                                    )
                                  )}
                                  {textAndImages?.image ? (
                                    <img
                                      className="question-image"
                                      key={textAndImagesIndex}
                                      src={textAndImages?.image}
                                      alt={`Img ${textAndImagesIndex + 1}`}
                                    />
                                  ) : (
                                    ""
                                  )}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="question-text ">
                          {data?.[
                            currentPage
                          ]?.subQuestions[0]?.questionTextAndImages?.map(
                            (textAndImages, textAndImagesIndex) => (
                              <div
                                className="d-flex flex-column"
                                key={textAndImagesIndex}
                              >
                                {textAndImages?.text?.map((text, textIndex) => (
                                  <MathText
                                    className="question-text mb-2"
                                    key={textIndex}
                                    text={text}
                                    textTag="h6"
                                  />
                                ))}
                                {textAndImages?.image ? (
                                  <img
                                    className="question-image"
                                    key={textAndImagesIndex}
                                    src={textAndImages?.image}
                                    alt={`Img ${textAndImagesIndex + 1}`}
                                  />
                                ) : (
                                  ""
                                )}
                              </div>
                            )
                          )}
                        </div>
                        {/* fetching all options here */}
                        {data[currentPage]?.subQuestions[0]?.options?.map(
                          (option, optionIndex) => (
                            <div key={optionIndex} className="option-box">
                              <div className="optionitem">
                                {optionsUI &&
                                  optionsUI[currentPage] !== undefined && (
                                    <input
                                      type="radio"
                                      name={`question-${currentPage}`}
                                      id={optionIndex}
                                      checked={
                                        !showCorrectAnswer &&
                                        optionsUI[currentPage] === optionIndex
                                      }
                                    />
                                  )}
                              </div>
                              {showCorrectAnswer && (
                                <label
                                  htmlFor={optionIndex}
                                  className="correct-answer-label"
                                >
                                  {showCorrectAnswer &&
                                  answers[currentPage] === optionIndex
                                    ? "✔"
                                    : ""}
                                </label>
                              )}
                              <label
                                htmlFor={optionIndex}
                                className="optionLabel"
                              >
                                <div className="d-flex align-items-center justify-content-start gap-3 w-100 align-items-center ">
                                  <MathText text={option?.text} textTag="h6" />
                                  {option?.image ? (
                                    <img
                                      className="question-image"
                                      src={option.image}
                                      alt={`Img ${optionIndex + 1}`}
                                    />
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </label>
                            </div>
                          )
                        )}
                      </>
                    )}
                  </div>
                  <div className="item-content right-review">
                    <div className="options-container">
                      <div className="options-grid">
                        <div className="question-box right-review-content">
                          {data[currentPage]?.questionTextAndImages[0]
                            ?.text[0] ? (
                            <div className="question-option">
                              <div className="d-flex justify-content-start align-items-center gap-3 mt-3 mb-3">
                                <div>
                                  <div className="d-flex justify-content-center align-items-center flex-column">
                                    {data[
                                      currentPage
                                    ]?.subQuestions[0]?.questionTextAndImages?.map(
                                      (textAndImages, textAndImagesIndex) => (
                                        <div
                                          className="d-flex flex-column"
                                          key={textAndImagesIndex}
                                        >
                                          {textAndImages?.text?.map(
                                            (text, textIndex) => (
                                              <MathText
                                                className="question-text mb-2"
                                                key={textIndex}
                                                text={text}
                                                textTag="h6"
                                              />
                                            )
                                          )}
                                          {textAndImages?.image ? (
                                            <img
                                              className="question-image"
                                              key={textAndImagesIndex}
                                              src={textAndImages?.image}
                                              alt={`Img ${
                                                textAndImagesIndex + 1
                                              }`}
                                            />
                                          ) : (
                                            ""
                                          )}
                                        </div>
                                      )
                                    )}
                                    {/* fetching all options here */}
                                  </div>
                                </div>
                              </div>

                              {/* fetching all options here */}
                              {data[currentPage]?.subQuestions[0]?.options?.map(
                                (option, optionIndex) => (
                                  <div key={optionIndex} className="option-box">
                                    <div className="optionitem">
                                      <input
                                        type="radio"
                                        name={`question-${currentPage}`}
                                        id={optionIndex}
                                        checked={
                                          !showCorrectAnswer &&
                                          optionsUI[currentPage] === optionIndex
                                        }
                                      />
                                    </div>

                                    <label
                                      htmlFor={optionIndex}
                                      className="correct-answer-label"
                                    >
                                      {showCorrectAnswer &&
                                      answers[currentPage] === optionIndex
                                        ? "✔"
                                        : ""}
                                    </label>
                                    <label
                                      htmlFor={optionIndex}
                                      className="optionLabel"
                                    >
                                      <div className="d-flex align-items-center justify-content-start gap-3 w-100 align-items-center ">
                                        <MathText
                                          text={option?.text}
                                          textTag="h6"
                                        />
                                        {option?.image ? (
                                          <img
                                            className="question-image"
                                            src={option?.image}
                                            alt={`Img ${optionIndex + 1}`}
                                          />
                                        ) : (
                                          ""
                                        )}
                                      </div>
                                    </label>
                                  </div>
                                )
                              )}
                            </div>
                          ) : (
                            ""
                          )}
                          {/* Render explanation here */}

                          <h6
                            className="showCorrectAnswer mt-3"
                            onClick={() => showAnswer()}
                          >
                            {showCorrectAnswer ? "Hide Answer" : "Show Answer"}
                          </h6>
                          <div
                            className="accordion mt-3"
                            id={`accordionExample${currentPage} ${
                              !isAccordionCollapsed ? "collapsed" : ""
                            } `}
                          >
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                id={`headingOne`}
                              >
                                <button
                                  className={`accordion-button ${
                                    !isAccordionCollapsed ? "collapsed" : ""
                                  } `}
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#collapse${currentPage}`}
                                  aria-expanded={
                                    !isAccordionCollapsed ? "true" : "false"
                                  }
                                  aria-controls={`collapse${currentPage}`}
                                  onClick={handleAccordionToggle}
                                >
                                  Answer Explanation
                                </button>
                              </h2>
                              <div
                                id={`collapse${currentPage}`}
                                className={`accordion-collapse collapse ${
                                  isAccordionCollapsed ? "show" : ""
                                }  `}
                                aria-labelledby={`heading${currentPage}`}
                                data-bs-parent={`#accordionExample${currentPage}`}
                              >
                                <div className="accordion-body">
                                  {data[
                                    currentPage
                                  ]?.subQuestions[0]?.explanation?.map(
                                    (explanation, explanationIndex) => (
                                      <div
                                        key={explanationIndex}
                                        className="explanation-box"
                                        style={{ margin: "0 20px" }}
                                      >
                                        <div className=" d-flex flex-row gap-2 justify-content-start align-items-center">
                                          <h6 className="mb-0 text-primary fw-bold">
                                            Answer:
                                          </h6>
                                          <h6 className="mb-0  fw-bold text-secondary">
                                            Option{" "}
                                            {data[currentPage]?.subQuestions[0]
                                              ?.correctOptionIndex !== undefined
                                              ? alphabets[
                                                  data[currentPage]
                                                    ?.subQuestions[0]
                                                    ?.correctOptionIndex
                                                ]
                                              : ""}
                                          </h6>
                                        </div>
                                        <h6 className="text-primary fw-bold">
                                          Solution:
                                        </h6>
                                        {explanation.text.map(
                                          (text, textIndex) => (
                                            <MathText
                                              className="explanation-text mb-2"
                                              key={textIndex}
                                              text={text}
                                              textTag="h6"
                                            />
                                          )
                                        )}
                                        {explanation?.image ? (
                                          <img
                                            className="question-image"
                                            src={explanation?.image}
                                            alt={`Img ${explanationIndex + 1}`}
                                          />
                                        ) : (
                                          ""
                                        )}
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testknock-right position-relative review-button-container">
            <div className="question-grid-wrapper">
              <div className="d-flex justify-content-start align-items-center gap-2 mb-2 ms-3">
                <h6 className="">QUESTION GRID</h6>
                <span class="information float-left">
                  <img
                    alt="info"
                    src="https://s3-ap-south-1.amazonaws.com/myims.imsindia.com/wp-content/themes/ims/img/info.png"
                  />
                  <div class="tooltip tooltip--width-sm d-none">
                    <div class="tooltip__arrow"></div>
                    <div class="clearfix">
                      <div class="tooltip__box tooltip__box--correct"></div>
                      <div class="tooltip__text">Correct</div>
                    </div>
                    <div class="clearfix">
                      <div class="tooltip__box tooltip__box--incorrect"></div>
                      <div class="tooltip__text">Incorrect</div>
                    </div>
                    <div class="clearfix">
                      <div class="tooltip__box tooltip__box--skipped"></div>
                      <div class="tooltip__text">Skipped</div>
                    </div>
                    <div class="clearfix">
                      <div class="tooltip__box tooltip__box--unanswered"></div>
                      <div class="tooltip__text">Unanswered</div>
                    </div>
                  </div>
                </span>
              </div>

              <div className="question-grid-container">
                {data?.map((question, index) => (
                  <div
                    key={index}
                    className={`question-cell ${findStatus({
                      status: questionStatus?.[index],
                      index: index,
                    })}`}
                    onClick={() => handlePageChange(index)}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>

            <div className="next-prev-btn-container">
              {currentPage !== 0 && (
                <button
                  onClick={() => handleButtonPageChange(currentPage, false)}
                  className="next-prev-btn"
                >
                  Previous
                </button>
              )}
              {currentPage !== totalPages - 1 && (
                <button
                  onClick={() => handleButtonPageChange(currentPage, true)}
                  className="next-prev-btn"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default AnswerScreen;
