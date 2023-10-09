import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Timetable from "./components/Timetable";

function App() {
  return (
    <main className="App">
      <Header />

      <section className="welcome">
        <h1 id="headline">Tollev Sauar</h1>
        <h4 id="subheadline">(Under utvikling)</h4>
        <img src={require("./images/me.png")} alt="Me" className="Me" />
        <p className="intro">
          Masterstudent på linja informatikk: digital økonomi og ledelse på UiO.
          Parallelt med studiet jobber jeg deltid som digital intern hos
          capient.
        </p>
      </section>

      <p className="digok">
        Digital økonomi og ledelse er et tverrfalig studium med en vektlegging
        innenfor informatikk. Det helhetlige målet er å bli teknologer som
        forstår kundens behov.
      </p>

      <Timetable />
      <div>.</div>
    </main>
  );
}

export default App;
