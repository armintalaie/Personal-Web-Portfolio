import React from "react"
import Card from "./card"

export default function About() {
  const edu = [
    "2020 Dean of Science Scholarship - 2020 Trek Excellence Scholarship",
    "Science Scholar and Dean's Honour List standing for 2019-2020 session",
  ]
  return (
    <div id="education">
      <h1> Education </h1>{" "}
      <Card
        title="Bachelor of Science, Computer Science"
        date="Sep 2019 - Present"
        img="UBCblue.jpg"
        loc="University of British Columbia"
        items={edu}
      />{" "}
      <p className="bonus">
        It took me some time to figure out what I want and get a hang of
        Computer Science. If you want to chat about it, shoot me an email{" "}
      </p>{" "}
    </div>
  )
}
