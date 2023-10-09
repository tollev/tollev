import React from "react";
import { useState, useEffect } from "react";

const query = `{
  stopPlace(id: "NSR:StopPlace:6274") {
    name
    id
    estimatedCalls(numberOfDepartures: 5) {
      expectedDepartureTime
      aimedDepartureTime
      destinationDisplay {
        frontText
      }
      serviceJourney {
        line {
          publicCode
          transportMode
        }
      }
    }
  }
}
`;
function Timetable() {
  const [enTurData, setEnTurData] = useState();

  function getEnturData() {
    fetch("https://api.entur.io/journey-planner/v2/graphql", {
      method: "POST",
      headers: {
        // Replace this with your own client name:
        "ET-Client-Name": "tollev-tollev",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((stopPlaceData) => setEnTurData(stopPlaceData));
  }

  useEffect(() => {
    getEnturData();
  }, []);

  return (
    <section className="timetable">
      <h1 className="timetableHeader">St. Hanshaugen</h1>
      <h4 className="timetableHeader2">Kommende busser</h4>
      <table>
        <thead>
          <tr>
            <th>Rute</th>
            <th>Avreise</th>
          </tr>
        </thead>
        <tbody>
          {enTurData &&
            enTurData.data.stopPlace.estimatedCalls.map((call, index) => {
              var dato = new Date(call.expectedDepartureTime);

              var nå = new Date();
              var millisekunderTilTidspunkt = dato - nå;
              var minutterTilTidspunkt = Math.floor(
                millisekunderTilTidspunkt / (1000 * 60)
              );

              if (minutterTilTidspunkt < 1) {
                minutterTilTidspunkt = "nå";
              } else {
                minutterTilTidspunkt = minutterTilTidspunkt + " min";
              }
              return (
                <tr key={index}>
                  <td>
                    {call.serviceJourney.line.publicCode +
                      " " +
                      call.destinationDisplay.frontText}
                  </td>
                  <td>{minutterTilTidspunkt}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
}

export default Timetable;
