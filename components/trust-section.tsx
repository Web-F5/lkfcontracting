import { Award, Lightbulb, MapPin, TrendingDown } from 'lucide-react'
import Link from 'next/link'

export default function TrustSection() {
  const values = [
    {
      icon: Award,
      title: '20+ Years Experience',
      description: 'Two decades of proven expertise in agricultural and civil contracting'
    },
    {
      icon: Lightbulb,
      title: 'Expert Advice',
      description: 'Professional guidance on land preparation, equipment use, and project planning'
    },
    {
      icon: MapPin,
      title: 'Local Trust',
      description: 'Deep roots in the Goulburn Valley community with countless satisfied clients'
    },
    
  ]

  return (
    <section id="trust" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4 text-center text-balance">
          Why Choose LKF Contracting
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto text-lg">
          We bring experience, expertise, and genuine commitment to every project
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Icon className="w-12 h-12 text-pumpkin mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Link
            href="#contact"
            className="inline-block bg-golden text-charcoal px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors shadow-md"
          >
            Let&apos;s Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  )
}
