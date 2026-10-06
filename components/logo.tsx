import { cn } from '../lib/utils'
import Image from 'next/image'

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-[1px]", className)}>

      <div className="relative h-8 w-8">
        <Image
          src="/images/seedd.png"
          alt=""
          fill
          className="object-contain"
          aria-hidden="true"
        />
      </div>
      <div className="relative w-[120px] h-10">
        <Image
          src="/images/leadsvg.svg"
          alt="Leadseeder"
          fill
          className="object-contain dark:brightness-0 dark:invert"
        />
      </div>
    </div>
  )
}
export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative size-8", className)}>
      <Image
        src="/images/seedd.png"
        alt="Icon"
        fill
        className="object-contain"
      />
    </div>
  )
}