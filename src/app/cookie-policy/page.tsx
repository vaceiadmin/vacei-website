"use client";

import React from "react";
import PageHeader from "@/components/common/PageHeader";

const CookiePolicyPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <PageHeader
          title="Cookie Policy"
          breadcrumbs={[{ label: "Cookie Policy" }]}
        />
      </div>

      <section className=" mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20 space-y-10 text-sm md:text-base text-text-secondary">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
          This Cookie Policy explains how we use cookies and similar
          technologies on this website.
        </p>

        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-text-dark">
            1. What are cookies?
          </h2>
          <p>
            Cookies are small text files that are placed on your device when you
            visit a website. They help the website recognise your device and
            store certain information about your preferences or past actions.
            Some cookies are essential for a site to function, while others are
            used to improve performance, personalise content, or provide
            analytics and security.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-text-dark">
            2. How we use cookies
          </h2>
          <p>
            We use cookies and similar technologies to support the operation of
            this website and any related portals, to understand how visitors use
            our pages, and to help us improve the way information is presented.
            In some cases, cookies also help us remember choices you make, such
            as language or region, so that the experience is more consistent
            when you return.
          </p>
          <p>
            We aim to use cookies in a measured way that supports a structured,
            professional user experience rather than tracking for its own sake.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-text-dark">
            3. Types of cookies we may use
          </h2>
          <p>
            The specific cookies used can change over time as we update our
            website and underlying technology, but they generally fall into the
            following categories:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <span className="font-medium text-text-dark">
                Strictly necessary cookies
              </span>{" "}
              – required for the website and secure areas of any client portals
              to function properly. These cannot be switched off in our systems.
            </li>
            <li>
              <span className="font-medium text-text-dark">
                Performance and analytics cookies
              </span>{" "}
              – help us understand how visitors interact with our pages (for
              example, which sections are most frequently visited) so that we
              can improve navigation, content and service information.
            </li>
            <li>
              <span className="font-medium text-text-dark">
                Functionality cookies
              </span>{" "}
              – allow the site to remember preferences and choices, such as
              previously selected options or user interface settings, to provide
              a more tailored experience.
            </li>
            <li>
              <span className="font-medium text-text-dark">
                Security and session cookies
              </span>{" "}
              – support secure sign-in, help protect accounts from unauthorised
              access, and maintain your session as you move through different
              parts of the site or portal.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-text-dark">
            4. Third‑party cookies
          </h2>
          <p>
            In addition to our own cookies, we may use third‑party cookies
            provided by trusted service partners. These may support features
            such as analytics, performance monitoring, embedded content or
            integration with other tools we use to deliver and maintain our
            services.
          </p>
          <p>
            Where third‑party cookies are in use, those third parties may
            collect information about your online activities over time and
            across different websites, in accordance with their own privacy and
            cookie practices. We seek to work only with providers whose
            practices are compatible with a professional services environment.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-text-dark">
            5. Managing cookies
          </h2>
          <p>
            You can control and manage cookies in several ways. Most browsers
            allow you to review the cookies stored on your device and to delete
            them, block specific types of cookies, or restrict cookies to
            certain sites. The method for doing this varies by browser, so
            please refer to the help or settings section of your browser for
            up‑to‑date instructions.
          </p>
          <p>
            If you choose to block or delete certain cookies, some parts of the
            website or portal may not function as intended, and you may not be
            able to access certain features or secure areas.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-text-dark">
            6. Relationship with our Privacy Policy
          </h2>
          <p>
            Information collected through cookies and similar technologies may
            be combined with other information we hold about you, such as
            details provided when you complete a form, request a quote or use a
            client portal. Our use of that information is described in more
            detail in our Privacy Policy, which should be read together with
            this Cookie Policy.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-text-dark">
            7. Updates to this Cookie Policy
          </h2>
          <p>
            We may update this Cookie Policy from time to time, for example to
            reflect changes to the cookies we use, updates to applicable
            regulation, or improvements to our technology and services. When we
            make material changes, we will adjust the effective date below and,
            where appropriate, provide additional notice.
          </p>
          <p className="text-xs text-muted-foreground">
            Last updated: {new Date().getFullYear()}
          </p>
        </div>
      </section>
    </main>
  );
};

export default CookiePolicyPage;

