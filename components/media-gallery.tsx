'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

export type MediaItem = {
  type: 'image' | 'video'
  src: string
  alt: string
  poster?: string
}

export function MediaGallery({ items, label }: { items: MediaItem[]; label: string }) {
  const [index, setIndex] = useState(0)
  const thumbsRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)
  const active = items[index]

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + items.length) % items.length),
    [items.length],
  )

  useEffect(() => {
    const strip = thumbsRef.current
    const thumb = strip?.children[index] as HTMLElement | undefined
    if (!strip || !thumb) return
    strip.scrollTo({
      left: thumb.offsetLeft - (strip.clientWidth - thumb.clientWidth) / 2,
      behavior: 'smooth',
    })
  }, [index])

  // Swipe is image-only so scrubbing a video's seek bar doesn't change slides.
  const swipeHandlers =
    active.type === 'image'
      ? {
          onTouchStart: (e: React.TouchEvent) => {
            touchStartX.current = e.touches[0].clientX
          },
          onTouchEnd: (e: React.TouchEvent) => {
            if (touchStartX.current === null) return
            const dx = e.changedTouches[0].clientX - touchStartX.current
            touchStartX.current = null
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
          },
        }
      : {}

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') go(-1)
        if (e.key === 'ArrowRight') go(1)
      }}
    >
      <div
        className="relative aspect-video rounded-lg overflow-hidden shadow-lg bg-charcoal"
        {...swipeHandlers}
      >
        {active.type === 'image' ? (
          <Image
            key={active.src}
            src={active.src}
            alt={active.alt}
            fill
            sizes="(min-width: 1280px) 1152px, 100vw"
            className="object-contain"
          />
        ) : (
          <video
            key={active.src}
            src={active.src}
            controls
            playsInline
            preload="none"
            poster={active.poster}
            aria-label={active.alt}
            className="absolute inset-0 w-full h-full object-contain bg-black"
          />
        )}

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
        <div
          aria-live="polite"
          className="absolute right-3 top-3 rounded bg-black/50 px-2 py-1 text-xs font-medium text-white"
        >
          {index + 1} / {items.length}
        </div>
      </div>

      <div ref={thumbsRef} className="relative mt-3 flex gap-3 overflow-x-auto pb-2">
        {items.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show ${item.type} ${i + 1} of ${items.length}`}
            aria-current={i === index}
            className={`relative h-16 w-24 sm:h-20 sm:w-32 shrink-0 rounded-md overflow-hidden border-2 bg-charcoal transition-colors ${
              i === index ? 'border-pumpkin' : 'border-transparent hover:border-pumpkin/50'
            }`}
          >
            {item.type === 'image' ? (
              <Image
                src={item.src}
                alt=""
                fill
                sizes="128px"
                className="object-cover"
              />
            ) : (
              <>
                {item.poster && (
                  <Image
                    src={item.poster}
                    alt=""
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <Play className="w-6 h-6 text-white" fill="currentColor" />
                </div>
              </>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
