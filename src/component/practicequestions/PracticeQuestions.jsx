import React, { useEffect, useState } from "react";
import "./question.css";
import { useParams } from "react-router-dom";
import { API } from "../../utils/constants";
import QuestionV2 from "./QuestionV2";
import axios from "axios";
import RecommendedSubTopics from "../recommendedSubTopics/RecommendedSubTopics";
import TietLoader from "../Loader/Loader";
import NoData from "../Loader/NoData";

const PracticeQuestions = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [calcMinimize, setCalcMinimize] = useState(false);
  const { topic, subTopic } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      localStorage.setItem("currentSubTopic", subTopic);
      const params = {
        topic: subTopic,
        // topic : "Reading_Comprehension"
      };
      try {
        const response = await axios.get(`${API}/question/mock_test/`, {
          params: params,
        });
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [topic, subTopic]);


  if (isLoading) {
    return <TietLoader />;
  }

  return (
    <section className="question-practice">
      {data ? (
        <section className="testknock-mock-test w-100">
          <div className="d-flex justify-content-center align-items-center">
            <div className="testknock-left">
              <div className="text-center test-title">
                TESTKNOCK TEST PLATFORM
              </div>
            </div>
            <div className="ps-2 testknock-right">
              <div className=" d-flex justify-content-center align-items-center gap-3">
                <div className="text-nowrap">Question Paper</div>
                <div>Instructions</div>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="testknock-left pe-0">
              <RecommendedSubTopics />
            </div>
            <div className="ps-0 testknock-right">
              <div className="ct-right">
                <div className="ct-profile-image">
                  <img
                    src="https://kananprep-assets.s3.ap-south-1.amazonaws.com/testengine/testengine-items/catlayout/NewCandidateImage.jpg"
                    alt="profile"
                  />
                </div>
                <div className="ct-profile-details">
                  <div className="ct-username">{user.name}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-100">
            <QuestionV2 data={data} />
          </div>
        </section>
      ) : (
        <NoData/>
      )}
    </section>
  );
};

export default PracticeQuestions;
