import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import UserCreate from "./UserCreate";
class App extends React.Component {
  state = { language: "English", color: "Red" };
  onFlagSelect = (language, color) => {
    this.setState({ language, color });
  };

  render() {
    return (
      <div className="ui container ui segment">
        <div>
          <h4>Select a Language:</h4>
          <i
            className="flag us"
            onClick={() => {
              this.onFlagSelect("English", "red");
            }}
          />
          <i
            className="flag in"
            onClick={() => {
              this.onFlagSelect("Hindi", "green");
            }}
          />
        </div>
        <ColorContext.Provider value={this.state.color}>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
