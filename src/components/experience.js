import React from "react"
import Card from "./card"

export default function Experience() {
  const teaching = [
    "CPSC 221: Basic Data Structures and Algorithms",
    "CPSC 121:  Models of Computation",
    "Assist the course instructors and team and conduct labs, tutorials",
    "Help students fully understand the fundamentals of course materials",
  ]
  const jumpstart = [
    "Organized virtual activities and events for orientation week",
    "Conducted bi-weekly meetups, personal check-ins and support for a group of 30 students",
  ]

  const best = [
    "Create a cross-platform app in Python and JavaScript using Flask and Node",
    "Implement functionalities to communicate with the EEG headset and Machine learning models",
    "Develop a UI with the client’s need and capabilities in mind",
  ]
  return (
    <div id="experience">
      <h1> Experience </h1>{" "}
      <Card
        title="Teaching Assistant"
        date="Sep 2020 - Present"
        loc="University of British Columbia"
        img="UBCblue.jpg"
        items={teaching}
      />{" "}
      <p className="bonus">
        Being a teaching assistant was one of the most gratifying jobs I 've
        had. To get a chance to work with your professors and also get a glimse
        into behind the scenes.If you 're curious about it, I say give it try.{" "}
      </p>{" "}
      <Card
        title="App Developer"
        date="Mar 2021 - Present"
        img="BEST.png"
        loc="UBC Biomedical Student Engineering Team"
        items={best}
      />{" "}
      <Card
        title="Jump Start Orientation and Transition Leader"
        date="Aug 2020 - Apr 2021"
        loc="University of British Columbia"
        img="UBCblue.jpg"
        items={jumpstart}
      />{" "}
      <p className="bonus">
        I think in tech, social skills are somewhat overlooked.I met the best
        people and got to imporve my leadership and social skills.{" "}
      </p>{" "}
    </div>
  )
}
