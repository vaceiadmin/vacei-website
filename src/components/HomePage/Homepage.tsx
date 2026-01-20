import React from "react"
import { Hero } from "./Hero"
import DedicatedTeamSection from "../common/DedicatedTeamSection"
import FaqSection from "../common/FaqSection"

const HomePage = () => {
  return (
    <div>
      <Hero />
      <DedicatedTeamSection />
      <FaqSection />
    </div>
  )
}

export default HomePage