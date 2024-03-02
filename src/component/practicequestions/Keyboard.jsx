import React from "react";
import "./question.css";

const Keyboard = () => {
  return (
    <div>
      <span style={{ color: "#000000" }}>
        <input type="text" id="text-168171699415117" name="q-168171699415117" />
      </span>
      <div className="keyboard ">
        <div className="keyitems">
          <span role="presenation" className="backspace">
            Backspace
          </span>
        </div>
        <div className="keyitems">
          <span role="presenation" className="keyItem">
            7
          </span>
          <span role="presenation" className="keyItem">
            8
          </span>
          <span role="presenation" className="keyItem">
            9
          </span>
        </div>
        <div className="keyitems">
          <span role="presenation" className="keyItem">
            4
          </span>
          <span role="presenation" className="keyItem">
            5
          </span>
          <span role="presenation" className="keyItem">
            6
          </span>
        </div>
        <div className="keyitems">
          <span role="presenation" className="keyItem">
            1
          </span>
          <span role="presenation" className="keyItem">
            2
          </span>
          <span role="presenation" className="keyItem">
            3
          </span>
        </div>
        <div className="keyitems">
          <span role="presenation" className="keyItem">
            0
          </span>
          <span role="presenation" className="keyItem">
            .
          </span>
          <span role="presenation" className="keyItem">
            -
          </span>
        </div>
        <div className="keyitems">
          <span role="presenation" className="specialKey">
            ←
          </span>
          <span role="presenation" className="specialKey">
            →
          </span>
        </div>
        <div className="keyitems">
          <span role="presenation" className="clearall">
            Clear All
          </span>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
