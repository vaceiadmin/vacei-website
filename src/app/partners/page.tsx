import React from "react";
import { Metadata } from "next";
import PageHeader from "@/components/common/PageHeader";
import PartnerCard from "@/components/partners/PartnerCard";
import { FadeInUp } from "@/components/common/Animations";

export const metadata: Metadata = {
  title: "Partner With VACEI | Partnership Models",
  description: "Explore VACEI partnership opportunities, including Service Delivery, White Label Solutions, Technology Integration, and our Reseller Program.",
};

const PartnersPage = () => {
  const partnerModels = [
    {
      title: "Service Delivery Partnerships",
      description: "Structured collaboration for accounting and audit firms. Operate within our delivery framework while maintaining professional standards.",
      link: "/partners/service-delivery",
      iconIndex: 0,
    },
    {
      title: "White Label & Technology Access",
      description: "Leverage VACEI's platform under your own brand. Perfect for firms wanting structured workflows and client portals without building internal systems.",
      link: "/partners/white-label",
      iconIndex: 1,
    },
    {
      title: "Technology Integration Support",
      description: "Strengthen your existing systems with our process expertise. We help you structure workflows and controls within your current environment.",
      link: "/partners/technology-support",
      iconIndex: 2,
    },
    {
      title: "Reseller Program",
      description: "Introduce clients to the VACEI platform and earn ongoing commissions. Ideal for consultants and advisors.",
      link: "/partners/reseller-program",
      iconIndex: 3,
    },
  ];

  return (
    <main>
      <PageHeader
        title="Partner With VACEI"
        breadcrumbs={[{ label: "Partners" }]}
      />

      <section className="py-20 lg:py-28 bg-section-light relative">
         {/* Background Noise/Texture */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none" 
             style={{ backgroundImage: `url("/assets/images/Noise.png")` }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 lg:mb-20">
             <FadeInUp>
                <h2 className="text-3xl md:text-5xl font-bold text-text-heading mb-6">
                  Collaboration Models
                </h2>
                <p className="text-lg text-text-gray max-w-3xl mx-auto leading-relaxed">
                  VACEI offers flexible partnership structures designed to meet the needs of modern professional firms, service providers, and technology-forward organisations.
                </p>
             </FadeInUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {partnerModels.map((model, index) => (
              <PartnerCard
                key={index}
                title={model.title}
                description={model.description}
                link={model.link}
                iconIndex={model.iconIndex}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Partnership Assessment Section */}
          <div className="mt-24 max-w-4xl mx-auto">
             <FadeInUp delay={0.4}>
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
                    <h2 className="text-2xl md:text-3xl font-bold text-text-heading mb-8 text-center">
                        How Partnerships Are Assessed
                    </h2>
                    <p className="text-text-gray mb-8 text-center leading-relaxed">
                        VACEI evaluates all partnership requests through a structured assessment process to ensure clarity, quality, and long-term alignment.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-bold text-text-heading mb-2">Professional Alignment</h3>
                            <p className="text-sm text-text-gray">Alignment with applicable professional standards, ethical requirements, and regulatory expectations relevant to the proposed collaboration.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-text-heading mb-2">Operational Readiness</h3>
                            <p className="text-sm text-text-gray">The partner’s ability to operate within defined processes, workflows, and delivery structures, including internal governance and resource availability.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-text-heading mb-2">Quality and Delivery Standards</h3>
                            <p className="text-sm text-text-gray">The ability to meet consistent quality expectations, including documentation discipline, review processes, and accountability.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-text-heading mb-2">Technology and Process Fit</h3>
                            <p className="text-sm text-text-gray">Compatibility between the partner’s operating model and the proposed use of VACEI workflows, portals, or technology support.</p>
                        </div>
                         <div>
                            <h3 className="font-bold text-text-heading mb-2">Jurisdiction and Scope</h3>
                            <p className="text-sm text-text-gray">Suitability of the partnership within the relevant jurisdiction, service scope, and regulatory environment.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-text-heading mb-2">Long-Term Fit</h3>
                            <p className="text-sm text-text-gray">Strategic alignment, sustainability of the collaboration, and the potential for long-term cooperation rather than short-term engagement.</p>
                        </div>
                    </div>
                </div>
             </FadeInUp>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PartnersPage;
