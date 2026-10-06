import CalWidget from "@/components/CalWidget";
import FooterSection from "@/components/footer";
import HeroCall from "@/components/HeroCall";
import Testimonials from "@/components/testimonials";

const BookCallHero = () => (
  <section className="relative bg-white dark:bg-black py-5 lg:py-8">
    <div className="absolute inset-0 bg-grid-gray-200 dark:bg-grid-gray-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
    
    <div className="relative max-w-6xl mx-auto px-4 md:px-6 text-center">

      
    </div>
  </section>
);

const PreFooterCTA = () => {
 
  const email = "vidit@leadseeder.co"; 
  const subject = "Request for a Meeting";
  const body = "Hello, I couldn't find a suitable time on your calendar. Can we schedule a meeting at a time convenient for you?";


  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section className="bg-white dark:bg-black py-8 lg:py-12">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
          Can't find a suitable time?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          No worries! Send us a message and we'll get back to you within 24 hours. 
          We're here to help and find a time that works for you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={mailtoLink}
            className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Send us an email
          </a>
        </div>
      </div>
    </section>
  );
};
export default function BookAcall() {
  return (
    <>
    <HeroCall/>
      <BookCallHero />
      <CalWidget />
      <PreFooterCTA />
      <Testimonials/>
      <FooterSection />
    </>
  );
}