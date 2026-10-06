import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function LogoCloud() {
    return (
        <section className="bg-background overflow-hidden py-16">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">Trusted by +1K happy users among top-performing companies</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={96}  /* Reduced gap for better spacing with larger logos */
                        >
                           
                            <div className="flex items-center justify-center h-30 w-30">  {/* h-30 = 7.5rem (120px) */}
                                <img
                                    className="max-h-24 max-w-24 object-contain dark:filter dark:brightness-0 dark:invert"  /* max-h-24 = 6rem (96px) */
                                    src="/images/image1.png"
                                    alt="Partner logo"
                                />
                            </div>

                            <div className="flex items-center justify-center h-34 w-34">
                                <img
                                    className="max-h-28 max-w-28 object-contain dark:filter dark:brightness-0 dark:invert"
                                    src="/images/image2.png"
                                    alt="Partner logo"
                                />
                            </div>
                            
                            <div className="flex items-center justify-center h-38 w-38">
                                <img
                                    className="max-h-32 max-w-32 object-contain dark:filter dark:brightness-0 dark:invert"
                                    src="/images/image3.png"
                                    alt="Partner logo"
                                />
                            </div>
                            
                            <div className="flex items-center justify-center h-30 w-30">
                                <img
                                    className="max-h-24 max-w-24 object-contain dark:filter dark:brightness-0 dark:invert"
                                    src="/images/image4.png"
                                    alt="Partner logo"
                                />
                            </div>
                            
                            <div className="flex items-center justify-center h-30 w-30">
                                <img
                                    className="max-h-24 max-w-24 object-contain dark:filter dark:brightness-0 dark:invert"
                                    src="/images/image6.png"
                                    alt="Partner logo"
                                />
                            </div>
                            
                            
                            <div className="flex items-center justify-center h-30 w-30">
                                <img
                                    className="max-h-24 max-w-24 object-contain dark:filter dark:brightness-0 dark:invert"
                                    src="/images/image8.png"
                                    alt="Partner logo"
                                />
                            </div>
                            
                            <div className="flex items-center justify-center h-30 w-30">
                                <img
                                    className="max-h-24 max-w-24 object-contain dark:filter dark:brightness-0 dark:invert"
                                    src="/images/image9.png"
                                    alt="Partner logo"
                                />
                            </div>
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}