"use client"

import Image from "next/image"
import HeroLeftPanel from "./HeroLeftPanel"
import HeroBackground from "../common/HeroBackground"

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1920px] px-4 lg:px-8 ">
        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8 justify-center">
          <div className="w-full lg:w-[1245px] max-w-full">
            <HeroBackground>
              <HeroLeftPanel />
            </HeroBackground>
          </div>

          <div className="relative w-full lg:w-[611px] h-[781px] rounded-[8px] overflow-hidden bg-[#D7DAFF]">
            {/* Ellipse background images - large to small to ensure visibility */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Image
                src="/assets/images/Ellipse 3.png"
                alt="Background circle large"
                width={550}
                height={550}
                className="absolute w-[550px] h-[550px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60"
                priority
              />
              <Image
                src="/assets/images/Ellipse 4.png"
                alt="Background circle medium"
                width={450}
                height={450}
                className="absolute w-[450px] h-[450px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70"
                priority
              />
              <Image
                src="/assets/images/Ellipse 5.png"
                alt="Background circle small"
                width={350}
                height={350}
                className="absolute w-[350px] h-[350px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80"
                priority
              />
            </div>

            <div className="relative z-10 flex flex-col w-full h-full px-5 pt-12 lg:px-8 max-w-[600px] mx-auto">
              <div className="flex gap-5 justify-between w-full">
                <div className="relative flex-1">
                  <Image
                    src="/assets/images/growyourevenew.png"
                    alt="Grow your revenue card"
                    width={275}
                    height={340}
                    className="w-full h-auto rounded-[24px] shadow-[0_18px_38px_rgba(59,73,230,0.15)] bg-white"
                    priority
                  />
                </div>

                <div className="relative flex-1 pt-6">
                  <Image
                    src="/assets/images/bookkeeping.png"
                    alt="Book keeping card"
                    width={275}
                    height={210}
                    className="w-full h-auto rounded-[24px] shadow-[0_18px_38px_rgba(59,73,230,0.15)] bg-white"
                    priority
                  />
                </div>
              </div>

              <div className="mt-8 relative w-full px-1">
                <Image
                  src="/assets/images/getcashflow.png"
                  alt="Get cashflow summary card"
                  width={540}
                  height={270}
                  className="w-full h-auto rounded-[24px] shadow-[0_20px_45px_rgba(59,73,230,0.15)] bg-white"
                  priority
                />
              </div>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[45%] z-20 w-[340px] lg:w-[380px] pointer-events-none">
              <Image
                src="/assets/images/helper.png"
                alt="Vacei specialist"
                priority
                className="h-auto w-full object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.25)]"
                width={380}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
