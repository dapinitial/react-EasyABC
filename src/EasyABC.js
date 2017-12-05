import React, { Component } from "react";

class EasyABC extends Component {
  render() {
    return (
      <div className="game">
        <div className="option">
          <div className="fields">
            <div className="field-block">A</div>
          </div>
          <div className="buttons">
            <a href="#" className="button previous">
              Previous
            </a>
            <a href="#" className="button sound">
              Play Sound Again
            </a>
            <a href="#" className="button next">
              Next
            </a>
          </div>
          <div className="fields">
            <div className="field-block">
              <div className="left-field">B</div>
              <div className="right-field">C</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EasyABC;
