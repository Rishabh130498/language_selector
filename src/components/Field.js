import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext; // when using this.context, we always have to use contextType = our context Object
  render() {
    const text = this.context === "English" ? "Name" : "नाम"; // other approach to get value out of context object is to use consumer function
    return (
      <div className="ui form">
        <div className="ui field">
          <label>{text}</label>
          <input className="input" />
        </div>
      </div>
    );
  }
}
export default Field;
