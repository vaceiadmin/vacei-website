"use client"

import { useState } from "react"
import Image from "next/image"

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const items = [
    {
      title: "Clarity",
      desc: "Clear pricing, structured workflows and full visibility",
    },
    { title: "Speed", desc: "Fast turnaround times and quick communication." },
    {
      title: "Accountability",
      desc: "We take ownership of our work and results.",
    },
    { title: "Structure", desc: "Organized processes for maximum efficiency." },
  ]

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full bg-[#171A3E] py-20 pb-32">
      <div className="mx-auto max-w-[1100px] px-4">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
          {/* Left: Interactive Image Area */}
          <div className="relative flex-1 py-10">
            {/* Main square background container */}
            <div className="relative mx-auto h-[500px] w-full max-w-[460px] rounded-[48px] bg-[#D0D4F4]">
              {/* Ripple Background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-60 overflow-hidden rounded-[48px]">
                <Image
                  src="/assets/images/Vector (1).png"
                  alt="Background pattern"
                  width={600}
                  height={600}
                  className="scale-[1.5] object-cover mix-blend-multiply opacity-50"
                  priority
                />
              </div>

              {/* Man Image - Increased size and breaking out of container */}
              <div className="absolute bottom-0 left-1/2 flex w-[140%] -translate-x-1/2 justify-center items-end z-10 pointer-events-none">
                <Image
                  src="/assets/images/man 2.png"
                  alt="Professional"
                  width={600}
                  height={750}
                  className="w-[480px] max-w-none object-contain translate-y-4"
                  priority
                />
              </div>

              {/* Floating Cards Layer */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                {/* Financial Overview - Moved left to clear face */}
                <div className="absolute -left-12 top-10 w-[240px] rounded-[24px] bg-white p-5 shadow-[0_20px_40px_rgba(23,26,62,0.15)] pointer-events-auto transition-transform hover:scale-105">
                  <div className="mb-4 text-[12px] font-bold text-[#171A3E]">
                    Financial Overview
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171A3E] text-white shadow-md">
                        <svg
                          width="14"
                          height="14"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-[#171A3E]">
                          Total Asset
                        </p>
                        <p className="text-[9px] text-gray-400">
                          Jan 2026 (Balance Sheet)
                        </p>
                        <p className="mt-0.5 text-[11px] font-extrabold text-[#171A3E]">
                          € 23,691.29{" "}
                          <span className="ml-1 text-[9px] font-medium text-green-500">
                            0% vs last month
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171A3E] text-white shadow-md">
                        <svg
                          width="14"
                          height="14"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-[#171A3E]">
                          Cash at End of Perio..
                        </p>
                        <p className="text-[9px] text-gray-400">
                          Jan 2026 (Cash Flow)
                        </p>
                        <p className="mt-0.5 text-[11px] font-extrabold text-[#171A3E]">
                          € 8,232.61{" "}
                          <span className="ml-1 text-[9px] font-medium text-green-500">
                            0% vs last month
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Get Started Card */}
                <div className="absolute -bottom-8 -left-8 w-[200px] rounded-[24px] bg-[#6F74B8] p-6 text-white shadow-[0_24px_50px_rgba(0,0,0,0.2)] pointer-events-auto transition-transform hover:scale-105">
                  <p className="text-[16px] font-bold leading-tight tracking-wide">
                    Get Started
                    <br />
                    Free Call?
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171A3E] text-white shadow-lg">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <span className="text-[14px] font-semibold tracking-wide">
                      +356 77142418
                    </span>
                  </div>
                </div>

                {/* Authorized Share Card - Custom Layout */}
                <div className="absolute bottom-16 -right-10 pointer-events-auto transition-transform hover:scale-105">
                  <div className="relative w-[160px] rounded-[24px] bg-white p-5 shadow-[0_20px_40px_rgba(23,26,62,0.15)]">
                    <p className="mb-4 text-[11px] font-bold text-[#171A3E]">
                      Authorized Share
                    </p>
                    <div className="flex flex-col items-center gap-5">
                      {/* Pie Chart */}
                      <div className="relative h-16 w-16 shadow-inner rounded-full">
                        <div className="h-full w-full rounded-full bg-[#C2C7FF]" />
                        <div className="absolute bottom-0 left-0 h-[50%] w-full rounded-b-full bg-[#6F74B8]" />
                      </div>

                      {/* Lines */}
                      <div className="flex w-full flex-col gap-1.5 px-1">
                        <div className="h-1.5 w-full rounded-full bg-[#E5E7EB]"></div>
                        <div className="h-1.5 w-[70%] rounded-full bg-[#6F74B8]"></div>
                      </div>
                    </div>

                    {/* Floating Legend / Tooltip */}
                    <div className="absolute -right-6 -top-10 bg-white rounded-[14px] px-3 py-2 shadow-[0_10px_20px_rgba(0,0,0,0.08)] border border-gray-50 min-w-[100px]">
                      <div className="flex flex-col gap-1">
                        <span className="text-[9px] font-bold text-[#4ADE80] tracking-wide">Issued Share 50%</span>
                        <span className="text-[9px] font-bold text-[#F87171] tracking-wide">Left Share 50%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: FAQ accordion list */}
          <div className="flex-1 lg:pl-12 w-full">
            <div className="space-y-5">
              {items.map((item, index) => {
                const isOpen = openIndex === index
                return (
                  <div
                    key={index}
                    onClick={() => toggleItem(index)}
                    className="overflow-hidden rounded-[24px] bg-white text-[#171A3E] shadow-sm transition-all duration-300 hover:shadow-lg cursor-pointer group"
                  >
                    <div className="flex items-center justify-between px-8 py-6">
                      <span className="text-[18px] font-semibold tracking-tight">{item.title}</span>
                      <button
                        type="button"
                        className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300 ${isOpen ? 'border-[#6F74B7] text-[#6F74B7]' : 'border-[#6F74B7] text-[#6F74B7] group-hover:bg-[#6F74B7]/10'}`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          {isOpen ? <path d="M5 12h14" /> : <path d="M12 5v14M5 12h14" />}
                        </svg>
                      </button>
                    </div>
                    {isOpen && (
                      <div className="px-8 pb-8 pt-0 animate-in slide-in-from-top-2 fade-in duration-200">
                        {/* Dashed line */}
                        <div className="mb-5 border-t border-dashed border-gray-300/70" />
                        <p className="text-[15px] text-gray-500 leading-[1.6] font-medium">
                          {item.desc}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
