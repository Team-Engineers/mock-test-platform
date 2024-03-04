import React, { useState, useEffect, useCallback } from "react";
import "./question.css";
import { MathText } from "../mathJax/MathText";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import CustomModal from "../popupmodal/CustomModal";
import { setTestCompleted } from "../../utils/userSlice";
import { confirmAlert } from "react-confirm-alert";

const QuestionV2 = ({ data }) => {
  // console.log("ddaaata", data);
  const dispatch = useDispatch();
  // const storeOptionsUI = useSelector((state) => state.user.mock_test.optionsUI);
  // console.log("storeoptionui", storeOptionsUI);
  // const timeLeft = useSelector((state) => state.user.mock_test.timeTaken);

  const totalQuestion = data?.length;
  // console.log("total question",totalQuestion)
  let totalPages = 0;
  const [isOnline, setIsOnline] = useState(true);
  const [showPallet, setShowPallet] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [attemptedCount, setAttemptedCount] = useState(0);
  const [timerExpired, setTimerExpired] = useState(false);
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
  const { topic, subTopic } = useParams();
  let time = "60";
  if (topic.toLowerCase() === "general_english_mock_test") {
    time = "45";
  }

  const [counts, setCounts] = useState({
    not_visited: 0,
    review_answered: 0,
    review: 0,
    answered: 0,
    not_answered: 0,
  });

  const [currentPage, setCurrentPage] = useState(0);
  
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
    if (attemptedCount >= totalQuestion - 10) {
      setShowModal(true);
      console.log("attempted maximum quesion");
      return;
    } else {
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

    console.log(updatedOptionsUI);
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
    dispatch(
      setTestCompleted({
        optionsUI: optionsUI,
        questionStatus: updatedStatusArray,
      })
    );
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
    dispatch(
      setTestCompleted({
        optionsUI: optionsUI,
        questionStatus: updatedStatusArray,
      })
    );
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
    dispatch(
      setTestCompleted({
        optionsUI: optionsUI,
        questionStatus: updatedStatusArray,
      })
    );
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
    setAttemptedCount(new_count.answered + new_count.review_answered);
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
  const toggleAlert = () => {
    setShowModal(false);
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

  

  // console.log("optionui of question", optionsUI);
  // console.log("questionstauts of question", questionStatus);
  // let time = "60";
  // if (topic.toLowerCase() === "general_english_mock_test") {
  //   time = "45";
  // }
  const [timeLeft, setTimeLeft] = useState(time * 60);
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  // console.log("timesleft", timeLeft);
  // const testSubmitted = useSelector(
  //   (state) => state.user.mock_test.testSubmitted
  // );

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  

  const updateTimeTaken = useCallback(() => {
    console.log("i am coming in updateTimetaken")
    let timeTaken = time * 60;
    if (timeLeft !== 0) timeTaken = timeLeft;
    dispatch(setTestCompleted({ testSubmitted: true }));
    localStorage.setItem("optionsUI", JSON.stringify(optionsUI));
    localStorage.setItem("questionStatus", JSON.stringify(questionStatus));
    localStorage.setItem("timeTaken", timeTaken);
  }, [dispatch, timeLeft, time, optionsUI, questionStatus]);


  useEffect(() => {
    // Check if time left is 0
    if (timeLeft === 0) {
      // setTimerExpired(true);
      console.log("by default submitting test to true");
      updateTimeTaken();
    }
  }, [timeLeft, updateTimeTaken, time]);

  const submit = () => {
    setShowModal(false)
    !timerExpired
      ? confirmAlert({
          title: "Confirm",
          message: `You have ${hours
            .toString()
            .padStart(2, "0")} : ${minutes
            .toString()
            .padStart(2, "0")} : ${seconds
            .toString()
            .padStart(
              2,
              "0"
            )} left. Clicking SUBMIT will end test, and you will not be allowed to attempt any more questions. Are you sure you want to End the test?`,
          buttons: [
            {
              label: "Submit",
              onClick: () => updateTimeTaken(),
            },
            {
              label: "Cancel",
              // onClick: () => alert("Click No")
            },
          ],
        })
      : alert("mock test completed");
  };

  return (
    <section className="question-practice-v2">
      {showModal && (
        <CustomModal
          isOpen={showModal}
          onRequestClose={toggleAlert}
          heading="Instructions"
          paragraphs={[
            `You cannot attempt more than ${
              totalQuestion - 10
            } questions in this section.`,
            "Please clear the response for some other question of this section to attempt this question.",
          ]}
          subParagraphs={[]}
          buttons={[
            {
              label: "Submit Test",
              className: "btn-success",
              onClick: submit,
            },
            {
              label: "Resume Test",
              className: "btn-primary",
              onClick: toggleAlert,
            },
          ]}
        />
      )}

      {data[currentPage]?.questionTextAndImages[0]?.text[0] ? (
        <div className="parawala">
          <div className=" w-100 d-flex ">
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
                        {data[currentPage].description?.map(
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
                                      handleOptionSelect(
                                        currentPage,
                                        optionIndex
                                      )
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
                      {topic.split("_").join(" ").toUpperCase() +
                        " " +
                        subTopic}
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

          <div className="d-flex justify-content-between w-100 align-items-center">
            <div
              className="button-container "
              style={{ display: "inline-flex", width: "82%" }}
            >
              <div
                className="d-flex justify-content-between w-100 align-items-center mx-2"
                style={{ width: "82%" }}
              >
                <div className="d-flex align-center gap-3 p-2 ">
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
            </div>
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ width: "18%" }}
            >
              <button className="btn-success btn" onClick={() => submit()}>
                Submit Test
              </button>
            </div>
          </div>
          <div className={`pb-1 offline ${isOnline ? "d-none" : "d-block"}`}>
            <span>You are offline right now. Check your connection.</span>
          </div>
        </div>
      ) : (
        <div className="normlal">
          <div className="w-100 d-flex">
            <div className={`testknock-left ${showPallet ? "" : "w-100"}`}>
              <div className="border-wrapper">
                <div className="question-box overflow-y-scroll ms-2 pe-2">
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
            </div>
            <div
              className="testknock-right position-relative "
              style={{
                width: `${showPallet ? "" : "0%"} `,
                maxHeight: "fit-content",
              }}
            >
              <div className="LeftBlock" style={{ maxHeight: "fit-content" }}>
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
                      {topic.split("_").join(" ").toUpperCase() +
                        " " +
                        subTopic}
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
          <div className="d-flex justify-content-between w-100 align-items-center">
            <div
              className="button-container "
              style={{ display: "inline-flex", width: "82%" }}
            >
              <div
                className="d-flex justify-content-between w-100 align-items-center mx-2"
                style={{ width: "82%" }}
              >
                <div className="d-flex align-center gap-3 p-2 ">
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
            </div>
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ width: "18%" }}
            >
              <button className="btn-success btn" onClick={() => submit()}>
                Submit Test
              </button>
            </div>
          </div>

          <div className={`pb-1 offline ${isOnline ? "d-none" : "d-block"}`}>
            <span>You are offline right now. Check your connection.</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default QuestionV2;
