import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;
  render() {
    const text = this.context === "English" ? "Name" : "नाम";
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
