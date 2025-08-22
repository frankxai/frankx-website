import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FrankX - Soul-Aligned AI Systems for Generative Creators',
  description: 'Transform from Tech-Overwhelmed to AI-Empowered Music Producer & Digital Creator. Learn to use AI as a tool for soul expression, not soul replacement.',
  keywords: ['AI', 'Music Production', 'Suno', 'Generative Creator', 'Soul-Aligned AI', 'Digital Creation'],
  authors: [{ name: 'FrankX' }],
  openGraph: {
    title: 'FrankX - Soul-Aligned AI Systems',
    description: 'Become a Generative Creator with Soul-Aligned AI',
    url: 'https://frankx.ai',
    siteName: 'FrankX',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FrankX - Soul-Aligned AI Systems',
    description: 'Become a Generative Creator with Soul-Aligned AI',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}