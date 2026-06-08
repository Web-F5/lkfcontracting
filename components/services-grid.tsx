import Image from 'next/image'
import Link from 'next/link'

export function ServicesGrid() {
  const services = [
    {
      id: 'gps-laser',
      title: 'GPS & Laser Landforming',
      description: 'Precision land preparation using advanced technology for optimal results',
      image: '/images/gps-laser.jpg',
    },
    {
      id: 'hay-contracting',
      title: 'Hay Contracting Services',
      description: 'Complete hay harvesting solutions tailored to your operation',
      image: '/images/tractor-with-round-bail.jpg',
    },
    {
      id: 'hay-steamer',
      title: 'Hay Steamer',
      description: 'Treat hay for enhanced nutritional content and quality',
      image: '/images/hay-making.jpeg',
    },
    {
      id: 'drone-spraying',
      title: 'Drone Spraying & Spreading',
      description: 'Modern precision application technology for spraying and spreading',
      image: '/images/drone_prepared.webp',
    },
    {
      id: 'tillage',
      title: 'Tillage & Seeding',
      description: 'Professional soil preparation and seeding services for optimal crop establishment',
      image: '/images/tillage.webp',
    },
  ]

  return (
    <>
    <section id="services" className="py-20 bg-frostedmint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4 text-center text-balance">
          Our Services
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto text-lg">
          Comprehensive agricultural and civil contracting solutions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`#${service.id}`}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-pumpkin transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <span className="inline-block text-pumpkin font-semibold group-hover:translate-x-1 transition-transform">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  
    {/* CTA Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Contact LKF Contracting today to discuss your project requirements
          </p>
          <Link
            href="#contact"
            className="inline-block bg-golden text-charcoal px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
