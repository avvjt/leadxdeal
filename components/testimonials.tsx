import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-4xl font-medium lg:text-5xl">
           It works for everyone. Including you
          </h2>
          <p>
            Trusted by more than 1,000+ users in almost every industry and country.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
            <CardHeader>
              {/* <img
                className="h-10 w-fit dark:invert"
                // src="/images/seed.png"
                // alt="Nike Logo"
                height="24"
                width="auto"
              /> */}
            </CardHeader>
            <CardContent>
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-lg font-medium">
                What truly impressed me was how naturally Leadseeder helped us connect with prospects on LinkedIn—without ever feeling pushy or salesy. Before scheduling a demo, the team actually reached out to me using their own automation solution, and the entire process felt unusually authentic and relevant. Unlike other tools that bombard connections with generic messages, Leadseeder enabled a sequence that felt personal and thoughtful every step of the way.

The workflow is remarkably low-key: it prioritizes building real relationships over just pushing for a sale. This approach resonated so well that prospects responded much more openly, and it made our lead generation efforts feel more human. The ROI for our company has honestly exceeded all expectations—we closed a major enterprise client within the first month of implementation.


                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/shekinah.webp"
                      alt="Chirag Gupta"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>CG</AvatarFallback>
                  </Avatar>

                  <div>
                    <cite className="text-sm font-medium">
                      Chirag Gupta
                    </cite>
                    <span className="text-muted-foreground block text-sm">
                      CEO & CTO @BoloSign
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-lg font-medium">
                Leadseeder has truly transformed the way I generate leads and build my network on LinkedIn. I’ve been using it for six months, and it has significantly improved my outreach and expanded my professional connections. In my opinion, it’s the best budget-friendly alternative to Waalaxy and stands out compared to all the other expensive LinkedIn automation tools I’ve tried.
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/jonathan.webp"
                      alt="AL Mehdi"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">Al Mehdi</cite>
                    <span className="text-muted-foreground block text-sm">
                      Agency Owner DigiVibes
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  Love the software! Very easy to use and helps my led gen for my
                  marketing agency a ton. Their customer success team did a great job in helping
                  me navigate the product and helping me with my many questions.
                </p>

                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/yucel.webp"
                      alt="Eve Chan"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>EC</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">
                      Eve Chan
                    </cite>
                    <span className="text-muted-foreground block text-sm">
                      Founder, Growth Machine
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="card variant-mixed">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  A very robust automation layer has been set up on top of LI.
                  Excellent service and support team. They have been proactive
                  in figuring solutions to LI's problems and even for us when we
                  faced any challenges.
                </p>

                <div className="grid grid-cols-[auto_1fr] gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/rodrigo.webp"
                      alt="Muhammad Junaid"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Muhammad Junaid</p>
                    <span className="text-muted-foreground block text-sm">
                      Sales Manager, ikonicdev
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}