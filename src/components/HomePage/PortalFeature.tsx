'use client'

import React from 'react'
import Image from 'next/image'
import GradientContainer from '../common/GradientContainer'
import GetInstantQuoteButton from '../common/GetInstantQuoteButton'

const PortalFeature = () => {
    return (
        <section className="w-full py-20 lg:py-28 space-y-20 lg:space-y-28">
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">

                {/* Row 1: Bookkeeping */}
                <div className="flex flex-col lg:flex-row  items-center gap-12 lg:gap-24 mb-24">
                    {/* Text Content */}
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                            Bookkeeping that <br />
                            powers everything else
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Your bookkeeping runs continuously in the background. You upload documents – our team posts, reconciles, and reviews everything. Once bookkeeping is complete, VAT, tax, audit and reporting can proceed smoothly.
                        </p>

                        <div className="space-y-4 pt-2">
                            <h3 className="font-bold text-slate-800 text-lg">What clients see in the portal:</h3>
                            <ul className="space-y-2">
                                {[
                                    'Monthly bookkeeping status',
                                    'Missing documents clearly listed',
                                    'Bank and ledger reconciled',
                                    'Ready for VAT and audit'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-4">
                            <GetInstantQuoteButton
                                variant="custom"
                                text="See How Bookkeeping Works"
                                href="/bookkeeping"
                                bgColor="#3D4494"
                                textColor="white"
                                className="px-8 py-3 rounded-full font-semibold shadow-lg shadow-indigo-500/20"
                            />
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="flex-1 w-full">
                        <GradientContainer
                            className="aspect-[4/3] w-full relative rounded-2xl p-6 lg:p-10 flex items-center justify-center"
                            backgroundColor="bg-[#1e174a]"
                            showRadials={false}
                        >
                            {/* Main Dashboard Image */}
                            <div className="relative w-[78%] h-[78%] z-10 rounded-lg overflow-hidden">
                                <Image
                                    src="/assets/images/Frame 1618872461.png"
                                    alt="Bookkeeping Dashboard"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Floating Overlay 1 - Top Right */}
                            <div className="absolute top-8 right-8 w-[38%] h-[28%] z-20 rounded-lg overflow-hidden animate-float-slow">
                                <Image
                                    src="/assets/images/Frame 1618872471.png"
                                    alt="Progress Chart"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Floating Overlay 2 - Bottom Right */}
                            <div className="absolute bottom-8 right-10 w-[42%] h-[32%] z-20 rounded-lg overflow-hidden animate-float-delayed">
                                <Image
                                    src="/assets/images/Frame 1618872663.png"
                                    alt="Upload Status"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </GradientContainer>
                    </div>
                </div>

                {/* Row 2: VAT & Payroll */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24 mb-24">
                    {/* Text Content */}
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                            VAT & payroll filings, <br />
                            period by period
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            VAT and payroll run on fixed periods. Each submission is tracked, prepared, submitted, and archived automatically. If nothing changes, you simply confirm – and we take care of the rest.
                        </p>

                        <div className="space-y-4 pt-2">
                            <h3 className="font-bold text-slate-800 text-lg">What clients see in the portal:</h3>
                            <ul className="space-y-2">
                                {[
                                    'VAT periods with due dates',
                                    'Payroll runs per month',
                                    'Submission confirmations',
                                    'No-change confirmations'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-4">
                            <GetInstantQuoteButton
                                variant="custom"
                                text="See VAT & Payroll in Action"
                                href="/vat-payroll"
                                bgColor="#3D4494"
                                textColor="white"
                                className="px-8 py-3 rounded-full font-semibold shadow-lg shadow-indigo-500/20"
                            />
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="flex-1 w-full">
                        <GradientContainer
                            className="aspect-[4/3] w-full relative rounded-2xl p-6 lg:p-10 flex items-center justify-center"
                            backgroundColor="bg-[#1e174a]"
                            showRadials={false}
                        >
                            {/* Payroll Dashboard */}
                            <div className="relative w-[82%] h-[82%] rounded-lg overflow-hidden z-10">
                                <Image
                                    src="/assets/images/Frame 1618872474.png"
                                    alt="Payroll Dashboard"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Floating Overlay - Left */}
                            <div className="absolute top-1/4 left-6 w-[30%] h-[20%] z-20 rounded-md overflow-hidden animate-float-slow">
                                <Image
                                    src="/assets/images/Frame 1618872664.png"
                                    alt="Status Badge"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Floating Overlay - Bottom Left */}
                            <div className="absolute bottom-12 left-8 w-[35%] h-[25%] z-20 rounded-md overflow-hidden hover:scale-105 transition-transform">
                                <Image
                                    src="/assets/images/Frame 1618872665.png"
                                    alt="Tax Period"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Floating Overlay - Right */}
                            <div className="absolute top-16 right-6 w-[34%] h-[24%] z-20 rounded-md overflow-hidden animate-float-delayed">
                                <Image
                                    src="/assets/images/Frame 1618872473.png"
                                    alt="Missing Items"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </GradientContainer>
                    </div>
                </div>

                {/* Row 3: Corporate Services */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ">
                    {/* Text Content */}
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                            Corporate & CSP services <br />
                            with expiry tracking
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Corporate services don't run monthly – they expire. Directorships, registered office, and company secretary services are monitored by expiry date. Renewals are triggered automatically – with reminders and billing.
                        </p>

                        <div className="space-y-4 pt-2">
                            <h3 className="font-bold text-slate-800 text-lg">What clients see in the portal:</h3>
                            <ul className="space-y-2">
                                {[
                                    'Active corporate services',
                                    'Expiry dates clearly shown',
                                    'Renewal alerts before deadlines',
                                    'No missed obligations'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-4">
                            <GetInstantQuoteButton
                                variant="custom"
                                text="View Corporate Services"
                                href="/corporate"
                                bgColor="#3D4494"
                                textColor="white"
                                className="px-8 py-3 rounded-full font-semibold shadow-lg shadow-indigo-500/20"
                            />
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="flex-1 w-full">
                        <GradientContainer
                            className="aspect-[4/3] w-full relative rounded-2xl p-6 lg:p-10 flex items-center justify-center"
                            backgroundColor="bg-[#1e174a]"
                            showRadials={false}
                        >
                            {/* Main Audit List */}
                            <div className="relative w-[82%] h-[82%] rounded-lg overflow-hidden z-10">
                                <Image
                                    src="/assets/images/Frame 1618872666.png"
                                    alt="Audit Request List"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Floating Overlay - Bottom Right (Balance) */}
                            <div className="absolute -bottom-4 -right-4 lg:bottom-8 lg:right-8 w-[42%] h-[32%] z-20 rounded-lg overflow-hidden animate-float-slow">
                                <Image
                                    src="/assets/images/Frame 1618872667.png"
                                    alt="Trial Balance"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Floating Overlay - Bottom Left (User) */}
                            <div className="absolute bottom-12 left-8 w-[34%] h-[20%] z-20 rounded-lg overflow-hidden animate-float-delayed">
                                <Image
                                    src="/assets/images/Frame 1618872508.png"
                                    alt="User Profile"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </GradientContainer>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default PortalFeature
