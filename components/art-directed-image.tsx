import { getImageProps, type ImageProps } from 'next/image'

type ArtDirectedImageProps = {
  desktopSrc: string
  mobileSrc: string
  alt: string
  breakpoint?: number
  sizes?: string
  priority?: boolean
  className?: string
}

export function ArtDirectedImage({
  desktopSrc,
  mobileSrc,
  alt,
  breakpoint = 768,
  sizes = '100vw',
  priority,
  className,
}: ArtDirectedImageProps) {
  const common: Omit<ImageProps, 'src'> = {
    alt,
    fill: true,
    sizes,
    className,
    loading: priority ? 'eager' : undefined,
    fetchPriority: priority ? 'high' : undefined,
  }
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, src: desktopSrc })
  const {
    props: { srcSet: mobileSrcSet, ...img },
  } = getImageProps({ ...common, src: mobileSrc })

  return (
    <picture>
      <source
        media={`(min-width: ${breakpoint}px)`}
        srcSet={desktopSrcSet}
        sizes={sizes}
      />
      <source srcSet={mobileSrcSet} sizes={sizes} />
      <img {...img} />
    </picture>
  )
}
