import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
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
              <div className="relative h-[28rem] md:h-96 rounded-lg overflow-hidden shadow-lg">
                <ArtDirectedImage
                  desktopSrc={photo('06')}
                  mobileSrc={photo('03')}
                  alt="Tractor and landforming equipment lit up at dusk"
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
