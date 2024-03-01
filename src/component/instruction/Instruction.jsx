import React, { useState } from "react";
import "./Instruction.css";
import TestProfile from "../../assets/images/test-profile.jpg";
import questionSymbol from "../../assets/images/question_symbol.jpeg";
import forward from "../../assets/images/forward.png";
import backward from "../../assets/images/backward.png";
import PracticeQuestions from "../practicequestions/PracticeQuestions";
const Instruction = () => {
  const [ready, setReady] = useState(false);
  const candidateName = JSON.parse(localStorage.getItem("user"));
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [begin, setBegin] = useState(false);
  localStorage.removeItem("currentPage");
  return (
    <>
      {isButtonClicked === false ? (
        <section className="instruction">
          <div class="ct-inst-container">
            <div class="ct-ins-topbar"></div>
            <div class="ct-ins-main">
              <div class="ct-ins-left">
                <div class="ct-ins-content">Instructions</div>
                {ready ? (
                  <>
                    <div class="col-xs-12 col-sm-12 di-content">
                      <div
                        ng-if="instructionsJSON.instructionsArr"
                        class="ng-scope"
                      >
                        <p>
                          <b translate="" class="ng-scope">
                            Read the following instructions carefully.
                          </b>
                        </p>
                        <ol
                          start="1"
                          ng-if="instructionsJSON &amp;&amp; instructionsJSON.instructionsArr.length > 1 &amp;&amp; !instructionsJSON.isSourceCP"
                          class="for-all-exams ng-scope"
                        >
                          <li
                            ng-repeat="ins in instructionsJSON.instructionsArr"
                            class="ng-scope"
                          >
                            <p>
                              <span
                                ng-bind-html="parseHtml(ins.value)"
                                class="ng-binding"
                              >
                                The Test contains 50 questions out of which 40
                                questions are to be attempted.
                              </span>
                            </p>
                          </li>
                          <li
                            ng-repeat="ins in instructionsJSON.instructionsArr"
                            class="ng-scope"
                          >
                            <p>
                              <span
                                ng-bind-html="parseHtml(ins.value)"
                                class="ng-binding"
                              >
                                The candidate can not attempt more than 40
                                Questions, however they can change the already
                                attempted Question among the 50 Questions.
                              </span>
                            </p>
                          </li>
                          <li
                            ng-repeat="ins in instructionsJSON.instructionsArr"
                            class="ng-scope"
                          >
                            <p>
                              <span
                                ng-bind-html="parseHtml(ins.value)"
                                class="ng-binding"
                              >
                                Each question has 4 options out of which only
                                one is correct.
                              </span>
                            </p>
                          </li>
                          <li
                            ng-repeat="ins in instructionsJSON.instructionsArr"
                            class="ng-scope"
                          >
                            <p>
                              <span
                                ng-bind-html="parseHtml(ins.value)"
                                class="ng-binding"
                              >
                                You have to finish the test in 45 minutes.
                              </span>
                            </p>
                          </li>
                          <li
                            ng-repeat="ins in instructionsJSON.instructionsArr"
                            class="ng-scope"
                          >
                            <p>
                              <span
                                ng-bind-html="parseHtml(ins.value)"
                                class="ng-binding"
                              >
                                <p>
                                  You will be awarded 5&nbsp;marks for each
                                  correct answer and there will be
                                  1&nbsp;negative marking
                                </p>
                              </span>
                            </p>
                          </li>
                          <li
                            ng-repeat="ins in instructionsJSON.instructionsArr"
                            class="ng-scope"
                          >
                            <p>
                              <span
                                ng-bind-html="parseHtml(ins.value)"
                                class="ng-binding"
                              >
                                There is no penalty for the questions that you
                                have not attempted.
                              </span>
                            </p>
                          </li>
                          <li
                            ng-repeat="ins in instructionsJSON.instructionsArr"
                            class="ng-scope"
                          >
                            <p>
                              <span
                                ng-bind-html="parseHtml(ins.value)"
                                class="ng-binding"
                              >
                                <p>
                                  Once you start the test, you will not be
                                  allowed to reattempt it. Make sure that you
                                  complete the&nbsp;test before you submit the
                                  test and/or close the browser.
                                </p>
                              </span>
                            </p>
                          </li>
                        </ol>
                        <div class="for-ssc">
                          <u>
                            <b>प्रश्‍नपत्र के बारे में</b>
                          </u>
                          :<br />
                          <br />1 इस प्रश्‍नपत्र में बहु-विकल्पीय वस्तुनिष्ठ
                          प्रश्‍न हैं जिसमें 4 विकल्प दिए गए हैं, जिसमें से केवल
                          1 विकल्प सही है ।<br />
                          <br />2 कंप्‍यूटर आधारित परीक्षा द्विभाषी अर्थात
                          अंग्रेजी एवं हिन्‍दी भाषा में होगी । प्रश्‍न और उत्‍तर
                          के विकल्‍प दोनो भाषाओं में दिखाई देंगे ।<br />
                          <br />3 स्क्रीन के शीर्ष दाएं कोने में टाइमर (घड़ी)
                          उपलब्ध है; आपसे अनुरोध है कि परीक्षा पूरी करने के लिए
                          शेष समय की जानकारी हेतु इसे देखते रहें ।<br />
                          <br />4 एक बार में कंप्यूटर स्क्रीन पर केवल एक प्रश्‍न
                          प्रदर्शित किया जाएगा । अभ्यर्थियों को अगले प्रश्‍न पर
                          जाने के लिए स्क्रीन के नीचे दिए गए बटन{" "}
                          <button type="button" class="btn btn-gray-dark">
                            Next Question{" "}
                            <i class="tb-icon tb-arrow-right-thin"></i>
                          </button>{" "}
                          पर क्लिक करना चाहिए अथवा पिछले प्रश्‍न पर जाने के लिए{" "}
                          <button type="button" class="btn btn-gray-dark">
                            <i class="tb-icon tb-arrow-left-thin"></i> Previous
                            Question
                          </button>{" "}
                          पर क्लिक करना चाहिए ।<br />
                          <br />5 प्रश्‍नों को दी गई समय सीमा के भीतर किसी भी
                          क्रम में हल किया जा सकता है । अभ्‍यर्थी को 4 विकल्पों
                          में से सही विकल्प पर माउस से क्लिक करना होगा । यदि
                          अभ्यर्थी प्रश्‍न का उत्तर नही देना चाहता है तो वह उस
                          प्रश्‍न को खाली छोड़ सकता है ।
                          <div>
                            <br />6 अभ्यर्थी यदि चाहता है तो वह नए विकल्प का चयन
                            कर किसी प्रश्‍न के विकल्प को बदल सकता है । यदि
                            अभ्यर्थी प्रश्‍न का उत्तर नहीं देना चाहता है तो वह
                            प्रश्‍न के सामने दिए गए{" "}
                            <button type="button" class="btn btn-danger">
                              Erase
                            </button>{" "}
                            को क्लिक कर उत्‍तर को अचयनित कर सकता है ।
                          </div>
                          <div>
                            <br />7 प्रश्‍नों में आगे और पीछे जाने के लिए,
                            अभ्यर्थियों को{" "}
                            <button type="button" class="btn btn-gray-dark">
                              Next Question{" "}
                              <i class="tb-icon tb-arrow-right-thin"></i>
                            </button>{" "}
                            या{" "}
                            <button type="button" class="btn btn-gray-dark">
                              <i class="tb-icon tb-arrow-left-thin"></i>{" "}
                              Previous Question
                            </button>{" "}
                            बटन का इस्तेमाल करना चाहिए अथवा कंप्यूटर स्क्रीन के
                            दाएं हाथ की ओर दी गई प्रश्‍न संख्या पर क्लिक करना
                            चाहिए जहां पर प्रश्‍न संख्याओं को `किए गए` या `न किए
                            गए` की स्थिति के साथ प्रदर्शित किया जाएगा।
                            <br />
                            <br />8 जब भी अभ्यर्थी{" "}
                            <button type="button" class="btn btn-gray-dark">
                              Next Question{" "}
                              <i class="tb-icon tb-arrow-right-thin"></i>
                            </button>{" "}
                            या{" "}
                            <button type="button" class="btn btn-gray-dark">
                              <i class="tb-icon tb-arrow-left-thin"></i>{" "}
                              Previous Question
                            </button>{" "}
                            बटन पर क्लिक करके अगले प्रश्‍न पर जाता है तो उत्तरों
                            को सहेज लिया जाएगा ।<br />
                            <br />9 अभ्यर्थियों के पास स्क्रीन के निचले हिस्से
                            में उपलब्ध.{" "}
                            <button type="button" class="btn btn-warning">
                              Tag
                            </button>{" "}
                            बटन पर क्लिक करके किसी प्रश्‍न को बुकमार्क करने का
                            विकल्प है, अगर वे बाद में उसकी समीक्षा करने की इच्छा
                            रखते हैं । एक विशेष प्रश्‍न पर मौजूद बुकमार्क को{" "}
                            <button type="button" class="btn btn-warning">
                              De-Tag
                            </button>{" "}
                            पर क्लिक करके हटाया जा सकता है ।<br />
                            <br />
                            10 स्क्रीन के दायीं ओर प्रश्‍न पैलेट में प्रत्येक
                            संख्यांकित प्रश्‍न की निम्नलिखित स्थिति दिखाई देती
                            है ।<br />
                            <br />
                            <ul class="que-ans-states">
                              <li>
                                <span class="label skipped"></span> आपने प्रश्‍न
                                का उत्तर नहीं दिया है।
                              </li>
                              <li>
                                <span class="label attempted"></span> आपने
                                प्रश्‍न का उत्तर दिया है।
                              </li>
                              <li>
                                <span class="label bookmarked"></span> आपने
                                प्रश्‍न का उत्तर नहीं दिया है और समीक्षा के लिए
                                चिन्हित किया है।
                              </li>
                              <li>
                                <span class="label attempted bookmarked"></span>{" "}
                                आपने प्रश्‍न का उत्तर दिया है लेकिन समीक्षा के
                                लिए चिन्हित किया है।
                              </li>
                            </ul>
                            <br />
                            <b>कृपया ध्यान दें: जिन</b>
                            <b>
                              प्रश्‍नों का उत्तर दिया गया है और समीक्षा के लिए
                              चिन्हित किया गया है उन
                            </b>
                            <b>प्रश्‍नों को केवल तभी तक उत्तर दिया गया</b>
                            <b>
                              प्रश्‍न माना जाएगा जब तक अभ्यर्थी चयनित विकल्प को{" "}
                              <button type="button" class="btn btn-warning">
                                Erase
                              </button>{" "}
                              नहीं करता है।
                            </b>
                            <br />
                            <br />
                            11 परीक्षा की अवधि पूर्ण होने पर, यदि अभ्‍यर्थी
                            उत्‍तर पर क्लिक नहीं करता है अथवा{" "}
                            <button type="button" class="btn btn-yellow-green">
                              Submit Test
                            </button>{" "}
                            बटन पर क्लिक नहीं करता है तो कंप्‍यूटर द्वारा स्‍वत:
                            शून्‍य परिणाम सहेज लिया जाएगा ।<br />
                            <br />
                            12 अभ्‍यर्थी निर्धारित 1 घण्‍टा ( 60 मिनट ) के पूर्ण
                            होने पर ही परीक्षा को submit करने में समर्थ होंगे ।
                            यदि अभ्‍यर्थी ने 1 घण्‍टा (60 मिनट) के पूर्ण होने पर
                            अपनी परीक्षा पूर्ण नहीं की तो सिस्‍टम स्‍वत: परीक्षा
                            को submit कर देगा।
                            <br />
                            <br />
                            <div align="center">
                              <b>"शुभकामनाएँ"</b>
                              <br />
                            </div>
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>About Question Paper:</b>
                            </u>
                            <br />
                            <br />1 The Question Paper consists of multiple
                            choice objective type questions with 4 options out
                            of which only 1 is correct.
                            <br />
                            <br />2 The computer based exam will be in bilingual
                            i.e. English &amp; Hindi Languages. Questions and
                            Answer options will appear in both the languages.
                            <br />
                            <br />3 There is a TIMER (Clock) available on the
                            TOP RIGHT HAND CORNER of the Screen; you are
                            requested to keep an eye on it for knowing the time
                            remaining for the completion of the exam.
                            <br />
                            <br />4 Only one question will be displayed on the
                            computer screen at a time. To attempt next question
                            the candidates should click on{" "}
                            <button type="button" class="btn btn-gray-dark">
                              Next Question{" "}
                              <i class="tb-icon tb-arrow-right-thin"></i>
                            </button>{" "}
                            or to go back click on{" "}
                            <button type="button" class="btn btn-gray-dark">
                              <i class="tb-icon tb-arrow-left-thin"></i>{" "}
                              Previous Question
                            </button>{" "}
                            button provided at the bottom of the screen
                            <br />
                            <br />5 The questions can be answered in any order
                            within the given time frame. The candidate should
                            click with the mouse on the correct choice, from 4
                            options given. In case, the candidate does not wish
                            to attempt any question, it can be left blank.
                            <br />
                            <br />6 The candidate can change the option of a
                            question later by selecting a new option in case
                            he/she wishes to. In case candidate does not want to
                            answer the question, he/she can deselect the answer
                            by clicking{" "}
                            <button type="button" class="btn btn-danger">
                              Erase
                            </button>{" "}
                            provided against the question.
                            <br />
                            <br />7 To move back and forth between questions,
                            candidates should use the{" "}
                            <button type="button" class="btn btn-gray-dark">
                              Next Question{" "}
                              <i class="tb-icon tb-arrow-right-thin"></i>
                            </button>{" "}
                            or{" "}
                            <button type="button" class="btn btn-gray-dark">
                              <i class="tb-icon tb-arrow-left-thin"></i>{" "}
                              Previous Question
                            </button>{" "}
                            button or click on the question number on the right
                            hand side of the computer screen where question
                            numbers would be displayed along with the
                            `attempted` and `not attempted` status
                            <br />
                            <br />8 The answers will be saved whenever the
                            candidate goes for next question, by clicking on{" "}
                            <button type="button" class="btn btn-gray-dark">
                              Next Question{" "}
                              <i class="tb-icon tb-arrow-right-thin"></i>
                            </button>{" "}
                            or{" "}
                            <button type="button" class="btn btn-gray-dark">
                              <i class="tb-icon tb-arrow-left-thin"></i>{" "}
                              Previous Question
                            </button>{" "}
                            button.
                            <br />
                            <br />9 Candidates have the option to bookmark a
                            question in case they want to review it at a later
                            stage by clicking on the{" "}
                            <button type="button" class="btn btn-warning">
                              Tag
                            </button>{" "}
                            button available at the bottom of the screen. The
                            Bookmark on a particular question can be removed by
                            clicking on{" "}
                            <button type="button" class="btn btn-warning">
                              De-Tag
                            </button>
                            <br />
                            <br />
                            10 The question palette at the right of the screen
                            shows the following status of each of the questions
                            numbered
                            <br />
                            <br />
                            <ul class="que-ans-states">
                              <li>
                                <span class="label skipped"></span> You have not
                                answered the question.
                              </li>
                              <li>
                                <span class="label attempted"></span> You have
                                answered the question.
                              </li>
                              <li>
                                <span class="label bookmarked"></span> You have
                                NOT answered the question, but have marked the
                                question for review.
                              </li>
                              <li>
                                <span class="label attempted bookmarked"></span>{" "}
                                You have answered the question, but marked it
                                for review.
                              </li>
                            </ul>
                            <br />
                            <b>
                              PS: Questions which are attempted and marked for
                              review would be treated as attempted questions
                              only as long as the candidate does not{" "}
                              <button type="button" class="btn btn-danger">
                                Erase
                              </button>{" "}
                              the option selected.
                            </b>
                            <br />
                            <br />
                            11 On the completion of the test duration, even if
                            the candidate does not click on an answer or does
                            not click on the{" "}
                            <button type="button" class="btn btn-yellow-green">
                              Submit Test
                            </button>{" "}
                            button, a NIL result will be saved automatically by
                            the computer.
                            <br />
                            <br />
                            12 The candidate will only be able to submit the
                            test on completion of the stipulated 1 hour (60
                            Minutes). In case a candidate not completed his/her
                            test at the completion of stipulated 1 hour (60
                            Minutes), the system shall automatically submit the
                            test.
                            <br />
                            <br />
                            <div align="center">
                              <b>"ALL THE BEST"</b>
                              <br />
                            </div>
                            <br />
                            <br />
                          </div>
                        </div>
                      </div>
                      <div ng-if="!isTestInProgress" class="ng-scope">
                        <div
                          class="js-dummy-height-creater"
                          style= {{height: "245px"}}
                        ></div>
                        <div class="test-start-acceptance js-test-start-acceptance">
                          <div ng-if="!isUISSCCGL()" class="ng-scope">
                            <form
                              ng-show="languages.length > 1 &amp;&amp; checkSdkModeActive || !checkSdkModeActive"
                              class="ng-pristine ng-valid"
                            >
                              <label
                                for="language"
                                translate=""
                                class="ng-scope"
                              >
                                Choose your default language:
                              </label>
                              <select
                                ng-disabled="languages.length == 1"
                                id="language"
                                ng-model="$root.lang"
                                ng-options="lang.prompt for lang in languages"
                                ng-change="setLanguage(lang)"
                                class="ng-pristine ng-untouched ng-valid ng-not-empty"
                              >
                                <option
                                  label="-- Select --"
                                  value="object:77"
                                  selected="selected"
                                >
                                  -- Select --
                                </option>
                                <option label="English" value="object:78">
                                  English
                                </option>
                                <option label="Hindi" value="object:79">
                                  Hindi
                                </option>
                              </select>
                            </form>
                            <p
                              class="text-danger ng-scope"
                              translate=""
                              ng-if="languages.length > 1"
                            >
                              Please note all questions will appear in your
                              default language. This language can be changed for
                              a particular question later on
                            </p>
                            <hr class="mar-v8" ng-show="languages.length > 1" />
                          </div>
                          <p>
                            <b class="ng-binding">Declaration:</b>
                          </p>
                          <label class="test-instructions-declaration ng-binding">
                            <input
                              type="checkbox"
                              name="instructions"
                              ng-model="$root.checkboxModel.isAccepted"
                              ng-true-value="true"
                              ng-false-value="false"
                              class="ng-pristine ng-untouched ng-valid ng-empty"
                            />{" "}
                            I have read all the instructions carefully and have
                            understood them. I agree not to cheat or use unfair
                            means in this examination. I understand that using
                            unfair means of any sort for my own or someone
                            else’s advantage will lead to my immediate
                            disqualification.
                            <span
                              ng-if="!fromOrganisation"
                              class="ng-binding ng-scope"
                            >
                              The decision of Testbook.com will be final in
                              these matters and cannot be appealed.
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      class="col-xs-12 c-test-instructions ng-scope"
                      ng-class="{'railway-test-interface':isRailwayTestInterfaceUsed}"
                      ng-show="showInstTab == 1"
                      id="bank-instructions"
                      ng-if="!instructionsJSON.isGateExam"
                    >
                      <h4>General Instructions:</h4>
                      <ol start="1">
                        <li>
                          <p>
                            The clock will be set at the server. The countdown
                            timer at the top right corner of screen will display
                            the remaining time available for you to complete the
                            examination. When the timer reaches zero, the
                            examination will end by itself. You need not
                            terminate the examination or submit your paper.
                          </p>
                        </li>
                        <li>
                          <p>
                            The Question Palette displayed on the right side of
                            screen will show the status of each question using
                            one of the following symbols:
                          </p>
                          <ul class="que-ans-states hide-on-railway">
                            <li>
                              <span class="label"></span> You have not visited
                              the question yet.
                            </li>
                            <li>
                              <span class="label skipped"></span> You have not
                              answered the question.
                            </li>
                            <li>
                              <span class="label attempted"></span> You have
                              answered the question.
                            </li>
                            <li>
                              <span class="label bookmarked"></span> You have
                              NOT answered the question, but have marked the
                              question for review.
                            </li>
                            <li>
                              <span class="label attempted bookmarked"></span>{" "}
                              You have answered the question, but marked it for
                              review.
                            </li>
                          </ul>
                          <ul class="railway-instructions-legend show-on-railway">
                            <li>
                              <span class="new-legend not-answered"></span> You
                              have not answered the question.
                            </li>
                            <li>
                              <span class="new-legend answered"></span> You have
                              answered the question.
                            </li>
                            <li>
                              <span class="new-legend reviewed"></span> You have
                              NOT answered the question, but have marked the
                              question for review.
                            </li>
                            <li>
                              <span class="new-legend reviewed-answered"></span>{" "}
                              You answered the question also marked the question
                              for review.
                            </li>
                          </ul>
                        </li>
                      </ol>
                      <p>
                        The <b>Mark For Review</b> status for a question simply
                        indicates that you would like to look at that question
                        again. If a question is answered, but marked for review,
                        then the answer will be considered for evaluation unless
                        the status is modified by the candidate.
                      </p>
                      <b>Navigating to a Question :</b>
                      <ol start="3">
                        <li>
                          <p>To answer a question, do the following:</p>
                          <ol>
                            <li>
                              Click on the question number in the Question
                              Palette at the right of your screen to go to that
                              numbered question directly. Note that using this
                              option does NOT save your answer to the current
                              question.
                            </li>
                            <li>
                              Click on <b>Save &amp; Next</b> to save your
                              answer for the current question and then go to the
                              next question.
                            </li>
                            <li>
                              Click on{" "}
                              <b>
                                Mark for Review{" "}
                                <span class="hide-on-railway">&amp; Next</span>
                              </b>{" "}
                              to save your answer for the current question and
                              also mark it for review{" "}
                              <span class="hide-on-railway">
                                , and then go to the next question.
                              </span>
                            </li>
                          </ol>
                        </li>
                      </ol>
                      <p>
                        Note that your answer for the current question will not
                        be saved, if you navigate to another question directly
                        by clicking on a question number{" "}
                        <span>without saving</span> the answer to the previous
                        question.
                      </p>
                      <p>
                        You can view all the questions by clicking on the{" "}
                        <b>Question Paper</b> button.{" "}
                        <span style={{ color: "#ff0000" }}>
                          This feature is provided, so that if you want you can
                          just see the entire question paper at a glance.
                        </span>
                      </p>
                      <h4>Answering a Question :</h4>
                      <ol start="4">
                        <li>
                          <p>
                            Procedure for answering a multiple choice (MCQ) type
                            question:
                          </p>
                          <ol>
                            <li>
                              Choose one answer from the 4 options (A,B,C,D)
                              given below the question
                              <span class="hide-on-railway">
                                , click on the bubble placed before the chosen
                                option.
                              </span>
                            </li>
                            <li class="hide-on-railway">
                              To deselect your chosen answer, click on the
                              bubble of the chosen option again or click on the{" "}
                              <b>
                                <span class="hide-on-railway">
                                  Clear Response
                                </span>{" "}
                                <span class="show-on-railway">
                                  Erase Answer
                                </span>
                              </b>{" "}
                              button
                            </li>
                            <li>
                              To change your chosen answer, click on the bubble
                              of another option.
                            </li>
                            <li>
                              To save your answer, you MUST click on the{" "}
                              <b>Save &amp; Next</b>
                            </li>
                          </ol>
                        </li>
                        <li>
                          <p>
                            Procedure for answering a numerical answer type
                            question :
                          </p>
                          <ol>
                            <li>
                              To enter a number as your answer, use the virtual
                              numerical keypad.
                            </li>
                            <li>
                              A fraction (e.g. -0.3 or -.3) can be entered as an
                              answer with or without "0" before the decimal
                              point.{" "}
                              <span style={{ color: "red" }}>
                                As many as four decimal points, e.g. 12.5435 or
                                0.003 or -932.6711 or 12.82 can be entered.
                              </span>
                            </li>
                            <li>
                              To clear your answer, click on the{" "}
                              <b>Clear Response</b> button
                            </li>
                            <li>
                              To save your answer, you MUST click on the{" "}
                              <b>Save &amp; Next</b>
                            </li>
                          </ol>
                        </li>
                        <li ng-show="isJeeTestInterfaceUsed" class="ng-hide">
                          <p>
                            Procedure for answering a multiple correct answers
                            (MCAQ) type question
                          </p>
                          <ol>
                            <li>
                              Choose one or more answers from the 4 options
                              (A,B,C,D) given below the question, click on the
                              bubble placed before the chosen option.
                            </li>
                            <li>
                              To deselect your chosen answer, click on the
                              checkbox of the chosen option again
                            </li>
                            <li>
                              To clear your marked responses, click on the{" "}
                              <b>Clear Response</b> button
                            </li>
                            <li>
                              To save your answer, you MUST click on the{" "}
                              <b>Save &amp; Next</b> button
                            </li>
                          </ol>
                        </li>
                        <li>
                          <p>
                            To mark a question for review, click on the{" "}
                            <b>
                              Mark for Review{" "}
                              <span class="hide-on-railway">&amp; Next</span>
                            </b>{" "}
                            button. If an answer is selected (for MCQ/MCAQ)
                            entered (for numerical answer type) for a question
                            that is <b>Marked for Review</b> , that answer will
                            be considered in the evaluation unless the status is
                            modified by the candidate.
                          </p>
                        </li>
                        <li>
                          <p>
                            To change your answer to a question that has already
                            been answered, first select that question for
                            answering and then follow the procedure for
                            answering that type of question.
                          </p>
                        </li>
                        <li>
                          <p>
                            Note that ONLY Questions for which answers are{" "}
                            <b>saved</b> or{" "}
                            <b>marked for review after answering</b> will be
                            considered for evaluation.
                          </p>
                        </li>
                        <li>
                          <p>
                            Sections in this question paper are displayed on the
                            top bar of the screen. Questions in a Section can be
                            viewed by clicking on the name of that Section. The
                            Section you are currently viewing will be
                            highlighted.
                          </p>
                        </li>
                        <li>
                          <p>
                            After clicking the <b>Save &amp; Next</b> button for
                            the last question in a Section, you will
                            automatically be taken to the first question of the
                            next Section in sequence.
                          </p>
                        </li>
                        <li>
                          <p>
                            You can move the mouse cursor over the name of a
                            Section to view the answering status for that
                            Section.
                          </p>
                        </li>
                      </ol>
                    </div>
                    <div class="ct-inst-footer">
                      <div class="ct-inst-button">
                        <button
                          class="btn btn-mark btn-right"
                          type="button"
                          onClick={() => setReady(true)}
                        >
                          <strong>Next</strong>
                          <img src={forward} alt=">" width="25" height="18" />
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div class="ct-ins-right">
                <div class="ct-inst-profileimage">
                  <img src={TestProfile} alt="profile" />
                </div>
                <div class="ct-inst-profilename">{candidateName.name}</div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <PracticeQuestions />
      )}
    </>
  );
};

export default Instruction;
