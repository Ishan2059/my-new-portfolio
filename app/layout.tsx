import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Ishan Mishra — UI/UX Designer in Nepal",
  description: "Ishan Mishra is a UI/UX Designer based in Kathmandu and Biratnagar, Nepal. Freelance digital product designer specializing in solving user problems through clear, functional, and beautiful design.",
  keywords: ["UI UX Designer Nepal", "Freelance UX Designer Kathmandu", "Product Designer Nepal", "Ishan Mishra Designer", "UI Designer Biratnagar"],
  authors: [{ name: "Ishan Mishra" }],
  creator: "Ishan Mishra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ishanmishra.com",
    title: "Ishan Mishra — UI/UX Designer in Nepal",
    description: "Freelance UI/UX Designer from Nepal. I design digital products that work — clearly, beautifully, and without confusion.",
    siteName: "Ishan Mishra",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Ishan Mishra — UI/UX Designer"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishan Mishra — UI/UX Designer in Nepal",
    description: "Freelance UI/UX Designer from Nepal solving real problems through design.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
  alternates: {
    canonical: "https://ishanmishra.com.np"
  },
  icons: {
    icon: "/favicon.ico"
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ishan Mishra",
  "jobTitle": "UI/UX Designer",
  "description": "Freelance UI/UX Designer based in Nepal specializing in solving user problems through functional, beautiful digital design.",
  "url": "https://ishanmishra.com",
  "email": "ishanmishra2059@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kathmandu",
    "addressCountry": "NP"
  },
  "sameAs": [
    "https://dribbble.com/[username]",
    "https://www.behance.net/dwfice",
    "https://www.linkedin.com/in/ishan-mishra-b874b3287/",
    "https://medium.com/@ishanmishra2059",
    "https://www.instagram.com/ish_ann1/"
  ],
  "knowsAbout": ["UI Design", "UX Design", "Product Design", "Figma", "User Research", "Prototyping"],
  "nationality": "Nepali",
  "workLocation": {
    "@type": "Place",
    "name": "Nepal"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="https://ishanmishra.com.np/favicon.ico" />
        <link rel="apple-touch-icon" href="https://ishanmishra.com.np/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-to-content">
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
