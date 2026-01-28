
import React from 'react'
import GradientContainer from '../common/GradientContainer'
import { FileText, Upload, Check, AlertTriangle } from 'lucide-react'

const AIReviewFeature = () => {
    return (
        <section className="w-full py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column - Interactive UI Demo */}
                    <GradientContainer
                        showRadials={false}
                        className="p-8 min-h-[600px] flex items-center justify-center text-left"
                    >
                        <div className="w-full max-w-[480px] grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-min">

                            {/* Card 1: Analysis Setup */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-5 h-full">
                                <div className='text-left space-y-3'>
                                    <h3 className="font-semibold text-[#181C42] text-[13px] leading-tight">File ready for analysis</h3>
                                    <div className="flex items-center gap-3 p-3 bg-[#F9FAFB] border border-gray-100 rounded-xl">
                                        <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                                            <FileText className="w-4 h-4 text-gray-500" />
                                        </div>
                                        <div className="min-w-0 flex flex-col">
                                            <p className="text-[11px] font-semibold text-[#181C42] truncate max-w-[120px]">Vacei Audit LTD - Draft FS...</p>
                                            <p className="text-[10px] text-gray-400">0.25 MB</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='text-left space-y-3'>
                                    <h3 className="font-semibold text-[#181C42] text-[13px] leading-tight">Select Test Categories</h3>
                                    <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                                        {[
                                            { label: 'Audit Report', checked: false },
                                            { label: 'Balance Sheet', checked: false },
                                            { label: 'General Info', checked: false },
                                            { label: 'Notes & Policy', checked: false },
                                            { label: 'Presentation', checked: false },
                                            { label: 'All Test', checked: true },
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2 group cursor-pointer">
                                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${item.checked ? 'border-[#242748] bg-[#242748]' : 'border-gray-200 group-hover:border-gray-300'}`}>
                                                    {item.checked && <Check className="w-2.5 h-2.5 text-white stroke-[3]" />}
                                                </div>
                                                <span className="text-[10px] text-gray-500 font-medium whitespace-nowrap">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button className="mt-auto w-full py-2.5 bg-[#242748] hover:bg-[#1a1c36] transition-all rounded-lg text-white text-[11px] font-semibold shadow-md shadow-[#242748]/10 active:scale-[0.98]">
                                    Generate Analysis Report
                                </button>
                            </div>

                            {/* Card 2: Upload */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center text-center h-full">
                                <h3 className="font-semibold text-[#181C42] text-[13px] mb-5 w-[80%] leading-relaxed">Upload Financial Statements</h3>
                                <div className="flex-1 w-full border border-dashed border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center gap-3 bg-[#F9FAFB]/50 hover:bg-[#F9FAFB] transition-colors cursor-pointer group">
                                    <div className="w-9 h-9 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                                        <Upload className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[11px] font-bold text-[#181C42]">Drop your PDF here or</p>
                                        <p className="text-[11px] font-bold text-[#181C42]">click browser</p>
                                    </div>
                                    <p className="text-[9px] text-gray-400">Support PDF files up to 10MB</p>
                                </div>
                            </div>

                            {/* Card 3: Results (Spans full width) */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm md:col-span-2 mt-1">
                                <h3 className="font-semibold text-[#181C42] text-[13px] mb-4 text-left">Audit Result</h3>

                                <div className="space-y-4">
                                    {/* Success Section */}
                                    <div className="space-y-2 text-left">
                                        <p className="text-[11px] font-bold text-emerald-500">Confirm Correct Items</p>
                                        <div className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-gray-100/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-gray-200 transition-colors">
                                            <div className="flex items-center gap-3 min-w-0">
                                                <div className="w-5 h-5 rounded-full bg-[#242748] flex items-center justify-center shrink-0">
                                                    <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                                                </div>
                                                <span className="text-[11px] font-semibold text-gray-700 truncate">GI01 - ENTITY_LEGAL_NAME...</span>
                                            </div>
                                            <span className="px-2 py-1 bg-gray-100 rounded text-[9px] font-bold text-gray-500 uppercase tracking-wide shrink-0 ml-3">GENERAL</span>
                                        </div>
                                    </div>

                                    {/* Error Section */}
                                    <div className="space-y-2 text-left">
                                        <p className="text-[11px] font-bold text-red-500">Critical Errors</p>
                                        <div className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-gray-100/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-gray-200 transition-colors">
                                            <div className="flex items-center gap-3 min-w-0">
                                                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0">
                                                    <AlertTriangle className="w-5 h-5 text-red-500 fill-current" />
                                                </div>
                                                <span className="text-[11px] font-semibold text-gray-700 truncate">CS01 - Profit for the year does...</span>
                                            </div>
                                            <span className="px-2 py-1 bg-gray-100 rounded text-[9px] font-bold text-gray-500 uppercase tracking-wide shrink-0 ml-3">BALANCE SHEET</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </GradientContainer>

                    {/* Right Column - Content */}
                    <div className="space-y-8 text-left">
                        <h2 className="text-3xl md:text-4xl font-semibold text-primary leading-[1.15]">
                            Auditor-designed financial statement review
                        </h2>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                VACEI AI Review is an auditor-designed review tool built to support the review of financial statements.
                            </p>
                            <p>
                                Reviewing financial statements takes time.<br />
                                And even experienced teams can miss small details.
                            </p>
                            <p>
                                VACEI AI Review keeps the review process structured, focused, and reliable, without replacing professional judgement.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AIReviewFeature
