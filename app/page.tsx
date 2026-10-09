
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import BenefitsSection from "@/components/BenefitsSection";
import CompareOptions from "@/components/CompareOptions";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-7";
import LimitedAvailability from "@/components/LimitedAvailability";
import LogoCloud from "@/components/logo-cloud";
import { MacbookScrollDemo } from "@/components/MacbookScrollDemo";
import ProblemSolution from "@/components/ProblemSolution";
import QualifiedMeeting from "@/components/QualifiedMeeting";
import SomeFaq from "@/components/SomeFaq";
import StatsSection from "@/components/stats";
import Testimonials from "@/components/testimonials";
import { TimelineDemo } from "@/components/TimelineDemo";
import WhoWeAre from "@/components/WhoWeAre";
import VideoShowcase from "@/components/VideoShowcase";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VideoShowcase
        src="videos/video.mp4"
        poster="/images/poster.png"
      />
      {/* <MacbookScrollDemo /> */}
      <LogoCloud/>
      <ProblemSolution />
      <TimelineDemo />
      <QualifiedMeeting />
      <IntegrationsSection />
      <AuroraBackgroundDemo/>
      {/* <Testimonials /> */}
      <StatsSection />
      <BenefitsSection />
      <CompareOptions />
      <SomeFaq />
      <LimitedAvailability />
      <WhoWeAre />
      <FooterSection />
    </>
  );
}