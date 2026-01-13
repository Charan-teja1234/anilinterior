import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Best Interior Designer India | Carpenter Services | Modular Kitchen & Home Interiors - CraftSpace by Adimula Anil Chary',
  description: 'India\'s #1 Interior Designer & Carpenter Services by Adimula Anil Chary. Expert modular kitchens, bedroom interiors, wardrobes, custom furniture across India. 10+ years experience, 500+ projects. Free consultation. Call +91 96031 99219',
  keywords: 'interior designer India, carpenter India, modular kitchen India, bedroom interior design, wardrobe design, custom furniture, home interior designer, office interior, kitchen designer, furniture carpenter, interior decorator India, home renovation, best interior designer, top carpenter services, wooden furniture, kitchen cabinets, bedroom furniture, living room design, bathroom interior, false ceiling, flooring, painting contractor',
  authors: [{ name: 'CraftSpace Interiors' }],
  openGraph: {
    title: 'Best Interior Designer India | Carpenter Services - CraftSpace by Adimula Anil Chary',
    description: 'India\'s #1 Interior Designer & Carpenter Services. Expert modular kitchens, bedroom interiors, wardrobes, custom furniture across India.',
    url: 'https://craftspaceinteriors.com',
    siteName: 'CraftSpace Interiors',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CraftSpace Interiors by Adimula Anil Chary - India Interior Designer',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Interior Designer India | Carpenter Services - CraftSpace by Adimula Anil Chary',
    description: 'India\'s #1 Interior Designer & Carpenter Services. Expert modular kitchens, bedroom interiors, wardrobes, custom furniture.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}