import React, { Component } from "react";
import Typist from "react-typist";
import "./App.css";
import Configs from "./configurations.json";
import SocialIcon from "./components/SocialIcon";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

class App extends Component {
  prepareGradientStyleSheets = () => {
    if (Configs.gradientColors) {
      return {
        background: "linear-gradient(-45deg, " + Configs.gradientColors + ")",
        backgroundSize: "400% 400%"
      };
    } else {
      return {
        background:
          "linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)",
        backgroundSize: "400% 400%"
      };
    }
  };

  render() {
    return (
      <div className="gradient" style={this.prepareGradientStyleSheets()}>
        <main className="App-main">
          <h1 className="intro">{Configs.devIntro}</h1>
          <div className="tagline">
            <Typist cursor={{ hideWhenDone: true }}>{Configs.devDesc}</Typist>
          </div>
          <div className="icons-social">
            <SocialIcon
              url="https://github.com/sshyam-gupta"
              icon={() => <FaGithub />}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/shyam-gupta-66463a62"
              icon={() => <FaLinkedin />}
            />
            <SocialIcon
              url="https://twitter.com/shyamm06"
              icon={() => <FaTwitter />}
            />
            <SocialIcon
              url="https://www.instagram.com/shyamm06"
              icon={() => <FaInstagram />}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
