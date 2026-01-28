'use client'

import React from 'react'
import FeatureSection from '../common/FeatureSection'

const PortalFeature = () => {
    const homeFeatures = [
        {
            title: "Bookkeeping that powers everything else",
            description: "Your bookkeeping runs continuously in the background. You upload documents – our team posts, reconciles, and reviews everything. Once bookkeeping is complete, VAT, tax, audit and reporting can proceed smoothly.",
            content: [
                'Monthly bookkeeping status',
                'Missing documents clearly listed',
                'Bank and ledger reconciled',
                'Ready for VAT and audit'
            ],
            buttonText: "See How Bookkeeping Works",
            buttonHref: "/bookkeeping",
            mainImage: "/assets/images/Frame 1618872461.png",
            overlayImages: [
                {
                    src: "/assets/images/Frame 1618872471.png",
                    alt: "Progress Chart",
                    position: "top-right" as const,
                    size: "medium" as const
                },
                {
                    src: "/assets/images/Frame 1618872663.png",
                    alt: "Upload Status",
                    position: "bottom-right" as const,
                    size: "large" as const
                }
            ],
            reverseLayout: false
        },
        {
            title: "VAT & payroll filings, period by period",
            description: "VAT and payroll run on fixed periods. Each submission is tracked, prepared, submitted, and archived automatically. If nothing changes, you simply confirm – and we take care of the rest.",
            content: [
                'VAT periods with due dates',
                'Payroll runs per month',
                'Submission confirmations',
                'No-change confirmations'
            ],
            buttonText: "See VAT & Payroll in Action",
            buttonHref: "/vat-payroll",
            mainImage: "/assets/images/Frame 1618872474.png",
            overlayImages: [
                {
                    src: "/assets/images/Frame 1618872664.png",
                    alt: "Status Badge",
                    position: "center-left" as const,
                    size: "medium" as const
                },
                {
                    src: "/assets/images/Frame 1618872665.png",
                    alt: "Tax Period",
                    position: "bottom-left" as const,
                    size: "medium" as const
                },
                {
                    src: "/assets/images/Frame 1618872473.png",
                    alt: "Missing Items",
                    position: "top-right" as const,
                    size: "medium" as const
                }
            ],
            reverseLayout: true
        },
        {
            title: "Corporate & CSP services with expiry tracking",
            description: "Corporate services don't run monthly – they expire. Directorships, registered office, and company secretary services are monitored by expiry date. Renewals are triggered automatically – with reminders and billing.",
            content: [
                'Active corporate services',
                'Expiry dates clearly shown',
                'Renewal alerts before deadlines',
                'No missed obligations'
            ],
            buttonText: "View Corporate Services",
            buttonHref: "/corporate",
            mainImage: "/assets/images/Frame 1618872666.png",
            overlayImages: [
                {
                    src: "/assets/images/Frame 1618872667.png",
                    alt: "Trial Balance",
                    position: "bottom-right" as const,
                    size: "large" as const
                },
                {
                    src: "/assets/images/Frame 1618872508.png",
                    alt: "User Profile",
                    position: "bottom-left" as const,
                    size: "medium" as const
                }
            ],
            reverseLayout: false
        }
    ]

    return <FeatureSection features={homeFeatures} className="py-20 lg:py-28" />
}

export default PortalFeature
