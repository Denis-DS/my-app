import React from "react";
import logoGit from "./logoGithub.svg";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

export default () => {
  const name = "John Doe";
  return (
    <div className="App">
      <Header name={name} />
      <div className="App-header">
        <Content name={name} />
        <div className="App-divLogo">
          <a
            className="App-link"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoGit} alt="logoGit" className="App-logo" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};
