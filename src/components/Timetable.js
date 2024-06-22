import React from "react";
import { useState, useEffect } from "react";

function Timetable(props) {
  const query = `{
  stopPlace(id: "NSR:StopPlace:${props.stopPlace}") {
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
    <section>
      <h1 className="timetableHeader" >{props.name}</h1>
      <h4 className="timetableHeader2">Kommende avreiser</h4>
      <table className={props.cName}>
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
