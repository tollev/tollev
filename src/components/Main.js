import "../styling/Main.css";
import React, { Component } from "react";
import Header from "./Header";
import Timetable from "./Timetable";
import Tooltips from "./Tooltips";

function Main() {

  return (
    <section className="Main">
      <section className="welcome">
        <h1 id="headline">Tollev Sauar</h1>
        <h4 id="subheadline">Student på IFI ved UiO</h4>
        <img src={require("../images/me.png")} alt="Me" className="Me" />
        <p className="intro">
          Velkommen til min nettside!
          <p>
            På denne nettsiden vil jeg legge til alle ideer jeg får.
          </p>
        </p>
      </section>
      <Tooltips></Tooltips>
    </section>
  );
}

export default Main;
