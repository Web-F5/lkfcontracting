import { Award, Zap, Shield, Target } from 'lucide-react'
import { Card } from '@/components/ui/card'

export function Values() {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We deliver exceptional work that exceeds industry standards with meticulous attention to detail.',
    },
    {
      icon: Zap,
      title: 'Efficiency & Speed',
      description: 'Our streamlined processes ensure projects are completed on time and on budget, every time.',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We maintain the highest safety standards to protect our team, clients, and the environment.',
    },
    {
      icon: Target,
      title: 'Reliability',
      description: 'Count on us to deliver consistent, dependable service that you can trust for years to come.',
    },
  ]

  return (
    <section id="values" className="w-full py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Commitment to Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our core values drive everything we do, ensuring you receive the best contracting services available.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card
                key={index}
                className="p-6 border-border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to experience the LKF difference?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  )
}
