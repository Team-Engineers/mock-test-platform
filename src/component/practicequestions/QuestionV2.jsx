import React, { useState, useEffect, useCallback } from "react";
import "./question.css";
import { MathText } from "../mathJax/MathText";
import { useParams } from "react-router-dom";
import axios from "axios";

const QuestionV2 = ({ data }) => {
  let totalPages = 0;
  const [isOnline, setIsOnline] = useState(true);
  const [showPallet, setShowPallet] = useState(true);
  // const [allQuestions, setAllQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(data?.length).fill(undefined)
  );
  const [optionsUI, setOptionsUI] = useState(
    Array(data?.length).fill(undefined)
  );
  const [questionStatus, setQuestionStatus] = useState(
    Array(data?.length).fill("not_visited")
  );

  const [counts, setCounts] = useState({
    not_visited: 0,
    review_answered: 0,
    review: 0,
    answered: 0,
    not_answered: 0,
  });

  const [currentPage, setCurrentPage] = useState(0);
  const { topic } = useParams();

  useEffect(() => {
    const storedPage = localStorage.getItem("currentPage");
    const parsedPage = parseInt(storedPage, 10);
    if (!isNaN(parsedPage) && parsedPage >= 0) {
      setCurrentPage(parsedPage);
    } else {
      setCurrentPage(0);
    }

    const checkConnectivity = async () => {
      try {
        const response = await axios.head(`https://cuet-alpha.vercel.app/`);
        if (response.status === 200) {
          setIsOnline(true);
        }
      } catch (error) {
        setIsOnline(false);
      }
    };
    const intervalId = setInterval(checkConnectivity, 5000);
    return () => {
      clearInterval(intervalId);
      localStorage.removeItem("currentPage");
    };
  }, []);

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[questionIndex] = optionIndex;
    setSelectedOptions(updatedSelectedOptions);

    const updatedOptionsUI = [...optionsUI];
    updatedOptionsUI[questionIndex] = optionIndex;
    setOptionsUI(updatedOptionsUI);

    const currentStatus = questionStatus[questionIndex];
    if (currentStatus === "not_visited") {
      const updatedStatusArray = [...questionStatus];
      updatedStatusArray[questionIndex] = "not_answered";
      setQuestionStatus(updatedStatusArray);
    }
  };

  const handleClearResponse = () => {
    const questionIndex = currentPage;

    const updatedSelectedOptions = [...selectedOptions];

    updatedSelectedOptions[questionIndex] = undefined;
    setSelectedOptions(updatedSelectedOptions);

    const updatedOptionsUI = [...optionsUI];
    updatedOptionsUI[questionIndex] = undefined;
    setOptionsUI(updatedOptionsUI);

    const updatedStatusArray = [...questionStatus];
    updatedStatusArray[questionIndex] = "not_answered";
    setQuestionStatus(updatedStatusArray);
  };

  const generatePageNumbers = () => {
    const totalLength = Math.ceil(data.length);
    const pages = [];

    for (let i = 0; i < totalLength; i++) {
      pages.push(i);
    }
    totalPages = totalLength;
    return pages;
  };

  const handleReviewNext = () => {
    const questionIndex = currentPage;

    const updatedStatusArray = [...questionStatus];

    if (optionsUI[questionIndex] !== undefined) {
      updatedStatusArray[questionIndex] = "review_answered";
    } else {
      updatedStatusArray[questionIndex] = "review";
    }
    setQuestionStatus(updatedStatusArray);
    const pageIndex = currentPage + 1;
    setSelectedOptions([]);
    setCurrentPage(pageIndex % totalPages);
    window.scrollTo(0, 0);
    scrollToQuestion(pageIndex % totalPages);
    localStorage.setItem("currentPage", pageIndex);
  };

  const handleUnMarkNext = () => {
    const questionIndex = currentPage;

    const updatedStatusArray = [...questionStatus];

    if (optionsUI[questionIndex] !== undefined) {
      updatedStatusArray[questionIndex] = "answered";
    } else {
      updatedStatusArray[questionIndex] = "not_answered";
    }
    setQuestionStatus(updatedStatusArray);
    const pageIndex = currentPage + 1;
    setSelectedOptions([]);
    setCurrentPage(pageIndex % totalPages);
    window.scrollTo(0, 0);
    scrollToQuestion(pageIndex % totalPages);
    localStorage.setItem("currentPage", pageIndex);
  };

  const handleSaveNext = () => {
    const questionIndex = currentPage;

    const updatedStatusArray = [...questionStatus];
    if (optionsUI[questionIndex] !== undefined) {
      updatedStatusArray[questionIndex] = "answered";
    } else {
      if (updatedStatusArray[questionIndex] === undefined)
        updatedStatusArray[questionIndex] = "not_answered";
    }
    setQuestionStatus(updatedStatusArray);
    const pageIndex = currentPage + 1;
    setSelectedOptions([]);
    setCurrentPage(pageIndex % totalPages);
    window.scrollTo(0, 0);
    scrollToQuestion(pageIndex % totalPages);
    localStorage.setItem("currentPage", pageIndex);
  };

  const handlePageChange = (pageIndex) => {
    setSelectedOptions([]);
    setCurrentPage(pageIndex % totalPages);
    window.scrollTo(0, 0);
    localStorage.setItem("currentPage", pageIndex);
  };

  const countStatusOccurrences = useCallback(() => {
    const new_count = {
      not_visited: 0,
      review_answered: 0,
      review: 0,
      answered: 0,
      not_answered: 0,
    };
    for (let j = 0; j < questionStatus.length; j++) {
      const status = questionStatus[j];

      switch (status) {
        case "not_visited":
          new_count.not_visited++;
          break;
        case "review_answered":
          new_count.review_answered++;
          break;
        case "review":
          new_count.review++;
          break;
        case "answered":
          new_count.answered++;
          break;
        case "not_answered":
          new_count.not_answered++;
          break;
        default:
          break;
      }
    }
    return new_count;
  }, [questionStatus]);

  const scrollToQuestion = (pageIndex) => {
    const questionElement = document.getElementById(pageIndex);

    if (questionElement) {
      const palletContainer = document.querySelector(".pallet-list-body");
      const palletContainerRect = palletContainer.getBoundingClientRect();
      const questionElementRect = questionElement.getBoundingClientRect();
      if (
        questionElementRect.top < palletContainerRect.top ||
        questionElementRect.bottom > palletContainerRect.bottom
      ) {
        palletContainer.scrollTo({
          top: questionElement.offsetTop - palletContainer.offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const questionIndex = currentPage;
    const updatedCounts = countStatusOccurrences();
    setCounts(updatedCounts);
    const currentStatus = questionStatus[questionIndex];
    if (currentStatus === "not_visited") {
      const updatedStatusArray = [...questionStatus];
      updatedStatusArray[questionIndex] = "not_answered";
      setQuestionStatus(updatedStatusArray);
    }
  }, [currentPage, countStatusOccurrences, data, questionStatus]);

  return (
    <section className="question-practice-v2">
      {data[currentPage]?.questionTextAndImages[0]?.text[0] ? (
        <div className=" w-100 d-flex parawala">
          <div className={`testknock-left ${showPallet ? "" : "w-100"}`}>
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
                      <strong>Direction:</strong>
                      {data[currentPage].description?.map((desc, descIndex) => (
                        <MathText
                          className="question-text mb-2"
                          key={descIndex}
                          text={desc}
                          textTag="h6"
                        />
                      ))}
                    </div>

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
                  </div>
                  <div className="item-content ">
                    <div className="options-container">
                      <div className="options-grid">
                        <div className="question-box">
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
                                <div
                                  key={optionIndex}
                                  className="option-box"
                                  onClick={() =>
                                    handleOptionSelect(currentPage, optionIndex)
                                  }
                                >
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
                                    for={optionIndex}
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-container">
              <div className="d-flex justify-content-between align-items-center mx-2">
                <div className="d-flex align-center gap-3 p-2">
                  {questionStatus[currentPage] === "review_answered" ||
                  questionStatus[currentPage] === "review" ? (
                    <button className="test-button" onClick={handleUnMarkNext}>
                      Unmark and Next
                    </button>
                  ) : (
                    <button className="test-button" onClick={handleReviewNext}>
                      Mark for review & next
                    </button>
                  )}

                  <>
                    <button
                      className="test-button d-none d-md-block"
                      onClick={handleClearResponse}
                    >
                      Clear Response
                    </button>
                    <div className="text-center  d-md-none d-block">
                      <span className="sp-link" role="presentation">
                        ↻ Clear Response
                      </span>
                    </div>
                  </>
                </div>
                <button
                  className="next-button test-button"
                  onClick={handleSaveNext}
                >
                  Save & Next
                </button>
              </div>

              <div className={`offline ${isOnline ? "d-none" : "d-block"}`}>
                <span>You are offline right now. Check your connection.</span>
              </div>
            </div>
          </div>
          <div
            className="testknock-right position-relative"
            style={{ width: `${showPallet ? "" : "0%"}` }}
          >
            <div className="LeftBlock ">
              <button
                className={`toggle-side-bar-btn`}
                type="button"
                onClick={() => setShowPallet(!showPallet)}
              >
                &gt;
              </button>
              <div
                className={`question-pallet  ${
                  showPallet ? "d-block" : "d-none"
                }`}
              >
                <div className="Legend">
                  <div className="legend-block">
                    <div className="legend-item lg-answered">
                      <span>{counts.answered}</span> Answered
                    </div>
                    <div className="legend-item lg-not_answered">
                      <span>{counts.not_answered}</span> Not Answered
                    </div>
                    <div className="legend-item lg-not_visited">
                      <span>{counts.not_visited}</span> Not Visited
                    </div>
                    <div className="legend-item lg-review">
                      <span>{counts.review}</span> Marked for Review
                    </div>
                    <div className="legend-item lg-review_answered">
                      <span>{counts.review_answered}</span> Answered &amp;
                      Marked for Review (will be considered for evaluation)
                    </div>
                  </div>
                </div>
                <div className="pallet-section-title">
                  <div className="qp-title">
                    {topic.split("_").join(" ")}
                  </div>
                  <div className="qp-label">Choose a Question</div>
                </div>
                <div className="pallet-list-body">
                  <div role="presentation" className="pallet-item">
                    {generatePageNumbers().map((pageIndex) => (
                      <span
                        id={pageIndex}
                        key={pageIndex}
                        className={` ${questionStatus[pageIndex]}`}
                        onClick={() => handlePageChange(pageIndex)}
                      >
                        {pageIndex + 1}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-100 d-flex normlal">
          <div className={`testknock-left ${showPallet ? "" : "w-100"}`}>
            <div className="border-wrapper">
              <div className="question-box overflow-y-scroll ms-2">
                <div className="question-number-container">
                  <span
                    className={`question-number id-${data[currentPage]?._id}`}
                  >
                    Question No.
                    {`${1 + currentPage} `}
                  </span>
                </div>
                <div className="question-option">
                  <div className="question">
                    <div className="question-text-container">
                      {data[
                        currentPage
                      ]?.subQuestions[0]?.questionTextAndImages?.map(
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

                  {/* fetching all options here */}
                  {data[currentPage]?.subQuestions[0]?.options?.map(
                    (option, optionIndex) => (
                      <div
                        key={optionIndex}
                        className="option-box"
                        onClick={() =>
                          handleOptionSelect(currentPage, optionIndex)
                        }
                      >
                        <div className="optionitem">
                          <input
                            type="radio"
                            name={`question-${currentPage}`}
                            id={optionIndex}
                            checked={optionsUI[currentPage] === optionIndex}
                          />
                        </div>
                        <label for={optionIndex} className="optionLabel">
                          <div className="d-flex  gap-3 w-100 align-items-center ">
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
                </div>
              </div>
            </div>

            <div className="button-container">
              <div className="d-flex justify-content-between align-items-center mx-2">
                <div className="d-flex align-center gap-3 p-2">
                  {questionStatus[currentPage] === "review_answered" ||
                  questionStatus[currentPage] === "review" ? (
                    <button className="test-button" onClick={handleUnMarkNext}>
                      Unmark and Next
                    </button>
                  ) : (
                    <button className="test-button" onClick={handleReviewNext}>
                      Mark for review & next
                    </button>
                  )}

                  {/* {optionsUI[currentPage] !== undefined ? ( */}
                  <>
                    <button
                      className="test-button d-none d-md-block"
                      onClick={handleClearResponse}
                    >
                      Clear Response
                    </button>
                    <div className="text-center  d-md-none d-block">
                      <span className="sp-link" role="presentation">
                        ↻ Clear Response
                      </span>
                    </div>
                  </>
                  {/*  ) : null} */}
                </div>
                {/* {optionsUI[currentPage] !== undefined ? ( */}
                <button
                  className="next-button test-button"
                  onClick={handleSaveNext}
                >
                  Save & Next
                </button>
                {/* ) : null} */}
              </div>

              <div className={`offline ${isOnline ? "d-none" : "d-block"}`}>
                <span>You are offline right now. Check your connection.</span>
              </div>
            </div>
          </div>
          <div
            className="testknock-right position-relative "
            style={{ width: `${showPallet ? "" : "0%"}` }}
          >
            <div className="LeftBlock">
              <button
                className={`toggle-side-bar-btn`}
                type="button"
                onClick={() => setShowPallet(!showPallet)}
              >
                &gt;
              </button>
              <div
                className={`question-pallet  ${
                  showPallet ? "d-block" : "d-none"
                }`}
              >
                <div className="Legend">
                  <div className="legend-block">
                    <div className="legend-item lg-answered">
                      <span>{counts.answered}</span> Answered
                    </div>
                    <div className="legend-item lg-not_answered">
                      <span>{counts.not_answered}</span> Not Answered
                    </div>
                    <div className="legend-item lg-not_visited">
                      <span>{counts.not_visited}</span> Not Visited
                    </div>
                    <div className="legend-item lg-review">
                      <span>{counts.review}</span> Marked for Review
                    </div>
                    <div className="legend-item lg-review_answered">
                      <span>{counts.review_answered}</span> Answered &amp;
                      Marked for Review (will be considered for evaluation)
                    </div>
                  </div>
                </div>
                <div className="pallet-section-title">
                  <div className="qp-title">
                    {topic.split("_").join(" ")}
                  </div>
                  <div className="qp-label">Choose a Question</div>
                </div>
                <div className="pallet-list-body">
                  <div role="presentation" className="pallet-item">
                    {generatePageNumbers().map((pageIndex) => (
                      <span
                        id={pageIndex}
                        key={pageIndex}
                        className={` ${questionStatus[pageIndex]}`}
                        onClick={() => handlePageChange(pageIndex)}
                      >
                        {pageIndex + 1}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default QuestionV2;
