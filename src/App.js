import "./styling/App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Timetable from "./components/Timetable";
import Tooltips from "./components/Tooltips";
import { useState } from "react";
import Main from "./components/Main";
import Ruter from "./components/Ruter";

function App() {
  const [activePage, setActivePage] = useState("Main");

  function activePageHandler(page) {
    setActivePage(page);
  }

  return (
    <main className="App">
      <Header 
        activePage={activePage} 
        activePageHandler={activePageHandler} 
      />
      <div className="Pagehandler">
        {activePage === "Main" && <Main />}
        {activePage === "Ruter" && <Ruter />}
      </div>
    </main>
  );
}

export default App;



      // <section className="welcome">
      //   <h1 id="headline">Tollev Sauar</h1>
      //   <h4 id="subheadline">Student på IFI ved UiO</h4>
      //   <img src={require("./images/me.png")} alt="Me" className="Me" />
      //   <p className="intro">
      //     Velkommen til min nettside!
      //     <p>
      //       På denne nettsiden vil jeg legge til alle mulig slags ideer jeg får.
      //     </p>
      //   </p>
      // </section>
      // <Tooltips></Tooltips>
      // {/* <section className="timetableSection">
      //   <Timetable cName="test1" stopPlace="6274" name="St.Hanshaugen" />
      //   <Timetable cName="test2" stopPlace="59600" name="Forskningsparken" />
      // </section> */}

      // <div>.</div>