import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArtDirectedImage } from '@/components/art-directed-image'
import { MediaGallery, type MediaItem } from '@/components/media-gallery'

const IMG = '/images/Laser-&-GPS-Landforming'
const photo = (n: string) => `${IMG}/Laser-&-GPS-Landforming-${n}.webp`

const title = 'Laser & GPS Landforming | LKF Contracting'
const description =
  'GPS landforming, dryland landforming and full project management for irrigation layouts, laneways, channel pads and storage dams across Victoria.'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'GPS Landforming',
    'Dryland Landforming',
    'Laser Landforming',
    'irrigation layouts',
    'LKF Contracting',
    'Invergordon',
    'Victoria',
  ],
  openGraph: {
    title,
    description,
    url: 'https://lkfcontracting.com.au/laser-gps-landforming/',
    type: 'website',
    images: [
      {
        url: `https://lkfcontracting.com.au${photo('04').replaceAll('&', '%26')}`,
      },
    ],
  },
}

const heroPoints = [
  'Irrigation layouts',
  'Laneways and channel pads',
  'Storage and recycle dams',
  'Ripping',
  'Discing',
]

const laserOrGps = [
  'Ability to put farm plan layout from Surveyor into GPS guidance',
  'Grade multiple grade bays in one single pass',
  'Reduce the amount of earthworks with GPS',
  'Drainage for centre pivots and lateral move irrigators',
  'Traditional laser grading available',
]

const dryland = [
  'Convert height data from tractors and harvesters to create survey maps',
  'Design drainage to minimise earthworks and eliminate water ponding',
]

const projectManagement = [
  'From start to finish of project – providing full turnkey handover',
  'Road grader for channels and laneways',
  'Excavator for drainage and installation of bay outlets and culverts',
  'Tractors and buckets for landforming',
]

const beforeAfter = [
  {
    label: 'Before',
    src: `${IMG}/3d_T3D_view_survey (BEFORE).webp`,
    alt: '3D surface model of the paddock from the original survey',
  },
  {
    label: 'After',
    src: `${IMG}/3d_T3D_view_design (AFTER).webp`,
    alt: '3D surface model of the paddock with the landforming design applied',
  },
]

