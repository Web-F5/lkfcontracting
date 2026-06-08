import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/images/hero-bg.jpg"
          alt="Excavation equipment in action"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-40 flex flex-col items-center justify-center min-h-[600px]">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            Professional Agricultural & Civil Contracting
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed text-balance">
            20+ years of expertise delivering reliable, efficient contracting solutions for farms and properties across New South Wales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-base font-semibold"
              asChild
            >
              <a href="#contact">Get a Free Quote</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base font-semibold border-white text-white hover:bg-white/10"
              asChild
            >
              <a href="#about">Learn More</a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-1">20+</div>
              <div className="text-sm text-gray-200">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-1">500+</div>
              <div className="text-sm text-gray-200">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-1">100%</div>
              <div className="text-sm text-gray-200">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
