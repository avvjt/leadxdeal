import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Cover } from "./ui/cover";

export function TimelineDemo() {
  const data = [
    {
      title: "Step 1: Import Prospects",
      content: (
        <div>
          <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            Import ideal LinkedIn prospects with one click
          </h3>
          <p className="mb-4 text-lg font-normal text-neutral-700 md:text-xl dark:text-neutral-300">
          Automatically gather leads from an 850M+ LinkedIn profiles database.
          </p>
          <ul className="mb-6 ml-5 list-disc text-base text-neutral-600 md:text-lg dark:text-neutral-300">
            <li>Pull prospects from LinkedIn Search, Groups, Events, and Connections.</li>
            <li>Support Sales Navigator, LinkedIn Recruiter, and Business Premium.</li>
            <li>Upload CSV files of LinkedIn profiles or sync CRM lists. </li>
            {/* <li>Integrate via API with CRMs and marketing tools like Sendspark.</li> */}
          </ul>
          <div className="grid grid-cols-1">
            <img
              src="https://i.postimg.cc/tCcDLMyT/Frame-3.jpg"
              alt="Prospect import dashboard"
              className="w-full rounded-xl border object-cover shadow-lg md:h-96"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step 2: Manage Leads",
      content: (
        <div>
          <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
             Access your Leadseeder dashboard 
          </h3>
          <p className="mb-4 text-lg font-normal text-neutral-700 md:text-xl dark:text-neutral-300">
          Tag, filter, and export your leads for targeted LinkedIn automation campaigns.
          </p>
          <ul className="mb-6 ml-5 list-disc text-base text-neutral-600 md:text-lg dark:text-neutral-300">
            <li>Filter prospects by status or action, and remove unwanted contacts.</li>
            {/* <li>Add or remove custom tags for precise prospecting.</li> */}
            <li>Merge, move, or delete lists quickly with one click.</li>
            <li>Export prospect lists seamlessly for easy CRM integration.</li>
          </ul>
          <div className="grid grid-cols-1">
            <img
              src="https://i.postimg.cc/jdyLbWY7/Frame-4-2.jpg"
              alt="Campaign dashboard"
              className="w-full rounded-xl border object-cover shadow-lg md:h-96"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step 3: Create Campaign",
     content: (
        <div>
          <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
          Choose Your Prospect List and add actions
          </h3>
          <p className="mb-4 text-lg font-normal text-neutral-700 md:text-xl dark:text-neutral-300">
          Create powerful LinkedIn automation campaigns with actions visits, connection requests, and personalized messaging.


          </p>
          <ul className="mb-6 ml-5 list-disc text-base text-neutral-600 md:text-lg dark:text-neutral-300">
            <li>Select a prospect list from your imported and managed leads.</li>
            <li>Add actions such as visits, invitations, delays and messages.</li>
            <li>Use 5+ dynamic variables like first name and company for personalization.</li>
            {/* <li>Generate personalized message templates with Lumina AI assistant.</li> */}
          </ul>
          <div className="grid grid-cols-1">
            <img
              src="https://i.postimg.cc/Z55235zM/Frame-7.jpg"
              alt="Personalization interface"
              className="w-full rounded-xl border object-cover shadow-lg md:h-96"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step 4: Launch & Automate",
      content: (
        <div>
          <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
          Launch Campaigns and Automate Your Outreach
          </h3>
          <p className="mb-4 text-lg font-normal text-neutral-700 md:text-xl dark:text-neutral-300">
          Monitor performance, adjust limits, and scale team collaboration.
          </p>
          <ul className="mb-6 ml-5 list-disc text-base text-neutral-600 md:text-lg dark:text-neutral-300">
            <li>Review real-time analytics including acceptance rate and reply rates.</li>
            <li>Update daily activity limits to stay within safe LinkedIn outreach levels.</li>
            {/* <li>Inbuilt algorithm to mimic human behavior and keep your account safe.</li> */}
            <li>Invite up to 20 team members and expand your LinkedIn outreach at scale.</li>
          </ul>
          <div className="grid grid-cols-1">
            <img
              src="https://i.postimg.cc/L8FBKyNB/Frame-5-2.jpg"
              alt="Automation dashboard"
              className="w-full rounded-xl border object-cover shadow-lg md:h-96"
            />
          </div>
          <div className="mt-8 rounded-xl bg-gradient-to-r from-black to-black p-6 text-white shadow-xl">
            <h4 className="mb-3 text-xl font-bold md:text-2xl">
              Results You Can Expect from single LinkedIn account
            </h4>
            <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
              <div>
                <p className="text-3xl font-bold md:text-4xl">63%</p>
                <p className="text-sm">Avg. Connection rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold md:text-4xl">28%</p>
                <p className="text-sm">Avg. Reply rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold md:text-4xl">200+</p>
                <p className="text-sm">Conversations</p>
              </div>
              <div>
                <p className="text-3xl font-bold md:text-4xl">18hr</p>
                <p className="text-sm">Weekly Saved</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="relative w-full overflow-clip py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
             
          </h2>

          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Automate LinkedIn Outreach & Convert Prospects to Customers <br /> in <Cover>4 Simple Steps</Cover>
                </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          The simplest LinkedIn automation tool on the market that turns your LinkedIn into a lead generation machine.
          </p>
        </div>
        <Timeline data={data} />
      </div>
    </div>
  );
}