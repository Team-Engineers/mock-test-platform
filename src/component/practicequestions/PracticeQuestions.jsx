import React, { useEffect, useState } from "react";
import "./question.css";
import { useParams } from "react-router-dom";
import { API } from "../../utils/constants";
import QuestionV2 from "./QuestionV2";
import axios from "axios";
import RecommendedSubTopics from "../recommendedSubTopics/RecommendedSubTopics";
import NoData from "../Loader/NoData";
import Logo from "../../assets/images/logo.png";
import InstructionModal from "../instruction/InstructionContentModal";
import QuestionPaperModal from "./QuestionPaperModal";
import CuetLoader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setTestCompleted } from "../../utils/userSlice";
import AnswerScreen from "../AnswerScreen/AnswerScreen";

const PracticeQuestions = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showQuestionPaperModal, setShowQuestionPaperModal] = useState(false);
  const { topic, subTopic } = useParams();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      localStorage.setItem("currentSubTopic", subTopic);
      const params = {
        topic: topic.toLowerCase(),
        subTopic: subTopic,
      };
      try {
        const response = await axios.get(`${API}/question/mock_test/`, {
          params: params,
        });
        let truncatedData;
        if (topic === "general_english_mock_test") {
          truncatedData = response.data.data.slice(0, 50);
          dispatch(setTestCompleted({ totalQuestion: "50" }));
        } else {
          truncatedData = response.data.data.slice(0, 60);
        }
        setData(truncatedData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [topic, subTopic, dispatch]);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
    setShowQuestionPaperModal(false);
  };

  const toggleQuestionPaperModal = () => {
    setShowQuestionPaperModal(!showQuestionPaperModal);
    setShowInstructions(false);
  };

  const testSubmitted = useSelector(
    (state) => state.user.mock_test.testSubmitted
  );

  if (isLoading) {
    return <CuetLoader />;
  }

  // console.log("testSubmitted",testSubmitted)

  return (
    <>
      {showInstructions && (
        <InstructionModal
          toggleInstruction={toggleInstructions}
          isOpen={showInstructions}
        />
      )}
      <QuestionPaperModal
        isOpen={showQuestionPaperModal}
        toggleQuestionPaper={toggleQuestionPaperModal}
        data={data}
      />
      {
        <section className="question-practice">
          {data ? (
            <section className="testknock-mock-test w-100">
              <div className="d-flex justify-content-center align-items-center">
                <div className="testknock-left">
                  <div className="text-center test-title">
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <img
                        src={Logo}
                        alt="cuet-testknock-logo"
                        style={{ height: "25px" }}
                      />
                      TESTKNOCK TEST PLATFORM
                    </div>
                  </div>
                </div>
                <div className="ps-2 testknock-right">
                  <div className="d-flex justify-content-center align-items-center gap-3">
                    {!testSubmitted ? (
                      <div className="text-nowrap gap-2 d-flex justify-content-center align-items-center ">
                        <button
                          className="modal-button"
                          onClick={toggleQuestionPaperModal}
                        >
                          Question Paper
                        </button>
                        <button
                          className="modal-button"
                          onClick={toggleInstructions}
                        >
                          Instructions
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="testknock-left pe-0">
                  <RecommendedSubTopics />
                </div>
                {!testSubmitted && (
                  <div className="ps-0 testknock-right">
                    <div className="ct-right">
                      <div className="ct-profile-image">
                        <img
                          src="https://kananprep-assets.s3.ap-south-1.amazonaws.com/testengine/testengine-items/catlayout/NewCandidateImage.jpg"
                          alt="profile"
                        />
                      </div>
                      <div className="ct-profile-details">
                        <div className="ct-username">{user?.name}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="w-100">
                {testSubmitted ? (
                  <AnswerScreen data={data} />
                ) : (
                  // <div className=""></div>
                  <QuestionV2 data={data} />
                )}
              </div>
            </section>
          ) : (
            <NoData />
          )}
        </section>
      }
    </>
  );
};

export default PracticeQuestions;
