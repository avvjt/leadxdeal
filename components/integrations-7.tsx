import { LogoIcon } from '@/components/logo'
import { cn } from '@/lib/utils'
import { InfiniteSlider } from '@/components/infinite-slider'
import Image from 'next/image'

export default function IntegrationsSection() {
  const logos = [
    '/images/hubspot.png',
    '/images/sendspark.png',
    '/images/pipedrive.png',
    '/images/sheet.png',
    '/images/salesforce.png',
  ];
  

  const row1 = [logos[0], logos[1], logos[2], logos[3], logos[4]];
  const row2 = [logos[3], logos[4], logos[1], logos[0], logos[2]];
  const row3 = [logos[4], logos[0], logos[3], logos[1], logos[2]];

 return (
    <section>
      <div className="bg-background dark:bg-background py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="bg-muted/25 group relative mx-auto max-w-[22rem] items-center justify-between space-y-6 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] sm:max-w-md">
            {/* Background grid */}
            <div
              role="presentation"
              className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"></div>
            
            {/* Row 1 */}
            <div>
              <InfiniteSlider gap={45} speed={20} speedOnHover={10}>
                {row1.map((src, index) => (
                  <IntegrationCard key={index}>
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={src}
                        alt="Integration logo"
                        fill
                        className="object-cover" // Changed to cover
                        unoptimized
                      />
                    </div>
                  </IntegrationCard>
                ))}
              </InfiniteSlider>
            </div>

            {/* Row 2 */}
            <div>
              <InfiniteSlider gap={45} speed={20} speedOnHover={10} reverse>
                {row2.map((src, index) => (
                  <IntegrationCard key={index}>
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={src}
                        alt="Integration logo"
                        fill
                        className="object-cover" // Changed to cover
                        unoptimized
                      />
                    </div>
                  </IntegrationCard>
                ))}
              </InfiniteSlider>
            </div>
            
            {/* Row 3 */}
            <div>
              <InfiniteSlider gap={45} speed={20} speedOnHover={10}>
                {row3.map((src, index) => (
                  <IntegrationCard key={index}>
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={src}
                        alt="Integration logo"
                        fill
                        className="object-cover" // Changed to cover
                        unoptimized
                      />
                    </div>
                  </IntegrationCard>
                ))}
              </InfiniteSlider>
            </div>
            
            {/* Center Logo */}
            <div className="absolute inset-0 m-auto flex size-fit justify-center gap-2">
              <IntegrationCard
                className="shadow-black-950/10 size-16 bg-white/25 shadow-xl backdrop-blur-md backdrop-grayscale dark:border-white/10 dark:shadow-white/15"
                isCenter={true}>
                <LogoIcon />
              </IntegrationCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const IntegrationCard = ({ 
  children, 
  className, 
  isCenter = false 
}: { 
  children: React.ReactNode; 
  className?: string; 
  isCenter?: boolean 
}) => {
  return (
    <div className={cn(
      'bg-background relative z-20 flex size-12 rounded-full border overflow-hidden',
      className
    )}>
      <div className={cn(
        'm-auto size-full flex items-center justify-center',
        isCenter && 'p-2'
      )}>
        {children}
      </div>
    </div>
  )
}