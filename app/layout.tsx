import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "byagus | Product Manager turned Indie Hacker",
  description: "Personal site of Agustín Paris, showcasing micro-products built by an indie hacker.",
  keywords: ["indie hacker", "micro saas", "product manager", "startup", "tripdays", "problemfinder", "weather", "check writing"],
  authors: [{ name: "Agustín Paris" }],
  creator: "Agustín Paris",
  publisher: "Agustín Paris",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://byagus.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "byagus | Product Manager turned Indie Hacker",
    description: "Personal site of Agustín Paris, showcasing micro-products built by an indie hacker.",
    url: 'https://byagus.com',
    siteName: 'byagus',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'builtbyagus - Building digital products'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "byagus | Product Manager turned Indie Hacker",
    description: "Personal site of Agustín Paris, showcasing micro-products built by an indie hacker.",
    creator: '@builtbyagus',
    images: ['/banner.png']
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#10b981'
      }
    ]
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
  verification: {
    google: 'google-site-verification-code', // Reemplazar con tu código real
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
