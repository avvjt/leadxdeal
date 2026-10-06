import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import FooterSection from "@/components/footer";
import PricingComparator from "@/components/pricing-comparator";
import SomeFaq from "@/components/SomeFaq";
import Testimonials from "@/components/testimonials";


export default function Pricing() {
  return (
    <>
    <PricingComparator/>
    <AuroraBackgroundDemo/>
    <Testimonials/>
    <SomeFaq/>
    <FooterSection/>
    </>
  );
}
