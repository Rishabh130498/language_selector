import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import UserCreate from "./UserCreate";
class App extends React.Component {
  state = { language: "English" };
  onLanguageSelect = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container ui segment">
        <div>
          <h4>Select a Language:</h4>
          <i
            className="flag us"
            onClick={() => {
              this.onLanguageSelect("English");
            }}
          />
          <i
            className="flag in"
            onClick={() => {
              this.onLanguageSelect("Hindi");
            }}
          />
        </div>
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
