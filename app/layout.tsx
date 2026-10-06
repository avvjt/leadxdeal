import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../app/globals.css";
import { HeroHeader } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leadseeder",
  description: "Automate LinkedIn connection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Microsoft Clarity */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "mr5slkrl82");`,
          }}
        />

        {/* Intercom Settings */}
        <Script
          id="intercom-settings"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.intercomSettings = {
                api_base: "https://api-iam.intercom.io",
                app_id: "d5xaul0z"
              };
            `,
          }}
        />

        {/* Intercom Loader */}
        <Script
          id="intercom-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var w=window;
                var ic=w.Intercom;
                if(typeof ic==="function"){
                  ic('reattach_activator');
                  ic('update',w.intercomSettings);
                } else {
                  var d=document;
                  var i=function(){i.c(arguments);};
                  i.q=[];
                  i.c=function(args){i.q.push(args);};
                  w.Intercom=i;
                  var l=function(){
                    var s=d.createElement('script');
                    s.type='text/javascript';
                    s.async=true;
                    s.src='https://widget.intercom.io/widget/d5xaul0z';
                    var x=d.getElementsByTagName('script')[0];
                    x.parentNode.insertBefore(s,x);
                  };
                  if(document.readyState==='complete'){
                    l();
                  } else if(w.attachEvent){
                    w.attachEvent('onload',l);
                  } else {
                    w.addEventListener('load',l,false);
                  }
                }
              })();
            `,
          }}
        />

        {/* Your App Layout */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed top-0 left-0 right-0 z-50">
            <HeroHeader />
          </div>
          <div className="pt-24">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
