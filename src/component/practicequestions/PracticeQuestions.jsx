import React, { useState } from "react";
import "./question.css";
import { Link } from "react-router-dom";
import QuestionV2 from "./QuestionV2";
import RecommendedSubTopics from "../recommendedSubTopics/RecommendedSubTopics";
import NoData from "../Loader/NoData";
import Logo from "../../assets/images/logo.png";
import InstructionModal from "../instruction/InstructionContentModal";
import QuestionPaperModal from "./QuestionPaperModal";
import { useSelector } from "react-redux";
import AnswerScreen from "../AnswerScreen/AnswerScreen";

const PracticeQuestions = ({data}) => {

  const [showInstructions, setShowInstructions] = useState(false);
  const [showQuestionPaperModal, setShowQuestionPaperModal] = useState(false);
  // const { subject, topic, subTopic } = useParams();
  // const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));



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
            <section className="testknock-mock-test w-100 ">
              <div className="d-flex justify-content-center level-0 align-items-center">
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
                      <div className="text-nowrap mt-2 gap-2 d-flex justify-content-center align-items-center ">
                        <button
                          className="score-card-btn"
                          onClick={() => window.location.reload()}
                        >
                          Retake Test
                        </button>
                        <Link
                          className=" score-card-btn"
                          style={{ textDecoration: "none" }}
                          to="https://cuet.testknock.com/"
                        >
                          Home
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="d-flex level-1">
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

              <div className="w-100 level-2">
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
