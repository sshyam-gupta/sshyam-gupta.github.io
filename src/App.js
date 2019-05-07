import React, { Component } from "react";
import Typist from "react-typist";
import "./App.css";
import Configs from "./configurations.json";
import SocialIcon from "./components/SocialIcon";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Particles from "react-particles-js";
import particles_json from './particles.json';

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
          "linear-gradient(-45deg, #04619F, #000000)",
        backgroundSize: "400% 400%"
      };
    }
  };

  render() {
    return (
      <div className="gradient" style={this.prepareGradientStyleSheets()}>
        <Particles params={particles_json} style={{ position: 'absolute', zIndex: 1 }} />
        <main className="App-main">
          <h1 className="intro">{Configs.devIntro}</h1>
          <div className="tagline">
            <Typist cursor={{ hideWhenDone: true }}>{Configs.devDesc}</Typist>
          </div>
          <div className="icons-social">
            <SocialIcon
              url="https://github.com/sshyam-gupta"
              icon={() => <FaGithub />}
              name={"github"}
            />
            <SocialIcon
              url="mailto:shyamm@outlook.com"
              icon={() => <MdEmail />}
              name={"email"}
            />
            <SocialIcon
              url="https://www.facebook.com/shyamm06"
              icon={() => <FaFacebookF />}
              name={"facebook"}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/shyam-gupta-66463a62"
              icon={() => <FaLinkedin />}
              name={"linkedin"}
            />
            <SocialIcon
              url="https://twitter.com/shyamm06"
              icon={() => <FaTwitter />}
              name={"twitter"}
            />
            <SocialIcon
              url="https://www.instagram.com/shyamm06"
              icon={() => <FaInstagram />}
              name={"instagram"}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
