'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

type GalleryItem = {
  type: 'image' | 'video'
  src: string
  alt: string
}

const galleryItems: GalleryItem[] = [
  {
    type: 'image',
    src: '/images/Gallery/drone-spraying/drone-spraying-03.webp',
    alt: 'Agricultural drone spraying a paddock',
  },
  {
    type: 'image',
    src: '/images/Gallery/drone-spraying/drone-spraying-01.webp',
    alt: 'Drone spraying and spreading service',
  },
  {
    type: 'image',
    src: '/images/Gallery/drone-spraying/drone-spraying-02.webp',
    alt: 'Drone spraying and spreading service',
  },
  {
    type: 'image',
    src: '/images/Gallery/drone-spraying/drone-spraying-04.webp',
    alt: 'Drone spraying and spreading service',
  },
  {
    type: 'video',
    src: '/images/Gallery/drone-spraying/drone-spraying-05.mov',
    alt: 'Drone spraying and spreading in action',
  },
]

export function DroneGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = galleryItems[activeIndex]

  return (
    <div>
      <div className="relative h-96 rounded-lg overflow-hidden shadow-lg bg-gray-900">
        {active.type === 'image' ? (
          <Image
            src={active.src}
            alt={active.alt}
            fill
            className="object-cover"
          />
        ) : (
          <video
            key={active.src}
            src={active.src}
            controls
            autoPlay
            className="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <div className="grid grid-cols-5 gap-3 mt-3">
        {galleryItems.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={item.type === 'video' ? 'Play drone spraying video' : `Show image ${index + 1}`}
            aria-current={index === activeIndex}
            className={`relative h-16 sm:h-20 rounded-md overflow-hidden shadow-sm border-2 transition-colors ${
              index === activeIndex ? 'border-pumpkin' : 'border-transparent hover:border-pumpkin/50'
            }`}
          >
            {item.type === 'image' ? (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <Play className="w-6 h-6 text-white" fill="currentColor" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
