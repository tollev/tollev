import "./App.css";
import React, { Component } from "react";
import Header from "./Header";

function App() {
  return (
    <main className="App">
      <Header />

      <section className="welcome">
        <h1 id="headline">Tollev Sauar</h1>
        <h5 id="subheadline">Her kommer snart CVen min!</h5>
        <img src={require("./me.png")} alt="Me" className="Me" />
        <p className="intro">
          Masterstudent på linja informatikk: digital økonomi og ledelse på UiO.
          Parallelt med studie jobber jeg deltid som digital intern hos capient.
        </p>
      </section>

      <p className="digok">
        Digital økonomi og ledelse er et tverrfalig studium med en vektlegging
        innenfor informatikk. Det helhetlige målet er å bli teknologer som
        forstår kundens behov.
      </p>
      {/* <section class="grid-container">
        <div class="grid-item">Har </div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
      </section> */}
    </main>
  );
}

export default App;
