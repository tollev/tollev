import "./styling/App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Timetable from "./components/Timetable";
import Tooltips from "./components/Tooltips";

function App() {
  return (
    <main className="App">
      <Header />

      <section className="welcome">
        <h1 id="headline">Tollev Sauar</h1>
        <h4 id="subheadline">(Under utvikling)</h4>
        <img src={require("./images/me.png")} alt="Me" className="Me" />
        <p className="intro">
          Velkommen til min nettside!
          <p>
            På denne nettsiden vil jeg legge til alle mulig slags ideer jeg får.
          </p>
        </p>
      </section>
      <Tooltips></Tooltips>
      <section className="timetableSection">
        <Timetable cName="test1" stopPlace="6274" name="St.Hanshaugen" />

        <Timetable cName="test2" stopPlace="59600" name="Forskningsparken" />
      </section>

      <div>.</div>
    </main>
  );
}

export default App;
