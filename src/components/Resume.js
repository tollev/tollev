// CV.js

import React from "react";
import "../styling/Resume.css";

function Resume() {
  return (
    <div className="cv-container">
      <h1 className="tittel">Curriculum Vitae</h1>
      <section className="section-with-image">
        <div className="text-and-image">
          <p>
            <strong className="ut">Addresse:</strong> Schwensens gate 16c, 0170
            Oslo <br />
            <strong className="ut">Telefon:</strong> 46778203 <br />
            <strong className="ut">Email:</strong> tollevsauar@gmail.com <br />
            <strong className="ut">Fødselsdato:</strong> 27.05.2001
          </p>
        </div>

        <img
          className="profilbilde"
          src={require("../images/profilbilde.jpeg")}
          alt="profilbilde"
        />
      </section>

      <section className="section">
        <h2>Nøkkelkvalifikasjoner</h2>
        <p>
          Tar for øyeblikket en master i Informatikk: Digital økonomi og ledelse
          på UiO. Parallellt med studiet har jeg hatt ulike deltidsstillinger.
          (se vedlegg om relevant erfaring). Har tilegnet praktisk erfaring i
          prosjektarbeid gjennom internships og emner på studiet. Har også tre
          semestre som gruppelærer under beltet.
        </p>
      </section>

      <section className="section">
        <h2>Utdanning</h2>
        <p>
          <strong className="ut">08.2020–06.2025</strong> Informatikk: digital
          økonomi og ledelse – UiO
          <br />
          Digital økonomi og ledelse er et tverrfaglig studium med en
          vektlegging innenfor informatikk. Det helhetlige målet er å bli
          teknologer som forstår kundens situasjon og behov.
          <br />
          De økonomi og ledelse-relaterte emnene er skreddersydde for studiet,
          med et fokus på teknologimarkedet. På bachelornivå får en dyp
          forståelse i informatikk, samt innsikt i regnskap, organisasjon og
          ledelse, markedsføring og strategi. Studiet gir også alle emner som
          kreves for en bachelor informatikk: programmering og systemarkitektur
          (utenom innføringsemnet logiske metoder). På masternivå går vi mer i
          dybden i digitale økosystemer og forretningsutvikling, samtidig som
          man har valget til å ta mer tekniske emner. Jeg har derfor valgt å ta
          fag om blant annet operativsystemer, frontend-utvikling og testing.
          <br />
          Programmeringsspråk jeg har vært innom er alt fra Python, Java, JS,
          TS, Kotlin, SQL, til Scheme, C og assembly.
          <br />I løpet av 4 år på Universitetet har jeg sanket inn masse
          erfaring med prosjektarbeid, som har gjort at jeg jobber godt i et
          team. Etter sommeren innebærer dette to internships, samt gjennom en
          håndfull emner på studiet.
        </p>
      </section>

      <section className="section">
        <h2> Jobberfaring</h2>
        <p>
          <strong className="ut">06.2024–08.2024</strong> Summer Internship,
          Bekk Consulting AS.
          <br /> Denne sommeren jobber jeg hos Bekk, og er utplassert hos Moller
          Mobility Group.
        </p>
        <p>
          <strong className="ut">01.2023–12.2023</strong> Digital Intern,
          Capient AS. <br />I 2023 hadde jeg en deltidsstilling som digital
          intern i Capient AS. Capient AS er en bedrift som hjelper børsnoterte
          selskaper med å kommunisere ut mot markedet. Min oppgave var å hjelpe
          til med at alt av tekniske ting fungerer, samt kontinuerlig se etter
          forbedringer på den digitale siden.
        </p>
        <p>
          <strong className="ut">06.2022–08.2022</strong> Summer Internship,
          Genus AS.
          <br />I fjor sommer jobbet jeg hos Genus, som er et mellomstort
          konsulentselskap med ca 100 ansatte som har utviklet en
          lavkodeplattform som brukes av konsulenter ut mot kundene. I sommer
          var vi en gruppe på 16 studenter, hvor jeg var en av seks som jobbet i
          R&D. Teamet mitt på tre jobbet frontend, hvor vi hovedsaklig brukte
          TypeScript og React. Her fikk jeg mer praktisk erfaring med å jobbe
          agilt i et team, og vi utnyttet oss av en form for scrumban. Den
          største utfordringen i løpet av sommeren var å bli kastet inn i en
          kodebase med en million kodelinjer i avansert og ukommentert
          TypeScript. Dette var dog svært lærerikt! <br />
          Jeg har referanser fra oppholdet, hvis dette skulle være ønskelig!
        </p>
        <p>
          <strong className="ut">01.2022–06.2024</strong> Gruppelærer, retter og
          eksamenssensor, Universitetet i Oslo <br />
          Jeg har i tre semestre jobbet som gruppelærer og retter i fagene
          IN1000 og IN1010;{" "}
          <a
            className="lenke"
            href="https://www.uio.no/studier/emner/matnat/ifi/IN1000/"
          >
            Introduksjon til objektorientert programmering - IN1000
          </a>
          , og{" "}
          <a
            className="lenke"
            href="https://www.uio.no/studier/emner/matnat/ifi/IN1010/"
          >
            Objektorientert programmering - IN1010
          </a>
          . Semestrene jeg har jobbet på UiO er vår- og høst 2022, samt vår
          2024. Dette vårsemesteret har jeg også tatt på meg
          administrasjonsansvar, samt rettet eksamener. Som gruppelærer holdt
          jeg seminarer for en fast gruppe studenter. Disse timene innebar
          gjerne undervisning; som regel felles, interaktiv gjennomgang av
          stoff. Parallelt med dette hjalp jeg studenter over mail, hjalp
          en-til-en og rettet obligatoriske innleveringer.
          <br />
        </p>
        <p>
          <strong className="ut">10.2021–07.2022</strong>{" "}
          Privatlærer/leksehjelp, MentorNorge AS. <br />
          Denne stillingen innebar en-til-en undervisning med barn og ungdom i
          både grunnskolen og videregående skole som ønsket hjelp i enten
          enkelte fag, eller generell leksehjelp.
        </p>
        <p>
          <strong className="ut">01.2010–08.2020</strong> Selger, Epleblomsten
          AS <br />
          Fra ung alder har jeg jobbet i familiebedriften Epleblomsten AS. Dette
          har innebåret alt fra pakking av Eplemost i fabrikken til å stå på
          stand for å selge eplemost, eksempelvis i forbindelse med Bondens
          marked. Har derfor mange år med erfaring med kundekontakt.
        </p>
      </section>

      <section className="section">
        <h2>Verv</h2>
        <p>
          <strong className="ut">06.2024–06.2026</strong> Styremedlem,
          Schwensens gate 16 Sameiet. <br />
          Ettersom karrieren med styreverv på studiene går mot slutten, har jeg
          meldt meg inn i styret i sameiet hvor jeg bor. Dette innebærer å delta
          i å drifte sameiet.
        </p>
        <p>
          <strong className="ut">08.2023–05.2024</strong> Nestleder, Digitus.{" "}
          <br />
          Dette var ikke helt ulikt vervet som styremedlem, men med et noe
          utvidet ansvar. Jeg har blant annet vært hovedansvarlig for den
          semesterlige temafesten for instituttet
        </p>
        <p>
          <strong className="ut">01.2023</strong> Intern, Dagen@ifi. <br />
          Dagen@ifi er en forening som arrangerer et stor karrieredag hvert
          semester på Instituttet for Informatikk. Dette innebærer at bedrifter
          har stands på dagen, og på kvelden blir det arrangert underholdning
          med kjente standupkomikere og artister. Jeg er med i
          arrangementgruppen, som har ansvar for underholdningen. Dette
          innebærer booking og oppfølging på selve dagen.
        </p>
        <p>
          <strong className="ut">09.2022</strong> Økonomiansvarlig, IFIPDL.{" "}
          <br />
          Ettersom padeltennis ikke har studentvennlige priser i Oslo, har jeg
          sammen med medstudenter startet opp en studentforening for
          padeltennis. Her arrangerer vi økter støttet av andre lønnsomme
          foreninger på instituttet. Jeg er økonomiansvarlig og har ansvar over
          alt som innebærer penger, samt mye annet.
        </p>
        <p>
          <strong className="ut">01.2022–06.2022</strong> Board Member, Digitus.{" "}
          <br />
          Våren 2023 var jeg styremedlem i linjeforeningen Digitus, hvor
          ansvarsområdet er ganske bredt. Jeg deltok hovedsaklig i diskusjoner
          om drifting av foreningen og planlegging av arrangementer. Jeg var
          blant annet hovedansvarlig for instituttets første ekte
          sommeravslutning, hvor arrangerte en helaften med båttur og nattklubb
          for 240 studenter.
        </p>
      </section>
    </div>
  );
}

export default Resume;
