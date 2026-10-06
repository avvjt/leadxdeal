"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
  section: string;
};

type FAQSection = {
  title: string;
  items: Omit<FAQItem, "section">[];
};

const faqSections: FAQSection[] = [
  {
    title: "About Leadseeder",
    items: [
      {
        id: "about-1",
        question:
          "What makes Leadseeder different from other LinkedIn automation tools?",
        answer:
          "Leadseeder stands out through its AI-powered contextual engagement system that analyzes profiles and content to generate hyper-personalized outreach. Unlike basic automation tools that send generic messages, our platform studies each prospect's activity history, job changes, content engagement patterns, and shared connections to craft relevant messaging. We combine this with smart throttling algorithms that mimic human behavior patterns to maintain account safety. Additionally, our proprietary 'Relationship Heatmap' visually tracks engagement depth across your network, helping you prioritize high-value connections.",
      },
      {
        id: "about-2",
        question:
          "How does Leadseeder ensure compliance with LinkedIn's terms of service?",
        answer:
          "We maintain strict compliance through a multi-layered approach: 1) Activity pacing that never exceeds LinkedIn's interaction limits (customized per account age and size), 2) Randomized engagement intervals that mimic human usage patterns, 3) Proprietary 'Stealth Mode' technology that routes activities through residential IP networks, 4) Regular algorithm updates based on LinkedIn's changing policies (we monitor 37+ signals daily), and 5) Built-in activity suspension when abnormal patterns are detected. Since 2023, our 12,000+ active users have maintained a 99.97% account safety rate.",
      },
      {
        id: "about-3",
        question: "What kind of customer support can I expect?",
        answer:
          "All plans include: 1) Dedicated onboarding specialist with 90-minute setup session, 2) 24/7 chat support with under 3-minute response times during business hours, 3) Weekly optimization webinars, and 4) Campaign health monitoring alerts. Enterprise clients receive a dedicated Customer Success Manager who conducts bi-weekly strategy reviews and provides custom performance reports. Our support team consists exclusively of LinkedIn automation experts with 3+ years experience - no generalized support staff.",
      },
    ],
  },
  {
    title: "How It Works",
    items: [
      {
        id: "work-1",
        question: "What's the onboarding process timeline?",
        answer:
          "Our streamlined 4-phase onboarding: Day 1: Technical setup (15 min) - Install browser extension and grant API permissions. Days 2-3: Strategy session (60 min) - Define ICP, set campaign goals, and build target lists. Days 4-5: Campaign architecture (90 min) - Create message sequences and engagement rules. Day 6: Dry-run testing with monitoring. Day 7: Full activation with daily optimization alerts. Most users see first connections within 48 hours of activation, with full pipeline impact within 2-3 weeks.",
      },
      {
        id: "work-2",
        question: "How do you handle personalization at scale?",
        answer:
          "Our AI engine uses 14 data points per profile to generate unique messaging: 1) Career milestones analysis, 2) Content engagement patterns, 3) Skill endorsement gaps, 4) Mutual connections, 5) Job change triggers, 6) Post sentiment analysis, 7) Education/group affiliations, 8) Keyword density in profile, plus 6 proprietary signals. For 500+ contact campaigns, we implement dynamic template clusters with 5-7 message variations that adapt based on recipient industry, seniority, and engagement history. Each message includes at least 3 personalized elements validated by our quality scoring system.",
      },
      {
        id: "work-3",
        question: "Can I integrate with my existing tech stack?",
        answer:
          "Yes, Leadseeder offers native integrations with: CRM (Salesforce, HubSpot, Pipedrive), Marketing Automation (Marketo, Mailchimp), Calendar (Calendly, Google Calendar), and Data Enrichment (Clearbit, ZoomInfo). Our open API supports custom integrations - popular use cases include syncing engaged leads to Slack channels, pushing LinkedIn activity data to BI tools, and triggering webinar invites based on engagement level. Setup takes under 10 minutes for standard integrations using OAuth authentication.",
      },
    ],
  },
  {
    title: "Billing & Plans",
    items: [
      {
        id: "billing-1",
        question: "What's included in the different pricing tiers?",
        answer:
          "Starter ($99/mo): 200 monthly connections, basic personalization, email support. Growth ($249/mo): 750 connections, AI personalization, CRM sync, priority support. Pro ($499/mo): 2,000 connections, advanced analytics, dedicated IP, custom workflows. Enterprise (custom): Unlimited connections, SAML SSO, dedicated account team, API access. All plans include: Chrome extension, basic reporting, LinkedIn compliance protection, and daily activity monitoring. Enterprise adds: Custom AI model training, SOC 2 compliance, and Uptime SLA.",
      },
      {
        id: "billing-2",
        question: "Are there contracts or long-term commitments?",
        answer:
          "No - all plans are month-to-month with cancel-anytime flexibility. We offer 17% discount for annual prepayment. Enterprise agreements typically have 12-month terms but include 90-day exit clauses with data portability guarantee. Important: We never require payment information for free trials, and all subscriptions include 14-day money-back guarantee with prorated refunds for unused service periods.",
      },
      {
        id: "billing-3",
        question: "How do you handle plan upgrades/downgrades?",
        answer:
          "Upgrades: Immediate access to new features, pro-rated charge based on remaining billing cycle. Downgrades: Take effect at next billing date with configuration preservation. Usage limits reset monthly on your billing anniversary date. Critical: When approaching connection limits (80%+ utilization), we send 3 alerts before pausing outreach. You can purchase one-time connection packs ($0.35/connection) to avoid interruptions between cycles.",
      },
    ],
  },
  {
    title: "Product Features",
    items: [
      {
        id: "features-1",
        question: "What targeting capabilities do you offer?",
        answer:
          "Our targeting engine includes 8 dimensions: 1) Geographic (country/region/radius around zip), 2) Company (size, industry, tech stack), 3) Role (seniority, function, years in position), 4) Experience (skills, certifications), 5) Engagement (content posters, active commenters), 6) Intent (job changers, skill learners), 7) Relationship (2nd/3rd degree, group members), and 8) Custom Boolean search. Unique features: 'Competitor Employee' targeting, 'Recent Funding Round' filters, and 'Technology Adoption' scoring based on profile keywords.",
      },
      {
        id: "features-2",
        question: "How do your messaging sequences work?",
        answer:
          "Sequences combine 4 touchpoints across channels: 1) Connection request with personalized note, 2) LinkedIn message follow-up, 3) Email outreach (using pattern-matched addresses), 4) Content engagement (like/comment on recent posts). Our Smart Sequencing™ engine dynamically adjusts paths based on engagement: If a prospect views your profile, it triggers a different follow-up than if they like your post. Sequences automatically expire after 21 days of inactivity, and include built-in 'Do Not Contact' suppression for existing customers.",
      },
      {
        id: "features-3",
        question: "What analytics and reporting do you provide?",
        answer:
          "Dashboard includes: 1) Connection rate analytics (industry/role benchmarks), 2) Message performance heatmaps (best days/times), 3) Response sentiment analysis, 4) Profile view-to-connection conversion tracking, 5) Lead pipeline impact (CRM-sourced deals), and 6) ROI calculator. Custom reports: Exportable CSV with 45+ data points per interaction, including link tracking, engagement duration, and estimated influence score. Premium users get weekly performance optimization recommendations via email.",
      },
    ],
  },
  {
    title: "Privacy & Security",
    items: [
      {
        id: "privacy-1",
        question: "How is my LinkedIn account data protected?",
        answer:
          "We employ: 1) AES-256 encryption at rest and in transit, 2) Zero-knowledge architecture (we never store LinkedIn credentials), 3) GDPR-compliant data processing agreements, 4) SOC 2 Type II certified infrastructure, 5) Quarterly third-party penetration testing. All access uses official LinkedIn API endpoints with OAuth 2.0 authentication. Activity data is pseudonymized after 30 days and fully anonymized after 90 days. You retain full ownership of your connection data with right-to-delete guarantees.",
      },
      {
        id: "privacy-2",
        question: "What data do you collect from my prospects?",
        answer:
          "We collect only public profile data explicitly permitted by LinkedIn's API: Name, headline, current position, industry, and public posts. We never scrape emails or private contact information. For email outreach, we use pattern-matching algorithms (firstname@company.com) with 92% accuracy, but never store unverified addresses. Our system automatically opts out prospects upon request and maintains global suppression lists to prevent re-engagement.",
      },
      {
        id: "privacy-3",
        question: "Where are your servers located?",
        answer:
          "Primary infrastructure is on Google Cloud Platform in Iowa, USA (us-central1 region) with failover to Frankfurt, Germany (europe-west3). All data residency complies with local regulations: EU data remains in Frankfurt, APAC in Singapore (asia-southeast1), and Americas in Iowa. We maintain ISO 27001 certification and undergo annual privacy audits by third-party firms. Backups are encrypted and distributed across 3 geographic regions with 30-day retention.",
      },
    ],
  },
  {
    title: "Results & Performance",
    items: [
      {
        id: "results-1",
        question: "What results do typical users see?",
        answer:
          "Benchmarks across 8,000 campaigns (2025 data): Average 27% connection acceptance rate (vs. 8% manual), 12% response rate to first message, 4.2% booked meeting rate. Sales teams report 5-8X pipeline expansion within 90 days. Top performers achieve: 42%+ acceptance using our Industry Group Targeting, 18% response rates with Video Impression triggers, and 9% meeting rates via our 'Social Proof' messaging templates. Actual results vary based on target quality and message personalization depth.",
      },
      {
        id: "results-2",
        question: "How quickly can I expect to see results?",
        answer:
          "Timeline: Days 1-3: Account warm-up phase (graduated activity increase). Days 4-7: Initial connections and profile views. Week 2: First responses and meetings booked. Week 3-4: Pipeline velocity acceleration. Most users generate 2-5 qualified opportunities in first 30 days. For fastest results: 1) Complete our Optimization Certification, 2) Leverage our Template Library, and 3) Enable Content Engagement features. Enterprise clients average 11.7 opportunities/month starting at day 45.",
      },
      {
        id: "results-3",
        question: "Do you offer performance guarantees?",
        answer:
          "Yes - our Pipeline Guarantee: If you follow our best practices (verified by onboarding specialist) and don't generate at least 3 qualified opportunities in first 60 days, we'll extend your service free until you do. Additional protections: Account Safety Warranty (if restricted by LinkedIn due to our tool, we provide $5,000 mitigation support), and Delivery SLA (99.9% uptime with service credits for outages). These guarantees require minimum 500 monthly connection attempts and use of approved messaging templates.",
      },
    ],
  },
];

