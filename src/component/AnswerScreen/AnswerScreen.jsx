import React, { useState, useEffect } from "react";
import "../practicequestions/question.css";
import { MathText } from "../mathJax/MathText";
// import { useParams } from "react-router-dom";
import "./AnswerScreen.css";

const AnswerScreen = ({ data }) => {
  console.log("data is their or not", data);
  let optionsUI = JSON.parse(localStorage.getItem("optionsUI"));
  // console.log("optionsUI", optionsUI);
  let questionStatus = JSON.parse(localStorage.getItem("questionStatus"));
  // console.log("questionStatus", questionStatus);
  //let timeTaken = localStorage.getItem("timeTaken");
  const [isAccordionCollapsed, setIsAccordionCollapsed] = useState(true);

  const handleAccordionToggle = () => {
    setIsAccordionCollapsed(!isAccordionCollapsed);
  };
  // console.log("timeTaken", timeTaken);
  let totalPages = data?.length;

  // console.log(
  //   "timetaken is",
  //   Math.floor(timeTaken / 60) + " minus",
  //   timeTaken % 60
  // );

  const [currentPage, setCurrentPage] = useState(0);
  // const { subTopic } = useParams();

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
  };


  // const gridSize = Math.ceil(Math.sqrt(data?.length));

  return (
    <section className="answer-screen question-practice-v2">
      <div className=" w-100 d-flex parawala">
        <div className={`testknock-left`}>
          <div className="border-wrapper">
            <div className="question-box paragraph overflow-y-scroll ms-2">
              <div className="question-number-container">
                <span
                  className={`question-number id-${data[currentPage]?._id}`}
                >
                  Question No. {`${currentPage + 1} `}
                </span>
              </div>

              <div className="question-option para-type">
                <div className="question item-passage">
                  <div className="mb-3">
                    {data[currentPage].description[0] ? (
                      <strong>Direction:</strong>
                    ) : (
                      ""
                    )}
                    {data[currentPage].description?.map((desc, descIndex) => (
                      <MathText
                        className="question-text mb-2"
                        key={descIndex}
                        text={desc}
                        textTag="h6"
                      />
                    ))}
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
                                {textAndImages?.text.map((text, textIndex) => (
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
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="question-text ">
                        {data[
                          currentPage
                        ]?.subQuestions[0].questionTextAndImages.map(
                          (textAndImages, textAndImagesIndex) => (
                            <div
                              className="d-flex flex-column"
                              key={textAndImagesIndex}
                            >
                              {textAndImages?.text.map((text, textIndex) => (
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
                              <input
                                type="radio"
                                name={`question-${currentPage}`}
                                id={optionIndex}
                                checked={optionsUI[currentPage] === optionIndex}
                              />
                            </div>
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
                <div className="item-content ">
                  <div className="options-container">
                    <div className="options-grid">
                      <div className="question-box">
                        {data[currentPage]?.questionTextAndImages[0]
                          ?.text[0] ? (
                          <div className="question-option">
                            <div className="d-flex justify-content-start align-items-center gap-3 mb-3">
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
                                        optionsUI[currentPage] === optionIndex
                                      }
                                    />
                                  </div>
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
                          </div>
                        ) : (
                          ""
                        )}
                        {/* Render explanation here */}
                        <div
                          className="accordion mt-3"
                          id={`accordionExample${currentPage} ${
                            !isAccordionCollapsed ? "collapsed" : ""
                          } `}
                        >
                          <div className="accordion-item">
                            <h2 className="accordion-header" id={`headingOne`}>
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
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <button
                          style={{ margin: "20px" }}
                          onClick={toggleExplanation}
                        >
                          <h4>
                            <strong>Explanation:</strong>
                          </h4>
                        </button>
                        {showExplanation &&
                          data[currentPage]?.subQuestions[0]?.explanation?.map(
                            (explanation, explanationIndex) => (
                              <div
                                key={explanationIndex}
                                className="explanation-box"
                                style={{ margin: "0 20px" }}
                              >
                                {explanation.text.map((text, textIndex) => (
                                  <MathText
                                    className="explanation-text mb-2"
                                    key={textIndex}
                                    text={text}
                                    textTag="h6"
                                  />
                                ))}
                              </div>
                            )
                          )} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testknock-right position-relative ">
          <div className="question-grid-wrapper">
            <div className="question-grid-container">
              {data.map((question, index) => (
                <div
                  key={index}
                  className={`question-cell ${questionStatus[index]}`}
                  onClick={() => handlePageChange(index)}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnswerScreen;
