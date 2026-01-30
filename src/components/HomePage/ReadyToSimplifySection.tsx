import React from "react"
import GradientContainer from "../common/GradientContainer"
import GetInstantQuoteButton from "../common/GetInstantQuoteButton"
import TextAnimation from "../common/TextAnimation"

const ReadyToSimplifySection = () => {
  return (
    <section className="w-full py-5 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <GradientContainer
          className="rounded-xl bg-footer-hero px-6 py-10 sm:px-10 sm:py-12"
          showRadials={false}
        >
          <div className="flex flex-col items-center text-center text-white">
            <TextAnimation
              text="Ready to simplify how your business operates?"
              as="h2"
              className="max-w-3xl text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl"
            />
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <GetInstantQuoteButton
                text="Get Instant Quote"
                className="px-6 py-2.5 text-sm sm:text-[15px]"
                hasShadow={true}
              />
              <GetInstantQuoteButton
                variant="custom"
                text="Request a Service"
                href="/services"
                bgColor="var(--card-bg)"
                textColor="white"
                className="border-2 border-white/20 px-6 py-2.5 text-sm sm:text-[15px] hover:bg-white/10"
                hasShadow={false}
              />
            </div>
          </div>
        </GradientContainer>
      </div>
    </section>
  )
}

export default ReadyToSimplifySection