export default function FAQsTwo() {
  const [search, setSearch] = useState("");

  // Flatten FAQs for search
  const allFaqs: FAQItem[] = useMemo(
    () =>
      faqSections.flatMap((section) =>
        section.items.map((item) => ({
          ...item,
          section: section.title,
        }))
      ),
    []
  );

  // Filter FAQs by search term
  const filteredFaqs: FAQItem[] = useMemo(() => {
    if (!search.trim()) return allFaqs;
    const term = search.toLowerCase();
    return allFaqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(term) ||
        faq.answer.toLowerCase().includes(term)
    );
  }, [search, allFaqs]);

  // Group filtered FAQs by section
  const groupedFaqs: Record<string, FAQItem[]> = useMemo(() => {
    const groups: Record<string, FAQItem[]> = {};
    filteredFaqs.forEach((faq) => {
      if (!groups[faq.section]) groups[faq.section] = [];
      groups[faq.section].push(faq);
    });
    return groups;
  }, [filteredFaqs]);

  const email = "vidit@leadseeder.co";
  const subject = "Request for a Meeting";
  const body =
    "Hello, I couldn't find a suitable time on your calendar. Can we schedule a meeting at a time convenient for you?";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-10 flex flex-col items-center">
          <div className="relative w-full max-w-lg">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={20}
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions..."
              className="w-full rounded-lg border px-10 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
          </div>
        </div>

        <div className="mt-12 space-y-16">
          {Object.keys(groupedFaqs).length === 0 && (
            <div className="text-center text-muted-foreground text-xl py-12">
              No matching questions found. Try a different search term.
            </div>
          )}

          {Object.entries(groupedFaqs).map(
            ([sectionTitle, items]: [string, FAQItem[]]) => (
              <div key={sectionTitle}>
                <h3 className="text-left text-3xl font-bold lg:text-4xl mb-4">
                  {sectionTitle}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {items.map((item) => (
                    <AccordionItem
                      key={item.id}
                      value={item.id}
                      className="border-b border-dashed py-4"
                    >
                      <AccordionTrigger className="cursor-pointer justify-start text-left text-2xl font-semibold hover:no-underline px-0 [&[data-state=open]>svg]:rotate-180">
                        <span className="mr-2 flex-1 text-left">
                          {item.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-0">
                        <p className="text-lg">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )
          )}

          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              Can&apos;t find what you&apos;re looking for? Contact our{" "}
              <a
                href={mailtoLink}
                className="text-primary font-medium hover:underline"
              >
                customer support team
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
