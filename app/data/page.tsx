"use client";
import FooterSection from "@/components/footer";
import React from "react";

type SectionContent = string | React.ReactNode;

interface PolicySection {
  title: string;
  content: SectionContent[];
}

const UseOfData: React.FC = () => {
  const sections: PolicySection[] = [
    {
      title: "Introduction",
      content: [
        "This Privacy Policy informs you of the data processing operations of Leadseeder, LLC, a Delaware limited liability company, with a declared share capital of $50,000. Leadseeder is registered under EIN 35-2852217, with its registered office located at 1111b South Governors Avenue, Dover, DE 19904, United States.",
        "Thank you for choosing to be part of the Leadseeder community (\"Company\", \"we\", \"us\" or \"our\"). We respect your privacy and are committed to protecting your personal information and your rights to privacy.",
        "When you visit and use our websites at www.leadseeder.co and interact with our services, you entrust us with your personal information. We take your privacy very seriously. We strive to explain to you as clearly as possible what information we collect, how we use it, and what your rights are in this regard. We hope you will take the time to read it carefully, as it is important. If you have any questions or concerns about our privacy practices or this policy, please contact us at support@leadseeder.co or vidit@leadseeder.co. This policy applies to the Leadseeder 2.0 Chrome extension (version 1.5.0). A link to this Privacy Policy is included in the extension's permissions prompt and in its Options page.",
        "By continuing to use Leadseeder's websites and services, you accept this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please discontinue use of our websites and services."
      ],
    },
    {
      title: "What types of information do we collect?",
      content: [
        "We collect personal information that you provide to us such as name, address, contact information, passwords and security data, and payment information.",
        "We collect personal information that you voluntarily provide to us when you register for the Services by expressing an interest in obtaining information about us or our products and services, when you participate in activities on the services, or when you otherwise contact us.",
        <React.Fragment key="info-types">
          <p className="font-medium mb-2">
            The personal information we collect may include the following:
          </p>
          
          <p className="font-semibold mt-4">Name and contact information</p>
          <p>
            We collect your first and last name, e-mail address, postal address, telephone number and other similar contact information.
          </p>

          <p className="font-semibold mt-4">Payment Data</p>
          <p>
            If you make purchases on Leadseeder, we collect only the information necessary to process your payment, such as your payment method details (for example, credit or debit card number) and the associated security code with your payment method. Leadseeder retains only the minimal payment metadata for financial record keeping.
          </p>
          <p>
            All payment data is processed and securely stored by Stripe. We do not store your payment details on our servers. For more information on stripe privacy policy, please review Stripe's Privacy Policy.
          </p>
          <p className="mt-2">
            All personal information you provide to us must be true, complete and accurate, and you must inform us of any changes to such personal information.
          </p>

          <p className="font-semibold mt-4">Automatically collected information</p>
          <p>
            Certain information - such as IP address and/or browser and device characteristics - is collected automatically when you visit our Services.
          </p>
          <p>
            This information does not reveal your specific identity (such as your name or contact information) but may include information about your device and its use, such as your IP address, browser and device characteristics, operating system, device name, country, location, information about how you use our Services, and other technical information.
          </p>
          <p>
            This automatically collected information is necessary to maintain the security and effective operation of our services, as well as for our internal analytics and reporting.
          </p>
        </React.Fragment>
      ],
    },
    {
      title: "How Do We Use Your Information?",
      content: [
        "We process your information for purposes based on legitimate business interests, the performance of our contract with you, compliance with our legal obligations and/or your consent. We use IP and device data for fraud monitoring and service security and Ensure the security and integrity of our services, including fraud detection and prevention. We use cookies and analytics data to understand usage trends and improve features. We use email and contact data to send marketing (with unsubscribe) and administrative messages.",
        "We use the personal information collected through our Services for a variety of business purposes described below. We process your personal information for these purposes in accordance with our legitimate business interests, to enter into or perform a contract with you, with your consent, and/or to comply with our legal obligations.",
        <React.Fragment key="info-usage">
          <p>We indicate the specific reasons for processing next to each purpose listed below. We use the information we collect or receive:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>To send you marketing and promotional communications</li>
            <li>To send you administrative information</li>
            <li>To fulfill and manage your orders</li>
            <li>To collect your testimonials</li>
            <li>To request feedback</li>
            <li>To protect our services</li>
            <li>Enforce our terms and conditions and policies for business, legal and contractual purposes</li>
            <li>To respond to legal requests and prevent harm</li>
            <li>For other commercial purposes</li>
          </ul>
          <p className="mt-2">
            Wherever possible, we use and store this information in aggregated and anonymized form, so that it cannot be associated with any individual user and does not contain personal data. We will never use personally identifiable information for these purposes without your explicit consent.
          </p>
        </React.Fragment>
      ],
    },
    {
      title: "Will your information be shared with anyone?",
      content: [
        "We only share information with your consent to comply with laws, provide you with services, protect your rights, or fulfill business obligations. Companies, entities, and other organizations contracted for the provision of services, such as: hosting, marketing services, market analysis, and information society services.",
        <React.Fragment key="sharing">
          <p>We may process or share data on the following legal basis:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Consent: We may process your data if you have given us your specific consent to use your personal information for a specific purpose.</li>
            <li>Legitimate Interests: We may process your data when reasonably necessary to meet our legitimate business interests.</li>
          </ul>
          <p className="mt-2">
            We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
          </p>
          <p>
            The data will be processed on the legal basis of the explicit consent of the person providing them. This consent can be withdrawn at any time, although this will not affect the legality of the processing carried out previously. Providing the data is voluntary, although, if not provided, they cannot be processed for the indicated purposes. If third-party data is provided through this website, the person providing them assumes the responsibility of having obtained prior consent, informing them of everything provided for in Article 14 of the General Data Protection Regulation.
          </p>
        </React.Fragment>
      ],
    },
    {
      title: "To whom will your information be communicated?",
      content: [
        "Leadseeder shares and discloses your personal information only with the following trusted third parties, each carefully selected for a specific business purpose essential to our operations. If you have provided consent for such processing and wish to revoke it, please contact us at support@leadseeder.co.",
        <React.Fragment key="communication">
          <p className="font-medium mb-2">Analytics Providers:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Google Analytics</li>
            <li>Stripe: For secure payment processing and storage of payment credentials</li>
            <li>Email Service Providers and intercom for customer interaction</li>
            <li>Law enforcement agencies, courts, or regulators when required to satisfy legal obligations</li>
          </ul>
          <p className="mt-2">
            Leadseeder does not sell, rent, or trade your personal information to third parties for marketing purposes. With the exception of legal requirements, your data is only accessible to these service providers when necessary to deliver and improve Leadseeder's services.
          </p>
        </React.Fragment>
      ],
    },
    {
      title: "Do we use cookies and other tracking technologies or Storage?",
      content: [
        "We may use cookies and other tracking technologies to collect and store your information. We may use cookies and similar tracking technologies (such as web beacons and pixels) to access or store information. If you require further details, you may contact us.",
        "When you visit our website, our web servers generally store, among other data, information about the browser and operating system you use, the website from which you visit us, the pages you visit on our website, and the date of your visit. For security reasons - for example, to detect possible attacks on our website - the IP address assigned to you by your Internet service provider is also stored for a period of seven days. With the exception of the IP address, personal data is only stored if you provide us with such information, for example, as part of a registration, survey, request for a quote, user registration, commercial promotion. Leadseeder uses your personal data for the technical administration of the web pages, customer/user management, surveys on the use of our Platform and its features, and for marketing tasks, only to the extent necessary, and always informing the User and data subject beforehand."
      ],
    },
    {
      title: "How long do we keep your information?",
      content: [
        "Leadseeder retains your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law (such as for tax, accounting, or other legal obligations).",
        "We will never retain your personal information for longer than you have an active account with us, unless we are obligated by law or have a legitimate business need to do so.",
        "After your account is closed, or when we no longer need to process your personal information for the purposes for which it was collected, we will delete or anonymize your information. If immediate deletion is not possible such as when your data is stored in backup archives, we will securely store and isolate your information from any further processing until deletion is possible."
      ],
    },
    {
      title: "Do we collect information from minors?",
      content: [
        "We do not knowingly collect data from or market to children under the age of 18, nor do we knowingly solicit data from or market to children under the age of 18.",
        "By using the Services, you represent that you are at least 18 years of age or are the parent or guardian of such a minor and you consent to the use of the Services by such minor. If we learn that personal information from users under the age of 18 has been collected, we will deactivate the account and take reasonable steps to promptly delete such data from our records within 10 days.",
        "If you become aware of any data that we have collected from children under the age of 18, please contact us at: support@leadseeder.co"
      ],
    },
    {
      title: "What are your privacy rights?",
      content: [
        "Depending on where you live in the United States, you may have certain rights regarding your personal information under applicable privacy laws, such as the California Consumer Privacy Act (CCPA), as well as other state and federal laws. Leadseeder is committed to providing transparency and control over your data, regardless of jurisdiction. Your privacy rights with Leadseeder may include:",
        <React.Fragment key="privacy-rights">
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Right to Access: You can request information about the personal data we hold about you and receive a copy of that data.</li>
            <li>Right to Correction: You may request that we correct any inaccurate or incomplete personal information about you.</li>
            <li>Right to Deletion: You may request the deletion of your personal information, subject to certain exceptions.</li>
            <li>Right to Restrict or Limit Use: In certain cases, you can ask us to limit the way we use your personal information.</li>
            <li>Right to Opt Out of Sale or Sharing: You may have the right to opt out of the 'sale' or sharing of your personal information.</li>
            <li>Right to Non-Discrimination: We will never discriminate against you for exercising your legal privacy rights.</li>
          </ul>
          <p className="mt-2">
            You may also view, update, or delete your Leadseeder account at any time using your account settings or by contacting us directly. To exercise these rights or if you have any questions about your privacy rights, contact us at support@leadseeder.co. We will respond to all privacy requests in accordance with applicable U.S. state and federal laws.
          </p>
        </React.Fragment>
      ],
    },
    {
      title: "Your Account Information",
      content: [
        "If you wish to review, update, or delete your account information with Leadseeder, you can log in to your account at any time to make changes or contact us at support@leadseeder.co for assistance. When you ask us to delete your account, we will remove your information from our active systems. However, some details may be retained in our records if needed to help prevent fraud, resolve issues, or meet our legal responsibilities.",
        "Most browsers accept cookies by default, but you can change your settings at any time to delete or reject cookies. Please note that doing so may affect how certain features of our services work. If you want to opt out of interest-based advertising, you can visit aboutads.info/choices.",
        "You can unsubscribe from our marketing emails by clicking the unsubscribe link in any message or contacting us at support@leadseeder.co. Please keep in mind that you may still receive important administrative updates about your account.",
        "If you have any questions or need help with your account or privacy preferences, just reach out to us."
      ],
    },
    {
      title: "The \"DO-NOT-TRACK\" function",
      content: [
        "Most web browsers, operating systems, and some mobile applications offer a Do-Not-Track ('DNT') feature that lets you express your preference not to have your online browsing activities monitored or collected. However, there is currently no uniform industry standard for how companies should respond to these signals. Leadseeder does not respond to DNT signals or similar mechanisms at this time. If an accepted standard is established in the future and we are required to comply, we will update this Privacy Policy accordingly and notify you.",
        "Depending on where you live, including under the California Consumer Privacy Act (CCPA) and the General Data Protection Regulation (GDPR) for users in the European Economic Area (EEA), you may have specific rights concerning the personal information Leadseeder holds about you. These rights may include accessing and obtaining a copy of your personal information, requesting correction of inaccurate or incomplete information, requesting deletion of your personal information (subject to certain exceptions), restricting or limiting processing of your data, opting out of the sale or sharing of your personal information where applicable, requesting data portability, withdrawing your consent for data processing, and objecting to certain types of processing.",
        "You can exercise your privacy rights by unsubscribing from marketing or promotional emails using the 'unsubscribe' link at the bottom of such emails. If you are a Leadseeder customer, you may log into your account dashboard and contact our support team. Alternatively, you can email your request to support@leadseeder.co. To protect your privacy, we may ask for proof of identity before processing your request."
      ],
    },
    {
      title: "Do we update this policy?",
      content: [
        "Yes, we will update this Privacy Policy as necessary to remain in compliance with applicable laws and regulations. We may amend this Privacy Policy from time to time. The updated version will be identified by a 'Revised' date and will become effective as soon as it is posted on our website. If we make any material changes, we may notify you by posting a prominent notice on our websites or by sending you a direct notification via email.",
        "We encourage you to review this Privacy Policy regularly to stay informed about how we protect your personal information."
      ],
    },
    {
      title: "Data Deletion",
      content: [
        "You can request the deletion of your Leadseeder account at any time. Once your deletion request is received, we will delete your account and all associated data such as your campaigns, prospects, message content, statistics, and any synchronizations within 30 days."
      ],
    },
    {
      title: "How Can You Contact Us About This Policy?",
      content: [
        "If you have any questions, comments, or concerns regarding this Privacy Policy or Leadseeder's data practices, please feel free to contact us anytime at support@leadseeder.co. We are happy to assist you and provide any clarifications you may need."
      ],
    },
    {
      title: "How Can You Review, Update, or Delete Your Data?",
      content: [
        "Depending on applicable laws, you may have the right to request access to, correction of, or deletion of your personal information that we collect. You can submit such requests by either contacting us at support@leadseeder.co or using available options in your Leadseeder account dashboard or support chat."
      ],
    },
    {
      title: "Do you have a question?",
      content: [
        "You just want some clarification? We would be happy to discuss with you and clarify things for you. At any time. If you have any questions or comments about this policy, you can email us at: support@leadseeder.co"
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[oklch(0.147_0.004_49.25)]">
      <main className="flex-grow rounded-md mx-3 pt-20 pb-4">
        <section className="w-full max-w-4xl px-4 md:px-8 py-8 mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Use of Data
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

export default UseOfData;