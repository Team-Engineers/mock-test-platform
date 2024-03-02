import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Calculator from "../practicequestions/Calculator";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

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
  const { topic } = useParams();
  let time = "60";
  if (topic.toLowerCase() === "general_english_mock_test") {
    time = "45";
  }

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

  useEffect(() => {
    // Check if time left is 0
    if (timeLeft === 0) {
      setTimerExpired(true);
      alert("Timer is over!");
    }
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  const submit = () => {
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
              // onClick: () => alert("Click Yes"),
            },
            {
              label: "Cancel",
              // onClick: () => alert("Click No"),
            },
          ],
        })
      : alert("mock test completed");
  };

  return (
    <section className=" ">
      <div
        className="topic d-flex align-items-center justify-content-between"
        style={{ background: "#eee" }}
      >
        <MarginTop>
          <Wrapper>
            <TopicCard isCurrentTopic={true}>
              <Box>
                <Box2 isCurrentTopic={true}>{topic.split("_").join(" ")}</Box2>
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
      <div className="ct-timer-block">
        <div className="ct-timer-left">Section</div>
        <div className="ct-timer-right">
          <span className="mr-1"> Time Left :</span>
          <span id="timer">
            <span>{hours.toString().padStart(2, "0")}</span>:
            <span>{minutes.toString().padStart(2, "0")}</span>:
            <span>{seconds.toString().padStart(2, "0")}</span>
          </span>
        </div>
        <button
          className="ms-2 btn btn-success"
          style={{ position: "absolute", bottom: "3%", right: "50%" }}
          onClick={() => submit()}
        >
          Submit Test
        </button>

        {/* <button onClick={submit()}>Confirm dialog</button> */}
      </div>
      <div className="ct-marks-sections">
        <span className="ct-mark-right">
          Marks for correct answer <span className="text-success">5</span>
        </span>
        <span className="ms-1 me-1">|</span>
        <span>
          Negative Marks <span className="text-danger"> -1</span>
        </span>
      </div>
    </section>
  );
};

export default RecommendedSubTopics;
