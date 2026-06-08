import { Check } from 'lucide-react'
import Image from 'next/image'

export function About() {
  const strengths = [
    'Expert team with 20+ years combined experience',
    'State-of-the-art equipment and technology',
    'Comprehensive range of services available',
    'Competitive pricing and flexible scheduling',
    'Environmental and safety compliant operations',
    'Dedicated customer support and service',
  ]

  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Image */}
          <div className="relative order-2 md:order-1">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about-equipment.jpg"
                alt="LKF Contracting equipment"
                fill
                className="object-cover"
              />
            </div>
            {/* Accent element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-lg" />
          </div>

          {/* Right - Content */}
          <div className="order-1 md:order-2">
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
                About LKF Contracting
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Trusted Partner for Over 20 Years
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                LKF Contracting is a leading provider of agricultural and civil contracting services in New South Wales. Our commitment to quality, reliability, and customer satisfaction has made us the preferred choice for farmers and property developers.
              </p>
            </div>

            {/* Strengths List */}
            <div className="space-y-3 mb-8">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-foreground font-medium">{strength}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
