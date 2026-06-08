import type { Metadata } from 'next'
import { Geist, Geist_Mono, Barlow_Semi_Condensed, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });
const barlowSemiCondensed = Barlow_Semi_Condensed({ 
  weight: '600',
  subsets: ["latin"],
  variable: '--font-barlow'
});
const dmSans = DM_Sans({ 
  weight: ['400', '500'],
  subsets: ["latin"],
  variable: '--font-dm-sans'
});

export const metadata: Metadata = {
  title: 'LKF Contracting | Agricultural & Civil Contractors | Invergordon Victoria',
  description: 'Professional agricultural and civil contracting services with 20+ years of expertise in Victoria. GPS landforming, hay contracting, drone spraying, tillage & seeding.',
  keywords: ['contracting', 'agricultural', 'civil', 'GPS landforming', 'hay contracting', 'drone spraying', 'Victoria', 'Invergordon'],
  openGraph: {
    title: 'LKF Contracting',
    description: 'Professional agricultural and civil contracting services',
    url: 'https://lkfcontracting.com.au',
    type: 'website',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${barlowSemiCondensed.variable} ${dmSans.variable}`}>
      <body className="font-dm-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
