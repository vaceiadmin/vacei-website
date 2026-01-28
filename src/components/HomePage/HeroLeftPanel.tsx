"use client"
import GetInstantQuoteButton from "../common/GetInstantQuoteButton"

const HeroLeftPanel = () => {
  return (
    <div className="relative h-full min-h-[700px] w-full px-6 pt-16 pb-12 lg:px-16 lg:pt-24 lg:pb-16 flex flex-col justify-between">
      {/* Scroll down indicator - Absolute Left */}
      <div className="absolute left-6 bottom-24 hidden lg:flex flex-col items-center gap-4 text-white/50 z-20">
        <span className="text-[10px] font-medium tracking-[0.3em] uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Scroll Down
        </span>
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/50">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 w-full flex-1 flex flex-col">
        {/* Title */}
        <h1
          className="font-sans font-bold tracking-[-0.04em] text-[80px] leading-[0.9] md:text-[100px]  text-white opacity-100"
          style={{ fontFamily: 'var(--font-mona-sans), system-ui, sans-serif' }}
        >
          What Vacei Is
        </h1>

        {/* Middle Content Row - Pushed to bottom */}
        <div className="mt-auto mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 z-20">
          {/* Buttons (Left) */}
          <div className="flex flex-col sm:flex-row gap-6 pl-2 pb-2">
            <GetInstantQuoteButton className="h-[60px] w-[230px] shadow-[0_12px_40px_rgba(59,73,230,0.4)] hover:shadow-[0_12px_50px_rgba(59,73,230,0.5)] transition-shadow" />
            <GetInstantQuoteButton
              variant="book-demo"
              href="/demo"
              className="h-[60px] w-[190px] border-white/20 hover:bg-white/5"
            />
          </div>

          {/* Description Text (Right) */}
          <div className="max-w-[480px] lg:text-right lg:mr-4 lg:mb-4">
            <p className="text-[16px] leading-[1.8] text-light-gray font-normal">
              VACEI is a modern accounting, audit and corporate services firm built around one structured
              digital platform. We handle accounting, compliance, corporate and audit work end to end,
              using our own technology to deliver clarity, speed and visibility. VACEI is not DIY software
              and not a marketplace. We are a professional firm that does the work for you, supported by a
              secure client portal.
            </p>
          </div>
        </div>

        {/* Footer Content (Bottom Right) */}
        <div className="mt-auto flex justify-end lg:mr-4 pt-12">
          <div className="flex items-start gap-4 max-w-[400px]">
            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-white/5 border border-white/10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" fill="currentColor" className="text-white" />
              </svg>
            </div>
            <div>
              <h3 className="text-[15px] font-semibold text-white">Dedicated teams. Clear accountability.</h3>
              <p className="mt-1 text-[13px] text-light-gray leading-relaxed">
                Every client is supported by a named VACEI team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroLeftPanel

