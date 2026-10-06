import React from "react";

const Dev: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-2xl text-center">
        {/* Icon */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-400/10 shadow-[0_0_60px_rgba(34,211,238,0.15)]">
          <svg
            className="h-12 w-12 text-cyan-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.42 15.17 17.25 9.34m-5.83 5.83L8.75 12.5m2.67 2.67L9.75 16.83M19.5 7.5l-3-3m0 0L13.5 1.5m3 3L19.5 7.5M5.25 21.75l3.5-3.5m-3.5 3.5L2.25 18.75m3 3 3.5-3.5"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.25 4.5 19.5 9.75 9.75 19.5a2.12 2.12 0 0 1-3 0l-2.25-2.25a2.12 2.12 0 0 1 0-3L14.25 4.5Z"
            />
          </svg>
        </div>

        {/* Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          Under Development
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Something Great
          <span className="block bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
            Is Coming Soon.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
          We&apos;re currently working behind the scenes to build something
          amazing. This page will be available soon.
        </p>

       

        {/* Footer */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-sm text-slate-500 sm:flex-row">
          <span>Thank you for your patience</span>
          <span className="hidden sm:block">•</span>
          <span>We&apos;ll be back soon</span>
        </div>
      </div>
    </div>
  );
};

export default Dev;