const faqs = [
  {
    q: 'What is landforming and why is it done?',
    a: 'Landforming reshapes the surface of a paddock to a designed grade so water moves across the land in a controlled, even way. It improves irrigation efficiency and drainage, removes low spots where water ponds, and creates a more uniform paddock for crop establishment and machinery.',
  },
  {
    q: 'What is the difference between laser and GPS landforming?',
    a: 'Laser grading uses a laser transmitter to set a flat reference plane that the scraper follows, which suits simple, single-slope grades. GPS landforming follows a 3D design using satellite positioning, so it can handle complex or varying grades, work across multiple bays in a single pass, and does not rely on line of sight. We offer both, so we can match the method to your paddock.',
  },
  {
    q: 'Can you work from my surveyor’s plan?',
    a: 'Yes. A farm plan layout prepared by your surveyor can be loaded straight into the GPS guidance system, so the earthworks are built to the design. If you don’t have a plan, we can help with survey data and design.',
  },
  {
    q: 'Is landforming only for irrigated land?',
    a: 'No. Dryland landforming is about managing surface water. Height data from tractors and harvesters can be converted into survey maps, and the drainage is then designed to minimise earthworks and eliminate water ponding.',
  },
  {
    q: 'How does GPS landforming reduce the amount of earthworks?',
    a: 'A GPS design works from the paddock’s existing surface, so the finished grades can be planned to balance cut and fill and to move only the soil that is needed. Less soil moved generally means less machine time and less disturbance to the paddock.',
  },
  {
    q: 'Can landforming fix water ponding and waterlogging?',
    a: 'In most cases, yes. Designing the grades and drainage so water has somewhere to go removes the low areas where it pools. We can also provide drainage for centre pivots and lateral move irrigators.',
  },
  {
    q: 'What does full project management include?',
    a: 'We look after the project from start to finish and provide a full turnkey handover. That includes a road grader for channels and laneways, an excavator for drainage and for installing bay outlets and culverts, and tractors with buckets for the landforming itself.',
  },
  {
    q: 'How do I get started, and when is the best time to do the work?',
    a: 'Call 0403 767 542 or send us a message through the contact form with your location, paddock size, how you plan to use the land and any existing plans or surveys. Landforming is generally best done when the ground is dry and workable, such as after harvest and before the next crop or irrigation season, and we can advise on timing for your property.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const galleryItems: MediaItem[] = [
  { type: 'image', src: photo('04'), alt: 'John Deere tractor and landforming equipment at sunset' },
  { type: 'image', src: photo('02'), alt: 'Close-up of a John Deere tractor working at night' },
  { type: 'image', src: photo('05'), alt: 'Tractor facing the camera at sunset in a worked paddock' },
  { type: 'image', src: photo('06'), alt: 'Tractor and landforming equipment lit up at dusk' },
  { type: 'image', src: photo('07'), alt: 'Tractor on landformed ground at sunset' },
  { type: 'image', src: photo('08'), alt: 'Tractor kicking up dust while landforming' },
  { type: 'image', src: photo('09'), alt: 'Tractor towing landforming equipment across levelled ground' },
  { type: 'image', src: photo('10'), alt: 'John Deere tractor with landforming scraper and GPS mast' },
  { type: 'image', src: photo('11'), alt: 'Aerial view of a tractor landforming a paddock' },
  { type: 'image', src: photo('01'), alt: 'John Deere tractor and landforming equipment at dusk' },
  { type: 'image', src: photo('03'), alt: 'Tractor wheels and landforming equipment at sunset' },
  {
    type: 'video',
    src: `${IMG}/video/DJI_0037.MOV`,
    poster: `${IMG}/video/DJI_0037-poster.webp`,
    alt: 'Drone footage of landforming in progress',
  },
  {
    type: 'video',
    src: `${IMG}/video/2259F9A3-21C9-4259-ABBF-9D3B13007C56.mp4`,
    poster: `${IMG}/video/2259F9A3-21C9-4259-ABBF-9D3B13007C56-poster.webp`,
    alt: 'Landforming in progress',
  },
]

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="text-pumpkin font-bold">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function LaserGpsLandformingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative w-full overflow-hidden">
          <div className="absolute inset-0">
            <ArtDirectedImage
              desktopSrc={photo('04')}
              mobileSrc={photo('01')}
              alt="John Deere tractor and landforming equipment at sunset"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36 min-h-[32rem] md:min-h-[36rem] flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance">
              Laser & GPS Landforming
            </h1>
            <ul className="flex flex-wrap justify-center gap-3 mb-10">
              {heroPoints.map((point) => (
                <li
                  key={point}
                  className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-base md:text-lg font-medium backdrop-blur-sm"
                >
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/#contact"
              className="inline-block bg-golden text-charcoal px-8 py-2 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg"
            >
              Get in Touch Today
            </Link>
          </div>
        </section>

        {/* Laser or GPS */}
        <section id="laser-or-gps" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 text-balance">
                  Laser or GPS
                </h2>
                <CheckList items={laserOrGps} />
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={`${IMG}/Dookie_GoogleEarth_ContourPlan_Example.webp`}
                  alt="Contour plan of a paddock overlaid on satellite imagery"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dryland Landforming */}
        <section id="dryland-landforming" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg order-2 lg:order-1">
                <Image
                  src={photo('11')}
                  alt="Aerial view of a tractor landforming a paddock"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 text-balance">
                  Dryland Landforming
                </h2>
                <CheckList items={dryland} />
              </div>
            </div>
          </div>
        </section>

        {/* Full Project Management */}
        <section id="full-project-management" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 text-balance">
                  Full Project Management
                </h2>
                <CheckList items={projectManagement} />
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={photo('10')}
                  alt="John Deere tractor with landforming scraper and GPS mast"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Before & After */}
        <section id="before-after" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-10 text-center text-balance">
              Before & After
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {beforeAfter.map(({ label, src, alt }) => (
                <figure key={label}>
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-contain"
                    />
                  </div>
                  <figcaption className="mt-4 text-center text-2xl font-bold text-charcoal">
                    {label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-10 text-center text-balance">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map(({ q, a }) => (
                <details
                  key={q}
                  className="group rounded-lg border border-gray-200 bg-white shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-lg font-semibold text-charcoal [&::-webkit-details-marker]:hidden">
                    {q}
                    <ChevronDown
                      size={20}
                      className="shrink-0 text-pumpkin transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <p className="px-5 pb-5 text-gray-700 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-10 text-center text-balance">
              Gallery
            </h2>
            <MediaGallery items={galleryItems} label="Landforming photos and videos" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
