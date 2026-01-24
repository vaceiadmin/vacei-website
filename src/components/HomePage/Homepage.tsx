import React from "react"
import ReadyToSimplifySection from "./ReadyToSimplifySection"
import ServicesSection from "./ServicesSection"
import ProcessStepsSection from "./ProcessStepsSection"
import CompanySetupSection from "./CompanySetupSection"
import FaqSection from "./FaqSection"
import HeroSection from "./HeroSection"
import PortalFeature from "./PortalFeature"
import HowItWorks from "./HowItWorks"

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <ProcessStepsSection />

      <PortalFeature />
      <ReadyToSimplifySection />
      <ServicesSection />
      <CompanySetupSection />
      <FaqSection />
    </div>
  )
}

export default HomePage