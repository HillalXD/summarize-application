import React from "react";
import { icons, logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex flex-row justify-center items-center">
          <img
            src={icons}
            alt="sumz logo"
            className="w-11 object-contain h-11"
          />
          <h1 className="pl-2 font-satoshi font-bold">SummaryAI</h1>
        </div>

        <button
          type="button"
          onClick={() => window.open("https://github.com/HillalXD")}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Article
        <br />
        <span className="orange_gradient">with AI</span>
      </h1>
      <h2 className="desc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. empora
        provident sunt sapiente eos, blanditiis similique ab culpa velit
      </h2>
    </header>
  );
};

export default Hero;
