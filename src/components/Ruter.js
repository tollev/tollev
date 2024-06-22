import Timetable from "./Timetable"

function Ruter(){ 
    return (
      <div className="grid-container">
        <section className="timetableSection">
          <Timetable cName="test1" stopPlace="6274" name="St.Hanshaugen" />
        </section>
        <section className="timetableSection">
          <Timetable cName="test2" stopPlace="59600" name="Forskningsparken" />
        </section>
      </div>
    );
}

export default Ruter;
