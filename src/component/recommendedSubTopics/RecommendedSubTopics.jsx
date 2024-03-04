import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Calculator from "../practicequestions/Calculator";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { useDispatch, useSelector } from "react-redux";
import { setTestCompleted } from "../../utils/userSlice";
const TopicCard = styled.li`
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${(props) => (props.isCurrentTopic ? "#2f72b7" : "white")};
  color: ${(props) => (props.isCurrentTopic ? "white" : "black")};

  &:hover {
    background: #2f72b7;
    color: white;
  }
  &:focus {
    outline: none;
  }
  img {
    height: 20px;
    width: 20px;
  }
`;

const Wrapper = styled.ul`
  gap: 1rem;
  padding: 0px;
  flex-wrap: wrap;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 0px;
`;

const MarginTop = styled.div`
  top: 0;
  position: sticky;
  display: block;
  white-space: nowrap;
  padding: 10px;
  height: 7vh;
  width: 85%;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box2 = styled.h6`
  white-space: nowrap;
  padding: 4px 8px;
  margin-bottom: 0px;
  text-transform: uppercase;
  overflow-wrap: break-word;
`;

const RecommendedSubTopics = () => {
  const { topic , subTopic } = useParams();
  let time = "60";
  if (topic.toLowerCase() === "general_english_mock_test") {
    time = "45";
  }
  const testSubmitted = useSelector(
    (state) => state.user.mock_test.testSubmitted
  );

  const timeTaken = localStorage.getItem("timeTaken");
  const [showCalculator, setShowCalculator] = useState(false);

  const [timeLeft, setTimeLeft] = useState(time * 60);
  const [timerExpired, setTimerExpired] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const dispatch = useDispatch();
  const optionsUI = useSelector((state) => state.user.mock_test.optionsUI);
  const questionStatus = useSelector(
    (state) => state.user.mock_test.questionStatus
  );
  const updateTimeTaken = useCallback(() => {
    let timeTaken = time * 60;
    if (timeLeft !== 0) timeTaken = timeLeft;
    dispatch(setTestCompleted({ testSubmitted: true }));
    localStorage.setItem("optionsUI", JSON.stringify(optionsUI));
    localStorage.setItem("questionStatus", JSON.stringify(questionStatus));
    // console.log("time is in which test is compelte", timeTaken);
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

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  // const submit = () => {
  //   !timerExpired
  //     ? confirmAlert({
  //         title: "Confirm",
  //         message: `You have ${hours
  //           .toString()
  //           .padStart(2, "0")} : ${minutes
  //           .toString()
  //           .padStart(2, "0")} : ${seconds
  //           .toString()
  //           .padStart(
  //             2,
  //             "0"
  //           )} left. Clicking SUBMIT will end test, and you will not be allowed to attempt any more questions. Are you sure you want to End the test?`,
  //         buttons: [
  //           {
  //             label: "Submit",
  //             onClick: () => updateTimeTaken(),
  //           },
  //           {
  //             label: "Cancel",
  //             // onClick: () => alert("Click No"),
  //           },
  //         ],
  //       })
  //     : alert("mock test completed");
  // };

  return (
    <section className=" ">
      {!testSubmitted && (
        <div
          className="topic d-flex align-items-center justify-content-between"
          style={{ background: "#eee" }}
        >
          <MarginTop>
            <Wrapper>
              <TopicCard isCurrentTopic={true}>
                <Box>
                  <Box2 isCurrentTopic={true}>
                    {topic.split("_").join(" ") + " " + subTopic}
                  </Box2>
                </Box>
              </TopicCard>
            </Wrapper>
          </MarginTop>
          <div className="ct-icons pe-3">
            <span
              className="calc-icon"
              role="presentation"
              onClick={() => setShowCalculator(!showCalculator)}
            ></span>
            {showCalculator ? (
              <Calculator setShowCalculator={setShowCalculator} />
            ) : (
              ""
            )}
          </div>
        </div>
      )}
      <div className="ct-timer-block">
      {!testSubmitted ? (
          <div className="ct-timer-left">Section</div>
        ) : (
          <h6 className="ms-2 ct-timer-left mb-0">
            {topic.split("_").join(" ").toUpperCase() + " " + subTopic}
          </h6>
        )}
        {!testSubmitted ? (
          <div className="ct-timer-right">
            <span className="mr-1"> Time Left :</span>
            <span id="timer">
              <span>{hours.toString().padStart(2, "0")}</span>:
              <span>{minutes.toString().padStart(2, "0")}</span>:
              <span>{seconds.toString().padStart(2, "0")}</span>
            </span>
          </div>
        ) : (
          <div className="ct-timer-right">
            <span className="mr-1"> Time Taken : </span>
            <span id="timer" className="fs-4">
              {timeTaken !== undefined && timeTaken !== null ? (
                timeTaken !== 0 ? (
                  <span>
                    {Math.floor((time * 60 - timeTaken) / 3600)
                      .toString()
                      .padStart(2, "0")}
                    :
                    {Math.floor(((time * 60 - timeTaken) % 3600) / 60)
                      .toString()
                      .padStart(2, "0")}
                    :
                    {Math.floor((time * 60 - timeTaken) % 60)
                      .toString()
                      .padStart(2, "0")}
                  </span>
                ) : (
                  <span>
                    {Math.floor(time / 3600)
                      .toString()
                      .padStart(2, "0")}
                    :
                    {Math.floor((time % 3600) / 60)
                      .toString()
                      .padStart(2, "0")}
                    :
                    {Math.floor(time % 60)
                      .toString()
                      .padStart(2, "0")}
                  </span>
                )
              ) : (
                <span>00:00:00</span>
              )}
            </span>
          </div>
        )}
        {/* {!testSubmitted && (
          <button
            className="ms-2 btn btn-success"
            style={{ position: "absolute", bottom: "3%", right: "5%" }}
            onClick={submit}
          >
            Submit Test
          </button>
        )} */}

        {/* <button onClick={submit()}>Confirm dialog</button> */}
      </div>
      {!testSubmitted && (
        <div className="ct-marks-sections">
          <span className="ct-mark-right">
            Marks for correct answer <span className="text-success">5</span>
          </span>
          <span className="ms-1 me-1">|</span>
          <span>
            Negative Marks <span className="text-danger"> -1</span>
          </span>
        </div>
      )}
    </section>
  );
};

export default RecommendedSubTopics;
