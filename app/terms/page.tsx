"use client";
import FooterSection from "@/components/footer";
import React from "react";

export default function Terms() {
  const sections = [
    {
      title: "Introduction",
      content: [
        "Welcome to Leadseeder, a platform designed to help professionals enhance networking and outreach efforts by automating connection requests, profile visits, and messaging. By accessing or using Leadseeder, you acknowledge that you have read, understood, and agreed to be bound by these Terms & Conditions, as well as any applicable laws and regulations. If you do not agree with any of these terms, you must refrain from using our services.",
        "Leadseeder reserves the right to update, modify, or change these Terms at any time without prior notice. Continued use of the platform after any modifications constitutes acceptance of the new Terms.",
      ],
    },
    {
      title: "Service Description",
      content: [
        "Leadseeder offers tools that help businesses and individuals improve their networking strategies and streamline engagement workflows. Users can manage outreach efforts, track responses, and analyze performance through our platform.",
        "We do not guarantee uninterrupted service and are not liable for any disruptions caused by third-party platforms or service providers.",
      ],
    },
    {
      title: "User Responsibilities",
      content: [
        "Leadseeder is intended for businesses, professionals, and organizations. Users must ensure their activities comply with relevant regulations and the terms of external platforms they engage with. Leadseeder is not liable for any restrictions, suspensions, or penalties imposed by third-party services due to user actions.",
        "Users agree not to misuse Leadseeder for fraudulent, deceptive, or unlawful activities. Any violation may result in account suspension or termination without a refund. Users are responsible for their own messaging, outreach, and interactions conducted via Leadseeder.",
      ],
    },
    {
      title: "Subscription & Payments",
      content: [
        "Leadseeder offers monthly ($17) and yearly ($170) subscription plans, with payments processed securely via Stripe. Subscriptions auto-renew unless canceled before the next billing cycle. Users are responsible for managing their subscriptions and ensuring timely cancellations to avoid unwanted charges. Contact: support@leadseeder.co",
        "Leadseeder reserves the right to modify pricing at any time, with prior notice to users. Fees are non-refundable, including cases of user-initiated cancellations, third-party account restrictions, or dissatisfaction with service results.",
      ],
    },
    {
      title: "Data Protection & Privacy",
      content: [
        "Leadseeder prioritizes user data security and privacy. The platform does not collect LinkedIn credentials or require users to input sensitive login details. All collected data, including first names, last names, LinkedIn profile URLs, email addresses, is securely stored.",
        "Leadseeder does not sell, share, or distribute user data to third parties. Users may request data deletion at any time by contacting support@leadseeder.co, after which their information will be permanently removed from our system.",
      ],
    },
    {
      title: "Limitation of Liability",
      content: [
        "Leadseeder is not responsible for account suspensions, restrictions, or terminations imposed by third-party platforms. Users acknowledge that automation carries inherent risks and must use the platform responsibly.",
        "While Leadseeder provides features for activity control, we do not guarantee specific results, responses, or engagement rates. Users assume full responsibility for their use of the platform, including compliance with external platform rules.",
        "Under no circumstances shall Leadseeder, its affiliates, or employees be liable for direct, indirect, incidental, consequential, or special damages resulting from the use of the service.",
      ],
    },
    {
      title: "Refund and Cancellation Policy",
      content: [
        "No Refunds: All payments made to Leadseeder are final and non-refundable, applicable to both monthly and annual subscriptions.",
        "Subscription Cancellation: Users can cancel their subscription at any time, but the cancellation will take effect at the end of the current billing cycle. Cancellation requests sent to support@leadseeder.co will be treated as official cancellation tickets; other forms of communication will not be recognized as cancellations.",
        "Annual Subscriptions: Users selecting the annual plan will not receive partial refunds, even if they choose to discontinue before the year concludes. The service will remain active throughout the entire paid duration.",
        "Monthly Subscriptions: To avoid charges, monthly subscribers must cancel prior to the next billing cycle. No or prorated credits will be given for any unused time.",
        "Service Changes: Refunds will not be issued due to platform updates, feature changes, or perceived variations in service performance.",
        "Third-Party Restrictions: Leadseeder is not liable for any account suspensions, restrictions, or penalties from external platforms, and no refunds will be issued in these scenarios.",
        "Free Trial Conversion: Users transitioning from a free trial to a paid subscription acknowledge that they will be charged immediately upon conversion.",
        "Account Termination: Leadseeder reserves the right to terminate accounts for violations of the Terms of Service, with no refunds provided in such instances.",
        "Promotional Offers: Special promotional offers or discounts come with specific terms and do not modify this refund policy unless explicitly stated.",
        "For billing inquiries, please reach out to our support team at support@leadseeder.co.",
      ],
    },
    {
      title: "Service Modifications & Termination",
      content: [
        "Leadseeder reserves the right to modify, pause, or terminate services at any time. If service changes occur, users will be notified in advance. Continued use of the platform after modifications indicates acceptance of the changes.",
        "Leadseeder may suspend or terminate accounts that violate these Terms, engage in unethical behavior, or misuse the service. No refunds will be provided in such cases.",
      ],
    },
    {
      title: "Final Provision",
      content: [
        "The place of performance is Dover, DE. The law of the State of Delaware applies exclusively. Any changes to the contract must be in writing. If any provision of the contract is invalid, the rest remains effective. The parties will replace invalid provisions with ones that closely reflect the original intent.",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[oklch(0.147_0.004_49.25)]">
      <main className="flex-grow rounded-md mx-3 pt-20 pb-4">
        <section className="w-full max-w-4xl px-4 md:px-8 py-8 mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms & Conditions
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Effective Date: 1st February 2025
            </p>
          </div>

          <div className="space-y-16">
            {/* Introduction Section */}
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

            {/* Main Sections */}
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
}
