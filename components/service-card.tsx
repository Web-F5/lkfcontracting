import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  icon?: React.ReactNode
  link?: string
}

export function ServiceCard({
  title,
  description,
  image,
  icon,
  link,
}: ServiceCardProps) {
  return (
    <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        {icon && <div className="mb-3 text-primary text-2xl">{icon}</div>}
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        {link && (
          <a
            href={link}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors"
          >
            Learn More
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        )}
      </div>
    </Card>
  )
}
