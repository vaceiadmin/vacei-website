import React from "react"
import GetInstantQuoteButton from "../common/GetInstantQuoteButton"
import { useIsSafari } from "@/hooks/use-safari"
import { usePerformance } from "@/contexts/ReduceMotionContext"
import { cn } from "@/lib/utils"

const ReadyToSimplifySection = () => {
    const isSafari = useIsSafari();
    const { isIPhone, isLowPerformance } = usePerformance();

    return (
        <section className="w-full py-14 bg-slate-50 relative overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-[100px]" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div
                    className="relative rounded-[3rem] bg-white border border-slate-100 p-8 sm:p-12 md:p-16 lg:p-24 text-center shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] overflow-hidden"
                >
                    {/* Inner Glow Line */}
                    <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent" />

                    <div className="max-w-4xl mx-auto flex flex-col items-center">
                        <div
                            className="mb-8"
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest border border-blue-100/50">
                                Next Generation Platform
                            </span>
                        </div>

                        <h2
                            className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.05] mb-8"
                        >
                            Ready to Simplify <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Your Business?</span>
                        </h2>

                        <p
                            className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mb-12 leading-relaxed"
                        >
                            Create your workspace and start managing your professional services through one platform.
                        </p>

                        <div
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none"
                        >
                            <GetInstantQuoteButton
                                text="Create Workspace"
                                href="/quote#process-steps"
                                className="w-full sm:w-auto px-10 py-5 text-sm font-black uppercase tracking-widest transition-transform hover:scale-105"
                            />
                            <GetInstantQuoteButton
                                variant="custom"
                                text="Get Instant Quote"
                                href="/quote"
                                bgColor="white"
                                textColor="#0f172a"
                                borderColor="#e2e8f0"
                                className="w-full sm:w-auto px-10 py-5 text-sm font-black uppercase tracking-widest hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm hover:scale-105"
                                hasShadow={false}
                            />
                        </div>

                        <div
                            className="mt-10"
                        >
                            <p className="text-sm font-bold text-slate-400 max-w-sm">
                                Get a quote or invite your advisors <br className="hidden sm:block" /> to collaborate in your workspace.
                            </p>
                        </div>
                    </div>

                    {/* Subtle decorative shapes */}
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-slate-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
                </div>
            </div>
        </section>
    )
}

export default ReadyToSimplifySection
