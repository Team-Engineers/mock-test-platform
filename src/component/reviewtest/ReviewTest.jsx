import React from "react";

const ReviewTest = () => {
  return (
    <div style={{ paddingTop: "30px" }}>
      <section className="section-gap section-px-35">
        <div className="container-fluid">
          <div className="row ie-block">
            <div className="col-12 px-0">
              <div className="submit-screen w-100" id="testScreen">
                <div className="test-header clearfix mb-5 d-flex align-items-center justify-content-between">
                  <div className="float-left col-8 px-0">
                    <h3 className="fnt-24 fnt-bold m-0 d-inline-block mr-5">
                      SimCAT Zero Online
                    </h3>
                    <div
                      className="ui selection dropdown fnt-13 select-dropdown bordered-dropdown select-dropdown--test-module"
                      tabindex="0"
                    >
                      <input
                        type="hidden"
                        className="currentSectionName"
                        name="verbal ability &amp;amp; Reading Compehension"
                      />
                      <div className="default text txt-lightgray currentSectionName">
                        Verbal Ability
                      </div>
                      <i className="icon-down-open-mini drop-arrow"></i>
                      <div
                        className="menu menu--dropdown"
                        id="sectionblock"
                        tabindex="-1"
                      >
                        <div
                          className="item active"
                          data-value="3919"
                          id="section-3919"
                          onClick="ChangeSection(3919)"
                        >
                          Verbal Ability
                        </div>
                        <div
                          className="item"
                          data-value="3918"
                          id="section-3918"
                          onClick="ChangeSection(3918)"
                        >
                          Data Interpretation &amp; Logical Resoning
                        </div>
                        <div
                          className="item"
                          data-value="3917"
                          id="section-3917"
                          onClick="ChangeSection(3917)"
                        >
                          Quantitative Ability
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="float-right col-4 px-0 d-flex justify-content-end">
                    <div className="text-blk-pause clearfix">
                      <a
                        className="button button-secondary btn-view-summary bg-transparent m-0"
                        data-toggle="modal"
                        modal-target="#viewScoreCard"
                        style="display: block;"
                      >
                        View Scorecard
                      </a>
                      <div className="time-block float-right">
                        <span className="d-block txt-lightgray text-uppercase mb-0 text-right">
                          time taken
                        </span>
                        <span
                          className="d-block fnt-bold fnt-24 line-height-20"
                          id="timer"
                        >
                          00:29:52
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <form className="bg-white border-gray question-listheight">
                  <div className="col-12 p-0 d-flex clearfix">
                    <div className="col-9 float-left px-0 border-right">
                      <ul className="question-list-screens my-0 allTabsContainer px-0 tab-content">
                        <li
                          className="tab-container"
                          data-tab-index="0"
                          id="questionblock"
                          style={{ display: "block" }}
                        >
                          <div className="question-header border-bottom-gray py-30 d-flex align-items-center justify-content-between clearfix">
                            <h3 className="fnt-18 px-30 col-6 float-left m-0">
                              Question <span id="questionNo">1</span>/
                              <span id="questionLength">17</span>
                            </h3>
                            <p className="txt-lightgray col-3 pl-5 ml-3 mb-0 float-left">
                              Status:
                              <span className="ml-1 skipped-status" id="status">
                                Skipped
                              </span>
                              <span
                                className="unanswered-status"
                                id="try-again"
                                style={{ paddingLeft: "5%" }}
                              ></span>
                            </p>
                            <div className="col-2 pr-2">
                              <div
                                className="bookmark-shape ml-auto"
                                id="bookmark"
                                // onClick="bookmarkQuestion()"
                              ></div>
                            </div>
                          </div>
                          <div
                            className="progress-bar progress-bar--question m-0"
                            id="progress-bar"
                            style={{ width: "0%", height: "2px" }}
                            role="progressbar"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>

                          <div className="py-20">
                            <div className="col-12 d-flex clearfix pr-0">
                              <div className="col-6 pr-0 common_custom_scroll height-400">
                                <div className="testing">
                                  <b>
                                    <p
                                      className="txt-lightgray d-block mb-3"
                                      id="QPDirection"
                                    >
                                      <p>
                                        The passage given below is followed by a
                                        set of questions. Choose the most
                                        appropriate answer to each question.
                                      </p>
                                    </p>
                                  </b>
                                  <div id="PSGQuestion">
                                    <p>
                                      <span style={{ color: "windowtext" }}>
                                        <br />
                                      </span>
                                    </p>
                                    <p>
                                      <span style={{ color: "windowtext" }}>
                                        When Europeans, beginning with Columbus,
                                        entered the New World in the fifteenth
                                        and sixteenth centuries, there were a
                                        number of things they didn’t pause to
                                        appreciate before commencing with the
                                        pillaging. One is that they had happened
                                        upon a rare and precious natural
                                        experiment. The ancestor of native
                                        Americans had migrated from northeast
                                        Asia during the late Stone Age, the
                                        ‘Upper Paleolithic’. Then, around 10,000
                                        B.C., with the climate warming, the land
                                        they’d walked across was deluged by the
                                        Bering Sea. The Old World and the New
                                        World were now two distinct petri dishes
                                        for cultural evolution. Any basic trends
                                        inherent in the process should be
                                        evident in both.{" "}
                                      </span>
                                    </p>
                                    <p className="body">
                                      <span style={{ color: "windowtext" }}>
                                        &nbsp;
                                      </span>
                                    </p>
                                    <p className="body">
                                      <span style={{ color: "windowtext" }}>
                                        The experiment wasn’t perfect. Certainly
                                        by 2,000 B.C., and possibly earlier, the
                                        Eskimos (also known as the Inuit) had
                                        boats. Though paddling across the Bering
                                        Sea wasn’t the kind of thing you would
                                        do for weekend recreation, and travel
                                        from one Alaskan village to another was
                                        often arduous, there now existed the
                                        theoretical possibility for innovations
                                        to move glacially from Asia into North
                                        America. Still, for most of prehistory,
                                        cultural changes in the New World appear
                                        to have been indigenous, and even during
                                        the last few thousand years, contact
                                        with the Old World was tenuous. The two
                                        hemispheres, west and east, are the
                                        closest things to huge, independent
                                        examples of ongoing cultural change that
                                        this planet has to offer.
                                      </span>
                                    </p>
                                    <p className="body">
                                      <span style={{ color: "windowtext" }}>
                                        &nbsp;
                                      </span>
                                    </p>
                                    <p className="body">
                                      <span style={{ color: "windowtext" }}>
                                        There is one other reason that primitive
                                        American cultures are so enlightening.
                                        As of Columbus’s voyage, they had an
                                        advantage over primitive Eurasian
                                        societies as objects of study. Namely,
                                        they still existed; they had not been
                                        steamrolled by the expansion of Old
                                        World civilizations. And, though
                                        Columbus and other Europeans tried to
                                        make up for lost time with their own
                                        steamrolling, they were not wholly
                                        effective. Observed and recorded in the
                                        New World was an unprecedented array of
                                        cultures, with diverse technologies and
                                        social structures. From this diversity a
                                        few basic patterns emerge, patterns that
                                        turn out to be consistent with the
                                        archaeological remains of those
                                        steamrolled Old World cultures. Native
                                        American cultures thus offer unique
                                        evidence of the universal impetus toward
                                        cultural complexity.{" "}
                                      </span>
                                    </p>
                                  </div>
                                  <div className="question-show">
                                    <p
                                      className="txt-lightgray mb-3"
                                      id="essayleft"
                                    ></p>
                                    <div
                                      id="alpha-keyboard-review"
                                      style={{
                                        width: "100% !important",
                                        display: "none",
                                      }}
                                    ></div>
                                    <div
                                      className="options-lists"
                                      id="QPOptionsQuantitative"
                                      style={{ display: "none" }}
                                    ></div>
                                    <div
                                      className="show_in_input_questions"
                                      style={{ display: "none" }}
                                    >
                                      <a
                                        className="text-capitalize txt-blue c-pointer"
                                        id="see-answer-button-input"
                                        data-toggle="modal"
                                        // onClick="showAnswerInput()"
                                      >
                                        show answer
                                      </a>
                                      <a
                                        className="text-capitalize txt-blue c-pointer"
                                        id="hide-answer-button-input"
                                        style={{
                                          cursor: "pointer",
                                          display: "none",
                                        }}
                                        // onClick="hideAnswerInput()"
                                      >
                                        hide answer
                                      </a>
                                    </div>
                                    <div
                                      id="show_answer_in_input"
                                      style={{ display: "none" }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-6 pr-0 common_custom_scroll height-400">
                                <div className="testing">
                                  <p
                                    className=" mb-3"
                                    id="PSGTitle"
                                    style={{ display: "inline-block" }}
                                  >
                                    <p>
                                      &nbsp;What is the ‘natural experiment’ the
                                      author is talking about in this passage?
                                    </p>
                                  </p>
                                  <div
                                    className="options-lists"
                                    id="QPOptions_test_review"
                                    style={{ display: "block" }}
                                  >
                                    <div className="ui radio mcq-input-radio checkbox">
                                      <input
                                        className="option-input-color"
                                        type="radio"
                                        name="q-91272"
                                        id="option-391353"
                                        value="391353"
                                      />
                                      <label
                                        id="label-391353"
                                        for="option-391353"
                                        className="ims-radio-label options-list__item txt-lightgray mb-3"
                                      >
                                        <p>
                                          The independent cultural development
                                          of the Old World and the New
                                        </p>
                                      </label>
                                    </div>
                                    <div className="ui radio mcq-input-radio checkbox">
                                      <input
                                        className="option-input-color"
                                        type="radio"
                                        name="q-91272"
                                        id="option-391354"
                                        value="391354"
                                      />
                                      <label
                                        id="label-391354"
                                        for="option-391354"
                                        className="ims-radio-label options-list__item txt-lightgray mb-3"
                                      >
                                        <p>
                                          The cultures of the New World that
                                          were not affected by Old World
                                          civilizations
                                        </p>
                                      </label>
                                    </div>
                                    <div className="ui radio mcq-input-radio checkbox">
                                      <input
                                        className="option-input-color"
                                        type="radio"
                                        name="q-91272"
                                        id="option-391355"
                                        value="391355"
                                      />
                                      <label
                                        id="label-391355"
                                        for="option-391355"
                                        className="ims-radio-label options-list__item txt-lightgray mb-3"
                                      >
                                        <p>
                                          The migration of native Americans from
                                          northeast Asia thousands of years ago
                                        </p>
                                      </label>
                                    </div>
                                    <div className="ui radio mcq-input-radio checkbox">
                                      <input
                                        className="option-input-color"
                                        type="radio"
                                        name="q-91272"
                                        id="option-391356"
                                        value="391356"
                                      />
                                      <label
                                        id="label-391356"
                                        for="option-391356"
                                        className="ims-radio-label options-list__item txt-lightgray mb-3"
                                      >
                                        <p>
                                          The slow movement of innovations from
                                          Asia to North America from 2,000 B.C.
                                          onwards
                                        </p>
                                      </label>
                                    </div>
                                  </div>
                                  <a
                                    className="text-capitalize txt-blue c-pointer"
                                    id="see-answer-button1"
                                    data-toggle="modal"
                                    // onClick="showAnswer()"
                                    style={{ display: "inline-block" }}
                                  >
                                    show answer
                                  </a>
                                  <a
                                    className="text-capitalize txt-blue c-pointer"
                                    id="hide-answer-button1"
                                    style={{
                                      cursor: "pointer",
                                      display: "none",
                                    }}
                                    // onClick="hideAnswer()"
                                  >
                                    hide answer
                                  </a>

                                  <div
                                    id="alpha-keyboard-passage"
                                    style={{ width: "100% !important;" }}
                                  ></div>
                                  <div
                                    className="show_in_input_questions_passage"
                                    style={{ display: "none" }}
                                  >
                                    <a
                                      className="text-capitalize txt-blue c-pointer"
                                      id="see-answer-button-input-passage"
                                      data-toggle="modal"
                                      // onClick="showAnswerInputPassage()"
                                      style={{ display: "none" }}
                                    >
                                      show answer
                                    </a>
                                    <a
                                      className="text-capitalize txt-blue c-pointer"
                                      id="hide-answer-button-input-passage"
                                      style={{
                                        cursor: "pointer",
                                        display: "none",
                                      }}
                                      // onClick="hideAnswerInputPassage()"
                                    >
                                      hide answer
                                    </a>
                                  </div>
                                  <div
                                    id="show_answer_in_input_passage"
                                    style={{ display: "none" }}
                                  ></div>

                                  <div className="tab_class mt-2">
                                    <a
                                      className="p-3 pull-right text-capitalize txt-blue col-12 test-analyze explanaAnswers"
                                      href="javascript:void(0);"
                                      // onClick="switchVisible();"
                                    >
                                      Answer Explanation{" "}
                                      <i className="chevron right icon chevron-dropdown pull-right"></i>
                                    </a>
                                  </div>
                                  <div
                                    className="solution-showss"
                                    id="show_data_onClick"
                                    style={{ display: "none" }}
                                  >
                                    <div
                                      className="txt-lightgray mb-3"
                                      id="solution-show"
                                    >
                                      <p id="solution-video"></p>
                                      <p id="solution-content">
                                        <p className="mt-0 mb-3 text-capitalize">
                                          <b>Text Explanation</b>
                                        </p>
                                        <p>
                                          The author talks of [4] only as a
                                          ‘theoretical possibility’, not as
                                          something that actually happened. So
                                          it cannot be considered the ‘natural
                                          experiment’ in question. The author
                                          brings up New World cultures that were
                                          not affected by Old World
                                          civilizations only in the last
                                          paragraph, whereas he talks about the
                                          ‘natural experiment’ right from the
                                          beginning, so [2] is unlikely to be
                                          true. [3] is not the experiment in
                                          question, but rather the event that
                                          led up to it. The ‘natural experiment’
                                          that the author refers to in this
                                          passage is the following: ‘The Old
                                          World and the New World were now two
                                          distinct petri dishes for cultural
                                          evolution. Any basic trends inherent
                                          in the process should be evident in
                                          both.’ This is paraphrased in [1].
                                          Hence, [1].
                                        </p>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-3 float-right pr-0">
                      <div className="clearfix d-flex align-items-center">
                        <h6 className="fnt-14 float-left question_head_align">
                          QUESTION GRID{" "}
                        </h6>
                        <span className="information float-left">
                          <img
                            src="https://s3-ap-south-1.amazonaws.com/myims.imsindia.com/wp-content/themes/ims/img/info.png"
                            data-pagespeed-url-hash="2104497737"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                          <div className="tooltip tooltip--width-sm">
                            <div className="tooltip__arrow"></div>
                            <div className="clearfix">
                              <div className="tooltip__box tooltip__box--correct"></div>
                              <div className="tooltip__text">Correct</div>
                            </div>
                            <div className="clearfix">
                              <div className="tooltip__box tooltip__box--incorrect"></div>
                              <div className="tooltip__text">Incorrect</div>
                            </div>
                            <div className="clearfix">
                              <div className="tooltip__box tooltip__box--skipped"></div>
                              <div className="tooltip__text">Skipped</div>
                            </div>
                            <div className="clearfix">
                              <div className="tooltip__box tooltip__box--unanswered"></div>
                              <div className="tooltip__text">Unanswered</div>
                            </div>
                          </div>
                        </span>
                      </div>
                      <div
                        className="question-numbers-list position-relative"
                        id="questionpalt"
                      >
                        <ul
                          className="mb-0 d-flex flex-wrap btnpalt"
                          id="palt-panel"
                        >
                          <li
                            className="question-numbers-list__number tooltip__box--skipped"
                            id="qid-91272"
                            data-qid="91272"
                            // onClick="qPallet(91272)"
                          >
                            <div
                              className="question-bookmark "
                              id="bid-91272"
                            ></div>
                          </li>
                          <li
                            className="question-numbers-list__number tooltip__box--skipped"
                            id="qid-91273"
                            data-qid="91273"
                            // onClick="qPallet(91273)"
                          >
                            <div
                              className="question-bookmark "
                              id="bid-91273"
                            ></div>
                          </li>
                          <li
                            className="question-numbers-list__number tooltip__box--skipped"
                            id="qid-91288"
                            data-qid="91288"
                            // onClick="qPallet(91288)"
                          >
                            <div
                              className="question-bookmark question-bookmark--skipped"
                              id="bid-91288"
                            ></div>
                          </li>
                          <li
                            className="question-numbers-list__number tooltip__box--skipped"
                            id="qid-91274"
                            data-qid="91274"
                            // onClick="qPallet(91274)"
                          >
                            <div
                              className="question-bookmark question-bookmark--skipped"
                              id="bid-91274"
                            ></div>
                          </li>
                          <li
                            className="question-numbers-list__number tooltip-card__box--notvisited"
                            id="qid-91275"
                            data-qid="91275"
                            // onClick="qPallet(91275)"
                          >
                            <div
                              className="question-bookmark "
                              id="bid-91275"
                            ></div>
                          </li>
                          <li
                            className="question-numbers-list__number tooltip-card__box--notvisited"
                            id="qid-91276"
                            data-qid="91276"
                            // onClick="qPallet(91276)"
                          >
                            <div
                              className="question-bookmark "
                              id="bid-91276"
                            ></div>
                          </li>
                          <li
                            className="question-numbers-list__number tooltip-card__box--notvisited"
                            id="qid-91277"
                            data-qid="91277"
                            // onClick="qPallet(91277)"
                          >
                            <div
                              className="question-bookmark "
                              id="bid-91277"
                            ></div>
                          </li>
                          <li
                            className="question-numbers-list__number tooltip-card__box--notvisited"
                            id="qid-91278"
                            data-qid="91278"
                            // onClick="qPallet(91278)"
                          >
                            <div
                              className="question-bookmark "
                              id="bid-91278"
                            ></div>
                          </li>
                          <li
                            className="question-numbers-list__number tooltip-card__box--notvisited"
                            id="qid-91279"
                            data-qid="91279"
                            // onClick="qPallet(91279)"
                          >
                            <div
                              className="question-bookmark "
                              id="bid-91279"
                            ></div>
                          </li>
                          <li
                            className="question-numbers-list__number tooltip-card__box--notvisited"
                            id="qid-91280"
                            data-qid="91280"
                            // onClick="qPallet(91280)"
                          >
                            <div
                              className="question-bookmark question-bookmark--unanswered"
                              id="bid-91280"
                            ></div>
                          </li>
                          <li
                            className="question-numbers-list__number tooltip-card__box--notvisited"
                            id="qid-91281"
                            data-qid="91281"
                            // onClick="qPallet(91281)"
                          >
                            <div
                              className="question-bookmark "
                              id="bid-91281"
                            ></div>
                          </li>
                          <li
                            className="question-numbers-list__number tooltip-card__box--notvisited"
                            id="qid-91282"
                            data-qid="91282"
                            // onClick="qPallet(91282)"
                          >
                            <div
                              className="question-bookmark "
                              id="bid-91282"
                            ></div>
                          </li>
                          <li
                            className="question-numbers-list__number tooltip-card__box--notvisited"
                            id="qid-91283"
                            data-qid="91283"
                            // onClick="qPallet(91283)"
                          >
                            <div
                              className="question-bookmark "
                              id="bid-91283"
                            ></div>
                          </li>
                          <li
                            className="question-numbers-list__number tooltip-card__box--notvisited"
                            id="qid-91284"
                            data-qid="91284"
                            // onClick="qPallet(91284)"
                          >
                            <div
                              className="question-bookmark "
                              id="bid-91284"
                            ></div>
                          </li>
                          <li
                            className="question-numbers-list__number tooltip-card__box--notvisited"
                            id="qid-91285"
                            data-qid="91285"
                            // onClick="qPallet(91285)"
                          >
                            <div
                              className="question-bookmark "
                              id="bid-91285"
                            ></div>
                          </li>
                          <li
                            className="question-numbers-list__number tooltip-card__box--notvisited"
                            id="qid-91286"
                            data-qid="91286"
                            // onClick="qPallet(91286)"
                          >
                            <div
                              className="question-bookmark "
                              id="bid-91286"
                            ></div>
                          </li>
                          <li
                            className="question-numbers-list__number tooltip-card__box--notvisited"
                            id="qid-91287"
                            data-qid="91287"
                            // onClick="qPallet(91287)"
                          >
                            <div
                              className="question-bookmark question-bookmark--unanswered"
                              id="bid-91287"
                            ></div>
                          </li>
                        </ul>
                      </div>
                      <div className="question-status position-relative">
                        <div className="clearfix d-flex align-items-center">
                          <h6 className="fnt-14 float-left question_head_align">
                            QUESTION STATISTICS{" "}
                          </h6>
                          &nbsp;
                          <span className="float-left information tooltip-stats">
                            <img
                              src="https://s3-ap-south-1.amazonaws.com/myims.imsindia.com/wp-content/themes/ims/img/info.png"
                              data-pagespeed-url-hash="2104497737"
                              onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                            />
                          </span>
                        </div>
                        <div className="search-table-outter ">
                          <table className="ui table mb-3" id="q_stats_data">
                            <thead>
                              <tr>
                                <th></th>
                                <th className="text-center">You</th>
                                <th className="text-center">Overall</th>
                                <th className="text-center">Toppers'</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="color_class">
                                  <b>Attempts</b>
                                </td>
                                <td className="text-center">
                                  <i
                                    className="fa fa-minus"
                                    style={{ color: "#808080" }}
                                  ></i>
                                </td>
                                <td className="text-center">85.2%</td>
                                <td className="text-center">88.08%</td>
                              </tr>
                              <tr>
                                <td className="color_class">
                                  <b>Accuracy</b>
                                </td>
                                <td className="text-center">
                                  <i
                                    className="fa fa-minus"
                                    style={{ color: "#808080" }}
                                  ></i>
                                </td>
                                <td className="text-center">40.1%</td>
                                <td className="text-center">69.63%</td>
                              </tr>
                              <tr>
                                <td className="color_class">
                                  <b>Time</b>
                                </td>
                                <td className="text-center">29:52</td>
                                <td className="text-center">03:49</td>
                                <td className="text-center">03:37</td>
                              </tr>
                              <tr>
                                <td className="color_class">
                                  <b>P-value</b>
                                </td>
                                <td className="text-center">
                                  <i
                                    className="fa fa-minus"
                                    style={{ color: "#808080" }}
                                  ></i>
                                </td>
                                <td className="text-center">34.17</td>
                                <td className="text-center">61.33</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <span className="tooltiptext d-none">
                      <table className="topper-infos">
                        <tbody>
                          <tr>
                            <td
                              style={{
                                width: "25%",
                                verticalAlign: "top",
                                padding: "8px",
                              }}
                            >
                              <b>Overall Attempts (A)</b>
                            </td>
                            <td style={{ padding: "8px" }}>
                              {" "}
                              Total Number of Attempts/Total Number of
                              Test-Takers
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                width: "25%",
                                verticalAlign: "top",
                                padding: "8px",
                              }}
                            >
                              <b>Overall Accuracy (B)</b>
                            </td>
                            <td style={{ padding: "8px" }}>
                              {" "}
                              Number of Correct Attempts/ Total Number of
                              Attempts
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                width: "25%",
                                verticalAlign: "top",
                                padding: "8px",
                              }}
                            >
                              <b>Overall P-Value (A*B)</b>
                            </td>
                            <td style={{ padding: "8px" }}>
                              Number of Correct Attempts /Total number of
                              Test-takers
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                width: "25%",
                                verticalAlign: "top",
                                padding: "8px",
                              }}
                            >
                              <b>Toppers’ Statistics</b>
                            </td>
                            <td style={{ padding: "8px" }}>
                              {" "}
                              Statistics of test-takers who have scored the 90th
                              percentile and above in the section to which the
                              question belongs
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </span>
                  </div>
                  <div className="test-card-footer test-card-footer--fixed px-30 py-20 d-flex clearfix align-items-center">
                    <div className="col-6 float-left">
                      <div className="ui modal tiny" id="test-see-answer-popup">
                        <div className="popup-card">
                          <img
                            className="pd-3 mt-4"
                            src="https://s3-ap-south-1.amazonaws.com/myims.imsindia.com/wp-content/themes/ims/img/emaximiser/exclamation.png"
                            alt="!"
                            data-pagespeed-url-hash="3763573399"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                          <p className="fnt-16 p-4 mb-2 txt-lightgray">
                            You will not be able to attempt this question after
                            seeing the answer....{" "}
                          </p>
                          <label className="checkbox-container box-shadow-none fnt-14 w-75">
                            Don't show again.
                            <input type="checkbox" id="modalDontShow" />
                            <span className="checkbox--blue"></span>
                          </label>
                          <div className="mt-5 mb-3 actions">
                            <div
                              className="button positive button-primary mr-3 button--minwidth"
                              type="button"
                              // onClick="modalDontShow()"
                            >
                              Ok
                            </div>
                            <div
                              className="button deny button-secondary button--minwidth"
                              type="button"
                              data-dismiss="modal"
                            >
                              Cancel
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="ui modal tiny" id="view-solution-popup">
                        <div className="popup-card">
                          <img
                            className="pd-3 mt-4"
                            src="https://s3-ap-south-1.amazonaws.com/myims.imsindia.com/wp-content/themes/ims/img/emaximiser/exclamation.png"
                            alt="!"
                            data-pagespeed-url-hash="3763573399"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                          <p className="fnt-16 p-4 mb-2 txt-lightgray">
                            You will not be able to attempt this question after
                            seeing the answer....{" "}
                          </p>
                          <label className="checkbox-container box-shadow-none fnt-14 w-75">
                            Don't show again.
                            <input type="checkbox" id="modalDontShowVs" />
                            <span className="checkbox--blue"></span>
                          </label>
                          <div className="mt-5 mb-3 actions">
                            <div
                              className="button positive button-primary mr-3 button--minwidth"
                              type="button"
                              // onClick="modalDontShowVs()"
                            >
                              Ok
                            </div>
                            <div
                              className="button deny button-secondary button--minwidth"
                              type="button"
                              data-dismiss="modal"
                            >
                              Cancel
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="ui modal tiny"
                        id="analyze-popup-incorrect"
                        data-backdrop="static"
                      >
                        <div className="popup-card">
                          <div className="box-wrapper">
                            <h3 style={{ marginBottom: "6px" }}>
                              Analyze Question
                            </h3>
                            <p
                              className="txt-lightgray"
                              style={{ fontSize: "14px" }}
                            >
                              Score Improvement Analysis
                            </p>
                          </div>
                          <div className="test-review-analyze">
                            <div className="analyze-popup-incorrect-choices">
                              <label
                                className="checkbox-container box-shadow-none fnt-14"
                                style={{
                                  textAlign: "left",
                                  paddingBottom: "20px",
                                }}
                              >
                                Could have got it right{" "}
                                <input
                                  type="radio"
                                  name="incorrectoptions"
                                  value="Could have got it right"
                                />
                                <span className="checkbox--blue"></span>
                              </label>
                              <label
                                className="checkbox-container box-shadow-none fnt-14"
                                style={{
                                  textAlign: "left",
                                  paddingBottom: "20px",
                                }}
                              >
                                Should not have attempted{" "}
                                <input
                                  type="radio"
                                  name="incorrectoptions"
                                  value="Should not have attempted"
                                />
                                <span className="checkbox--blue"></span>
                              </label>
                              <label
                                className="checkbox-container box-shadow-none fnt-14"
                                style={{
                                  textAlign: "left",
                                  paddingBottom: "20px",
                                }}
                              >
                                This was a guess{" "}
                                <input
                                  type="radio"
                                  name="incorrectoptions"
                                  value="This was a guess"
                                />
                                <span className="checkbox--blue"></span>
                              </label>
                            </div>
                            <p className="txt-lightgray text-left">
                              What went wrong
                            </p>
                            <div className="analyze-popup-incorrect-choices">
                              <div
                                className="ui selection dropdown fnt-13 select-dropdown bordered-dropdown w-100"
                                tabindex="0"
                              >
                                <input
                                  type="hidden"
                                  name="whatwentwrong"
                                  value="Select Reason"
                                />
                                <div className="default text txt-clr-black">
                                  Select Reason
                                </div>
                                <i className="icon-down-open-mini drop-arrow"></i>
                                <div
                                  className="menu menu--dropdown"
                                  tabindex="-1"
                                >
                                  <div
                                    className="item dropdownselectval"
                                    data-value="Misread"
                                  >
                                    Misread
                                  </div>
                                  <div
                                    className="item dropdownselectval"
                                    data-value="Misjudged"
                                  >
                                    Misjudged
                                  </div>
                                  <div
                                    className="item dropdownselectval"
                                    data-value="Miscalculated"
                                  >
                                    Miscalculated
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="mt-5"
                              id="incorrectErr"
                              style="display: none;"
                            >
                              Oops! Looks like you have missed out some values!
                            </div>
                            <div className="mt-5 mb-3 actions">
                              <div
                                className="button done button-primary mr-3 button--minwidth"
                                type="button"
                                // onClick="analyzeIncorrectForm()"
                              >
                                Done
                              </div>
                              <div
                                className="button deny analyzeCancel button-secondary button--minwidth"
                                type="button"
                                data-dismiss="modal"
                              >
                                Cancel
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="ui modal tiny" id="analyze-popup-correct">
                        <div className="popup-card">
                          <div className="box-wrapper">
                            <h3 style="margin-bottom: 6px;">
                              Analyze Question
                            </h3>
                            <p
                              className="txt-lightgray"
                              style="font-size: 14px;"
                            >
                              Score Improvement Analysis
                            </p>
                          </div>
                          <div className="test-review-analyze">
                            <div className="analyze-popup-correct-choices">
                              <label
                                className="checkbox-container box-shadow-none fnt-14"
                                style={{
                                  textAlign: "left",
                                  paddingBottom: "20px",
                                }}
                              >
                                This was a guess{" "}
                                <input
                                  type="radio"
                                  name="correctoptions"
                                  value="This was a guess"
                                />
                                <span className="checkbox--blue"></span>
                              </label>
                            </div>
                            <div
                              className="mt-5"
                              id="correctErr"
                              style="display: none;"
                            >
                              Oops! Looks like you have missed out some values!
                            </div>
                            <div className="mt-5 mb-3 actions">
                              <div
                                className="button done button-primary mr-3 button--minwidth"
                                type="button"
                                // onClick="analyzeCorrectForm()"
                              >
                                Done
                              </div>
                              <div
                                className="button deny analyzeCancel button-secondary button--minwidth"
                                type="button"
                                data-dismiss="modal"
                              >
                                Cancel
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        className="p-3 pull-right text-capitalize txt-blue test-analyze analyse_btn_align"
                        // onClick="analyzePopup()"
                        data-toggle="modal"
                        modal-target="#correct-popup"
                      >
                        Analyze Question
                      </a>
                      <a
                        className="p-3 pull-right text-capitalize txt-blue d-none cerebrybtn test-analyze analyse_btn_align"
                        data-classcode=""
                        data-questionid=""
                        data-stdmpin="ims0001042870"
                        // onClick="fetchCerebry()"
                      >
                        Practise Similar Questions
                      </a>
                    </div>
                    <div className="col-6 float-left text-right px-0 btn-navigate">
                      <div
                        className="button button-secondary mr-3 ml-3 text-capitalize"
                        type="button"
                        id="back"
                        // onClick="prevQuestion()"
                        style="display: none;"
                      >
                        back
                      </div>
                      <div
                        className="button button-secondary text-capitalize m-0"
                        type="button"
                        id="next"
                        // onClick="nextQuestion()"
                      >
                        next
                      </div>
                    </div>
                  </div>
                  <div className="ui modal tiny" id="test-viewsummary">
                    <div className="text-center pb-5">
                      <h3 className="fnt-18 fnt-bold border-bottom-gray p-4">
                        Plotting Summary
                      </h3>
                      <div className="w-75 d-flex margin-auto pt-4 flex-wrap">
                        <div className="w-50 border-right-gray border-bottom-gray">
                          <img
                            className="mb-3"
                            src="https://s3-ap-south-1.amazonaws.com/myims.imsindia.com/wp-content/themes/ims/img/emaximiser/correct.png"
                            alt="!"
                            data-pagespeed-url-hash="3269737852"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                          <p className="fnt-14 txt-lightgray mb-1">
                            Correct Answers
                          </p>
                          <p className="fnt-16 fnt-bold mb-3">17/36</p>
                        </div>
                        <div className="w-50 border-bottom-gray">
                          <img
                            className="mb-3"
                            src="https://s3-ap-south-1.amazonaws.com/myims.imsindia.com/wp-content/themes/ims/img/emaximiser/skipped.png"
                            alt="!"
                            data-pagespeed-url-hash="2990932970"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                          <p className="fnt-14 txt-lightgray mb-1">
                            Skipped Answers
                          </p>
                          <p className="fnt-16 fnt-bold mb-3">17/36</p>
                        </div>
                        <div className="w-50 border-right-gray pt-4">
                          <img
                            className="mb-3"
                            src="https://s3-ap-south-1.amazonaws.com/myims.imsindia.com/wp-content/themes/ims/img/emaximiser/correct.png"
                            alt="!"
                            data-pagespeed-url-hash="3269737852"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                          <p className="fnt-14 txt-lightgray mb-1">Score</p>
                          <p className="fnt-16 fnt-bold mb-3">90</p>
                        </div>
                        <div className="w-50 pt-4">
                          <img
                            className="mb-3"
                            src="https://s3-ap-south-1.amazonaws.com/myims.imsindia.com/wp-content/themes/ims/img/emaximiser/skipped.png"
                            alt="!"
                            data-pagespeed-url-hash="2990932970"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                          <p className="fnt-14 txt-lightgray mb-1">Accuracy</p>
                          <p className="fnt-16 fnt-bold mb-3">88.88%</p>
                        </div>
                      </div>
                      <div className="actions">
                        <div className="button-cross deny">x</div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ui modal small tiny text-center" id="viewScoreCard">
        <div className="header p-30 text-capitalize">SimCAT Zero Online</div>
        <div className="summary-top-block table_bg_color">
          <table className="ui table table--analytics mt-0">
            <thead>
              <tr className="text-center">
                <th></th>
                <th>ATTEMPTS</th>
                <th>CORRECT</th>
                <th>SCORE</th>
              </tr>
            </thead>
            <tbody id="view_scorecard">
              <tr>
                <td>Quantitative Ability</td>
                <td className="text-center">1</td>
                <td className="text-center">0</td>
                <td className="text-center">-1</td>
              </tr>
              <tr>
                <td>Data Interpretation &amp; Logical Resoning</td>
                <td className="text-center">3</td>
                <td className="text-center">0</td>
                <td className="text-center">-2</td>
              </tr>
              <tr>
                <td>Verbal Ability</td>
                <td className="text-center">0</td>
                <td className="text-center">0</td>
                <td className="text-center">0</td>
              </tr>
              <tr>
                <td>
                  <b>Overall</b>
                </td>
                <td className="text-center">
                  <b>4</b>
                </td>
                <td className="text-center">
                  <b>0</b>
                </td>
                <td className="text-center">
                  <b>-3.00</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="actions border-0 p-0">
          <div className="button-cross deny">x</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewTest;
