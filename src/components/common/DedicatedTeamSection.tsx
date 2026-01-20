import Image from "next/image"

const DedicatedTeamSection = () => {
  return (
    <section className="w-full bg-[#ECF0F0] py-16">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 lg:flex-row lg:items-stretch lg:gap-8">
        {/* Left dashboard mock */}
        <div className="flex-1 rounded-[24px] bg-white shadow-[0_18px_45px_rgba(23,26,62,0.08)] border border-white overflow-hidden p-6 flex items-center justify-center">
          <div className="relative h-full w-full min-h-[400px]">
            <Image
              src="/assets/images/portal.png"
              alt="Client portal dashboard"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right content */}
        <div className="flex flex-col gap-6 lg:w-[500px] xl:w-[580px] shrink-0">
          {/* Top Card */}
          <div className="rounded-[24px] bg-white px-10 py-10 shadow-[0_18px_45px_rgba(23,26,62,0.08)] border border-white">
            <div className="mb-6 inline-flex items-center rounded-md border border-dashed border-[#6F74B8] bg-transparent px-4 py-1.5 text-[11px] font-bold tracking-[0.1em] text-[#242748] uppercase">
              Our Services
            </div>
            <h2 className="text-[32px] leading-[1.2] font-semibold text-[#222750] md:text-[40px] tracking-tight mb-4">
              Dedicated Team and
              <br />
              Client Portal
            </h2>
            <p className="text-[14px] leading-relaxed text-[#6B6F8A] max-w-[480px] mb-8">
              Every client works with a dedicated VACEI team.
              The client portal provides one place to upload documents, track tasks and deadlines,
              and communicate with your team and access reports.
            </p>

            <button className="group inline-flex items-center gap-3 text-[16px] font-bold text-[#242748] transition-opacity hover:opacity-80">
              Explore The Client Portal
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#242748] text-white transition-transform group-hover:rotate-45">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
            </button>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col gap-4 lg:flex-row h-full">
            {/* Client Portal Card - Approx 1/3 width */}
            <div className="w-full lg:w-[200px] shrink-0 flex flex-col justify-between rounded-[24px] bg-white px-6 py-6 shadow-[0_18px_45px_rgba(23,26,62,0.08)] border border-white">
              <div>
                <h3 className="mb-3 text-[18px] font-bold text-[#222750]">Client Portal</h3>
              </div>
              <p className="text-[14px] leading-relaxed text-[#6B6F8A]">
                Documents, tasks, deadlines and communication in one place.
              </p>
            </div>

            {/* Quote Card - Approx 2/3 width */}
            <div className="relative flex-1 overflow-hidden rounded-[24px] bg-[#6F74B8] px-8 py-8 text-white shadow-[0_24px_60px_rgba(0,0,0,0.28)] flex flex-col justify-between">
              <div className="absolute left-6 top-8 h-[60px] w-[40px] opacity-50">
                <Image
                  src="/assets/images/quotation.png"
                  alt="Quote"
                  width={40}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="relative z-10 pl-12 h-full flex flex-col justify-between">
                <p className="text-[15px] font-medium leading-[1.6]">
                  Good firms rely on experience. Great firms rely on structure.
                  VACEI exists to make that structure visible, auditable, and
                  scalable.
                </p>
                <div className="mt-6">
                  <div className="text-[15px] font-bold">John Steven</div>
                  <div className="text-[13px] text-white/80">Co. Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DedicatedTeamSection


