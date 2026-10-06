"use client";
import FooterSection from "@/components/footer";
import React from "react";

type SectionContent = string | React.ReactNode;

interface PolicySection {
  title: string;
  content: SectionContent[];
}

const PrivacyPolicy: React.FC = () => {
  const sections: PolicySection[] = [
    {
      title: "SCOPE & APPLICABILITY",
      content: [
        "This Privacy Policy applies to all individuals who access or use Leadseeder in any capacity, whether directly or indirectly, and governs the collection, usage, storage, and disclosure of information as deemed necessary for operational integrity.",
        "Leadseeder functions within a broad and evolving technological landscape, which may involve interactions with third-party platforms, external service providers, and various other digital frameworks. While we take measures to safeguard user interests, we cannot definitively account for or influence external policies, changes, or restrictions that may arise over time.",
        "Users are advised to exercise reasonable discretion when engaging with external platforms, as Leadseeder does not dictate or control third-party actions.",
      ],
    },
    {
      title: "INFORMATION COLLECTION",
      content: [
        <React.Fragment key="info-collection">
          <p className="font-medium mb-2">
            The types of information collected by Leadseeder may include, but
            are not necessarily limited to:
          </p>

          <p className="font-semibold mt-4">2.1 Direct User Data</p>
          <p>
            Users may voluntarily provide certain information during
            registration, subscription, or interaction with Leadseeder. This may
            encompass:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Names, contact details and preferences</li>
            <li>
              Payment-related details necessary for subscription processing
            </li>
            <li>Account configuration settings and engagement preferences</li>
          </ul>
          <p className="mt-2">
            While we may process transactional and operational data, Leadseeder
            does not store user credentials associated with third-party
            services.
          </p>

          <p className="font-semibold mt-4">
            2.2 System-Generated & Automatically Collected Data
          </p>
          <p>
            Our platform may collect and process additional information in the
            background, including but not limited to:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Device details, browser types, operating systems</li>
            <li>
              Interaction data related to service usage, behavioral patterns,
              and performance metrics
            </li>
            <li>
              Technical logs that contribute to service optimization and
              platform security
            </li>
          </ul>
          <p className="mt-2">
            Such information is typically utilized in a manner that benefits
            overall platform functionality while remaining subject to ongoing
            evaluation and refinement.
          </p>

          <p className="font-semibold mt-4">
            2.3 User-Generated Content & Engagement Data
          </p>
          <p>
            Users may engage with Leadseeder in ways that generate or transmit
            certain forms of data, some of which may be visible within the
            platform's ecosystem. The precise nature, extent, and retention of
            such data may vary depending on numerous factors, including but not
            limited to service updates, user preferences, and broader
            operational considerations.
          </p>
          <p>
            Leadseeder does not assume responsibility for data persistence or
            integrity beyond what is functionally required for service delivery.
          </p>
        </React.Fragment>,
      ],
    },
    {
      title: "DATA UTILIZATION & PURPOSES",
      content: [
        "Leadseeder processes collected information within reasonable operational and strategic boundaries to facilitate core functionalities, ensure platform stability, and enhance overall user experience. The scope of usage may include:",
        <ul key="data-usage" className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Service provisioning, platform management, and performance
            improvements
          </li>
          <li>
            Secure transaction processing and account-related communications
          </li>
          <li>
            Analytical assessments that contribute to technical refinement
          </li>
          <li>
            Compliance with applicable legal, regulatory, or industry
            obligations
          </li>
        </ul>,
        "Where applicable, users may receive updates, announcements, or promotional materials, though opt-out mechanisms may be available based on individual circumstances.",
        "Leadseeder does not engage in the outright sale, distribution, or commercialization of user data beyond what is contextually relevant for platform operation.",
      ],
    },
    {
      title: "THIRD-PARTY INTERACTIONS & INTEGRATIONS",
      content: [
        "Users acknowledge that Leadseeder operates in an interconnected digital environment, which may include integrations, dependencies, or indirect interactions with third-party platforms.",
        "While we implement measures to streamline external connectivity, Leadseeder does not dictate the policies, restrictions, or actions of third-party service providers. Accordingly, any modifications, access limitations, or enforcement measures imposed by external entities remain beyond our scope of control.",
        "Where external payment processors, analytical tools, or infrastructure providers are involved, data handling is subject to their respective policies, and users should review such policies independently.",
      ],
    },
    {
      title: "DATA SECURITY & RETENTION",
      content: [
        "We take reasonable measures to uphold the integrity and confidentiality of user data. However, the dynamic nature of digital security means that absolute guarantees cannot be provided. Users are encouraged to maintain secure access credentials and adopt best practices for safeguarding their information.",

        <React.Fragment key="retention">
          <p className="font-semibold mt-4">Retention Guidelines</p>
          <p>
            Leadseeder retains user data as long as operationally necessary,
            though specific retention periods may vary based on evolving
            technical or regulatory considerations. Users may request data
            deletion, subject to feasibility and compliance constraints.
          </p>
          <p>
            Deleted data may not be immediately removed from all backup systems
            or logs, as certain records may persist within archival structures
            for operational continuity.
          </p>
        </React.Fragment>,
      ],
    },
    {
      title: "USER RIGHTS & CHOICES",
      content: [
        "Users may have various rights concerning their data, though the precise applicability of such rights may depend on jurisdictional factors and regulatory interpretations. These may include:",
        <ul key="user-rights" className="list-disc pl-6 mt-2 space-y-1">
          <li>The ability to request access to stored data</li>
          <li>The option to modify or update account details</li>
          <li>
            The right to request data deletion, subject to operational
            feasibility
          </li>
          <li>The ability to opt out of certain communications</li>
        </ul>,
        "To exercise such rights, users may contact support@leadseeder.co, though response times and procedural requirements may vary.",
      ],
    },
    {
      title: "LIABILITY & SERVICE LIMITATIONS",
      content: [
        "Leadseeder provides tools and functionalities that facilitate workflow optimization. However, users assume full responsibility for their interactions, configurations, and compliance with third-party policies.",
        "Leadseeder does not warrant uninterrupted service availability, absolute error-free operation, or immunity from external restrictions. Users acknowledge that:",
        <ul key="liability" className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Any modifications or enforcement actions by external platforms are
            beyond Leadseeder's control
          </li>
          <li>
            Leadseeder shall not be liable for service disruptions, indirect
            damages, or third-party account restrictions
          </li>
          <li>
            Users are responsible for ensuring that their activities align with
            applicable terms and conditions of third-party services
          </li>
        </ul>,
        "Refunds will not be issued in cases of account restrictions, third-party enforcement actions, or service interruptions.",
      ],
    },
    {
      title: "PRICING, MODIFICATIONS, & SERVICE CHANGES",
      content: [
        "Leadseeder reserves the right to:",
        <ul key="pricing" className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Adjust pricing structures, billing terms, or feature availability
            without prior notice
          </li>
          <li>
            Modify, discontinue, or restrict access to certain features based on
            strategic or operational considerations
          </li>
          <li>
            Enforce policy updates or compliance adjustments at its sole
            discretion
          </li>
        </ul>,
        "Subscription plans automatically renew unless canceled in accordance with stated procedures. Users are responsible for managing their billing preferences and subscription settings.",
      ],
    },
    {
      title: "POLICY UPDATES & INTERPRETATION",
      content: [
        "This Privacy Policy may be updated periodically to reflect changes in operational requirements, industry practices, or regulatory landscapes. While we strive to notify users of material changes, continued platform usage constitutes acceptance of any revised terms.",
        "For inquiries, clarifications, or concerns, users may contact us at:",
        <div key="contact" className="mt-4 space-y-2">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:support@leadseeder.co"
              className="text-blue-600 hover:underline"
            >
              support@leadseeder.co
            </a>
          </p>
          <p>
            🌐 Website:{" "}
            <a
              href="https://www.leadseeder.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              www.leadseeder.co
            </a>
          </p>
        </div>,
        "By engaging with Leadseeder, users acknowledge that this Privacy Policy serves as a general framework subject to reasonable interpretation.",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[oklch(0.147_0.004_49.25)]">
      <main className="flex-grow rounded-md mx-3 pt-20 pb-4">
        <section className="w-full max-w-4xl px-4 md:px-8 py-8 mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Last Updated: 8th February 2025
            </p>
          </div>

          <div className="space-y-16">
            
            <div className="border-l-2 border-white-500 pl-6">
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  At Leadseeder (&quot;Company,&quot; &quot;we,&quot;
                  &quot;us,&quot; or &quot;our&quot;), we recognize and respect
                  the importance of privacy and the careful handling of
                  information. We strive to maintain a transparent yet flexible
                  approach to data collection and usage while ensuring that our
                  services remain efficient, adaptable, and aligned with
                  industry standards. This Privacy Policy outlines how we handle
                  information, though specific practices may evolve as
                  necessary.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  By using Leadseeder, users agree to the terms outlined herein.
                  If any aspect of this policy is unclear or requires further
                  interpretation, we encourage users to exercise their
                  discretion accordingly.
                </p>
              </div>
            </div>

           
            {sections.map((section, index) => (
              <div key={index} className="border-l-2 border-white-500 pl-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black dark:text-white">
                  {section.title}
                </h2>

                <div className="space-y-4">
                  {section.content.map((content, idx) =>
                    typeof content === "string" ? (
                      <p
                        key={idx}
                        className="text-gray-700 dark:text-gray-300 leading-relaxed"
                      >
                        {content}
                      </p>
                    ) : (
                      <React.Fragment key={idx}>{content}</React.Fragment>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default PrivacyPolicy;
