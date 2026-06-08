import Image from 'next/image'
import Link from 'next/link'

export function ServiceDetails() {
  return (
    <>
      {/* GPS & Laser Landforming */}
      <section id="gps-laser" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 text-balance">
                GPS & Laser Landforming
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Precision is everything when it comes to land preparation. Our GPS and laser landforming services utilise the latest technology to prepare your land with unmatched accuracy, ensuring optimal drainage, slope, and field uniformity.
                </p>
                <p>
                  Whether you&apos;re preparing a paddock for irrigation, improving drainage on existing land, or developing a new property, our advanced equipment delivers results that traditional methods simply cannot match.
                </p>
                <h3 className="text-2xl font-bold text-charcoal mt-8 mb-4">Key Features:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-pumpkin font-bold">✓</span>
                    <span>Accuracy using GPS and laser technology</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pumpkin font-bold">✓</span>
                    <span>3D field grades for improved water management</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pumpkin font-bold">✓</span>
                    <span>Uniform paddock surfaces</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pumpkin font-bold">✓</span>
                    <span>Enhanced irrigation efficiency and crop establishment</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/laser-gps2.webp"
                alt="GPS & Laser Landforming"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hay Contracting Services */}
      <section id="hay-contracting" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="/images/inside-tractor.jpg"
                alt="Hay Contracting Services"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 text-balance">
                Hay Contracting Services
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Make hay when the sun shines and we&apos;ll help you make the best hay possible. Our comprehensive hay contracting services handle every aspect of your harvest, from cutting to baling and collection, ensuring premium-quality hay for your operation or sale.
                </p>
                <p>
                  With modern equipment and experienced operators, we deliver efficient, reliable hay making that minimises waste and maximises quality. We work around your schedule to meet tight weather windows.
                </p>
                <h3 className="text-2xl font-bold text-charcoal mt-8 mb-4">Services Include:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-pumpkin font-bold">✓</span>
                    <span>Double mower conditioning</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pumpkin font-bold">✓</span>
                    <span>Round and square baling options</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pumpkin font-bold">✓</span>
                    <span>Hay stacking and cartage</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pumpkin font-bold">✓</span>
                    <span>Weather-responsive scheduling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hay & Silage */}
      <section id="hay-silage" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 text-balance">
                Hay & Silage Production
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Quality feed is the foundation of healthy livestock. Our hay and silage production services ensure you have premium forage for winter feeding or year-round nutrition management. From harvesting through to storage, we maintain the highest standards.
                </p>
                <p>
                  Whether you prefer traditional hay or modern silage systems, our team has the expertise and equipment to produce feed that meets your livestock&apos;s nutritional requirements.
                </p>
                <h3 className="text-2xl font-bold text-charcoal mt-8 mb-4">Our Expertise:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-pumpkin font-bold">✓</span>
                    <span>Optimal harvest timing for maximum nutritional value</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pumpkin font-bold">✓</span>
                    <span>Moisture content monitoring and control</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pumpkin font-bold">✓</span>
                    <span>Preservation strategies</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/clover-cutting.jpeg"
                alt="Hay & Silage Production"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hay Steamer */}
      <section id="hay-steamer" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="/images/hay-making.jpeg"
                alt="Hay Steamer Service"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 text-balance">
                Hay Steaming Service
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Improve the nutritional value and digestibility of your hay through professional steaming. Our modern hay steaming equipment treats hay to reduce dust, improve palatability, and enhance nutritional outcomes for your livestock.
                </p>
                <p>
                  Steamed hay is particularly valuable for horses with respiratory sensitivities, young stock, and premium breeding animals. We deliver consistent quality processing that extends the usefulness of your feed stores.
                </p>
                <h3 className="text-2xl font-bold text-charcoal mt-8 mb-4">Benefits:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-pumpkin font-bold">✓</span>
                    <span>Reduced dust and improved respiratory health</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pumpkin font-bold">✓</span>
                    <span>Enhanced digestibility and nutritional uptake</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pumpkin font-bold">✓</span>
                    <span>Improved palatability for selective eaters</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pumpkin font-bold">✓</span>
                    <span>Pest and pathogen reduction through heat treatment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drone Spraying & Spreading */}
      <section id="drone-spraying" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 text-balance">
                Drone Spraying & Spreading
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Precision agriculture meets modern technology. Our agricultural drone services deliver targeted spraying and spreading operations with accuracy and efficiency impossible to achieve with traditional methods. Perfect for paddocks of any size or terrain difficulty.
                </p>
                <p>
                  Whether you need to apply fertilisers, pest control products, or herbicides, our drone services provide precise application, reduced chemical usage, and minimal environmental impact.
                </p>
                <h3 className="text-2xl font-bold text-charcoal mt-8 mb-4">Applications:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-pumpkin font-bold">✓</span>
                    <span>Liquid fertiliser application</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pumpkin font-bold">✓</span>
                    <span>Granular spreader application</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pumpkin font-bold">✓</span>
                    <span>Precise pesticide and herbicide application</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pumpkin font-bold">✓</span>
                    <span>Difficult-to-access paddock coverage</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pumpkin font-bold">✓</span>
                    <span>Real-time operational monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/drone-spraying.jpg"
                alt="Drone Spraying & Spreading"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tillage & Seeding */}
      <section id="tillage" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="/images/bulk-earthmoving.jpeg"
                alt="Tillage & Seeding Services"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 text-balance">
                Tillage & Seeding
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Quality crop establishment starts with proper soil preparation. Our tillage and seeding services create the ideal seedbed for your crops, whether you&apos;re planting cereals, pastures, or other agricultural commodities.
                </p>
                <p>
                  We utilise modern equipment to prepare soil, manage stubble, and establish crops with precision. Our operators understand the importance of timing, soil conditions, and technique in achieving optimal results.
                </p>
                <h3 className="text-2xl font-bold text-charcoal mt-8 mb-4">Services Include:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-pumpkin font-bold">✓</span>
                    <span>Soil cultivation and seedbed preparation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pumpkin font-bold">✓</span>
                    <span>Stubble management and incorporation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pumpkin font-bold">✓</span>
                    <span>Precision direct seeding operations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pumpkin font-bold">✓</span>
                    <span>Pasture renovation and reseeding</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pumpkin font-bold">✓</span>
                    <span>Crop monitoring and establishment assurance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
