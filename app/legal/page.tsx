"use client";
import FooterSection from "@/components/footer";
import React from "react";

type SectionContent = string | React.ReactNode;

interface PolicySection {
  title: string;
  content: SectionContent[];
}

const LegalNotice: React.FC = () => {
  const sections: PolicySection[] = [
    {
      title: "Publisher",
      content: [
        "The websites https://www.leadseeder.co and https://app.leadseeder.co (hereinafter 'the Website') are published by Leadseeder, LLC, hereinafter referred to as 'the Company.'",
        <ul key="publisher" className="list-disc pl-6 mt-2 space-y-1">
          <li>Type of company: Delaware limited liability company (LLC)</li>
          <li>Registered office: 1111b South Governors Avenue, Dover, DE 19904, United States</li>
          <li>Share capital: $50,000</li>
          <li>Employer Identification Number (EIN): 35-2852217</li>
          <li>Phone: (302) 265-3250</li>
          <li>Contact email: support@leadseeder.co</li>
        </ul>
      ],
    },
    {
      title: "Hosting",
      content: [
        "The Website is hosted by Amazon Web Services, Inc. (AWS), whose principal office is at 410 Terry Avenue North, Seattle, WA 98109, United States."
      ],
    },
    {
      title: "Relevance of Content",
      content: [
        "If you notice the presence of inaccurate content or content that may infringe upon the rights of a third party or violate a regulatory or legislative provision, please notify us by writing to Mr. Vidit Gupta at support@leadseeder.co."
      ],
    },
    {
      title: "Website Editorial Team",
      content: [
        <ul key="editorial" className="list-disc pl-6 mt-2 space-y-1">
          <li>Editor-in-Chief: Vidit Gupta</li>
          <li>Website Editorial Manager: Leadseeder Tech Team</li>
          <li>Contact: support@leadseeder.co</li>
        </ul>
      ],
    },
    {
      title: "Intellectual Property",
      content: [
        "All trademarks, photographs, texts, comments, illustrations, animated or non-animated images, video sequences, sounds, as well as all computer applications that may be used to operate the Website, and in general, all elements reproduced or used on the Website, are protected by intellectual property laws.",
        "They are the full and exclusive property of Leadseeder, LLC or its partners, unless otherwise specified. Any reproduction, representation, use, or adaptation, in any form whatsoever, of all or part of these elements, including computer applications, without the prior written consent of the entity holding the rights, is strictly prohibited.",
        "The fact that the rights holder does not initiate proceedings upon becoming aware of such unauthorized uses does not constitute acceptance of said uses and waiver of legal action.",
        "Only private use within a family circle is permitted, and any other use constitutes infringement punishable by the relevant Intellectual Property laws of the United States.",
        "Reproduction of all or part of this content requires the prior authorization of the rights holder of this content."
      ],
    },
    {
      title: "Suspension of Services",
      content: [
        <React.Fragment key="suspension">
          <p className="font-medium mb-2">a. The use of Leadseeder's Website and services may be occasionally suspended to allow interventions and maintenance necessary for its operation. If an intervention is planned, you will be informed in due time so that you can take all necessary measures to avoid any disruption to your business.</p>
          <p className="font-medium mb-2">b. In case of extreme urgency, imperative necessity, or if Leadseeder's security is at stake, Leadseeder is exempted from this duty of prior information but is responsible for providing all useful explanations after the intervention has been carried out.</p>
          <p className="font-medium">c. Leadseeder cannot be held responsible for the possible consequences of the unavailability of the Website or services due to maintenance or updating of the services.</p>
        </React.Fragment>
      ],
    },
    {
      title: "Hyperlinks",
      content: [
        "The Website may contain hyperlinks providing access to other websites edited and managed by third parties. Leadseeder cannot be held directly or indirectly responsible in case these third-party websites do not comply with legal provisions.",
        "The creation of hyperlinks to the Website can only be done with the prior written authorization of Leadseeder."
      ],
    },
    {
      title: "Terms and Conditions",
      content: [
        "Leadseeder's Terms and Conditions are accessible via ",
        <a 
          key="terms-link"
          href="https://www.leadseeder.co/terms-conditions" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          https://www.leadseeder.co/terms-conditions
        </a>
      ],
    },
    {
      title: "Privacy Policy",
      content: [
        "For details about how Leadseeder collects, uses, stores, and shares your personal data, please consult our full Privacy Policy available at: ",
        <a 
          key="privacy-link"
          href="https://www.leadseeder.co/use-of-data" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          https://www.leadseeder.co/use-of-data
        </a>
      ],
    },
    {
      title: "Disclaimer of Liability",
      content: [
        "Leadseeder makes reasonable efforts to ensure the accuracy and reliability of content on the Website but does not guarantee that the information is complete, error-free, or current.",
        "Leadseeder is not responsible for damages or losses that may arise from the use or inability to use the Website or reliance on its contents.",
        "Leadseeder disclaims any liability for damages resulting from viruses, cyber-attacks, or unauthorized access related to your use of the Website or services. Users are responsible for ensuring the security of their own devices and data."
      ],
    },
    {
      title: "Applicable Law and Jurisdiction",
      content: [
        "These terms are governed by the laws of the State of Delaware, United States of America.",
        "Any dispute arising from or related to the Website or services shall be submitted to the exclusive jurisdiction of the federal or state courts located in Dover, Delaware."
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[oklch(0.147_0.004_49.25)]">
      <main className="flex-grow rounded-md mx-3 pt-20 pb-4">
        <section className="w-full max-w-4xl px-4 md:px-8 py-8 mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Legal Notice
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Last Updated: 8th February 2025
            </p>
          </div>

          <div className="space-y-16">
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

export default LegalNotice;