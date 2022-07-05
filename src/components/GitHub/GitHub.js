import React from "react";
import "./GitHub.css";
import profil from "../../profil.jpeg";
import github from "../../svg/github.svg";
import twitter from "../../svg/twitter.svg";
import instagram from "../../svg/instagram.svg";
import facebook from "../../svg/facebook.svg";

function GitHub({ name }) {
  return (
    <div>
      <img className="github" src={profil} alt="profil" width="200px"></img>
      <br />
      <hr />
      <h3 style={{ color: "green" }}>You are all welcome!</h3>
      <h4 style={{ color: "silver" }}>
        You can reach me at the links below. 👇
      </h4>
      <br />
      <div className="social">
        <a href="https://github.com/huseyinbattal" target="blank">
          <button className="icon">
            {" "}
            <img width={"50px"} src={github} alt="github" />
          </button>
        </a>
        <a href="https://twitter.com/hsyn_bttl" target="blank">
          <button className="icon">
            {" "}
            <img width={"50px"} src={twitter} alt="github" />
          </button>
        </a>
        <a href="https://www.instagram.com/hsyn_battal/" target="blank">
          <button className="icon">
            {" "}
            <img width={"50px"} src={instagram} alt="github" />
          </button>
        </a>
        <a href="https://www.facebook.com/hsynbattal" target="blank">
          <button className="icon">
            {" "}
            <img width={"50px"} src={facebook} alt="github" />
          </button>
        </a>
      </div>
      <a className="link" href="https://huseyinbattal.online/" target="blank">
        <p>www.huseyinbattal.online</p>
      </a>
    </div>
  );
}

export default GitHub;
