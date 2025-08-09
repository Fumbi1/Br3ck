import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'BR3CK - Unlock Your Potential in Web3',
  description: 'BR3CK is a Web3 edutech academy focused on empowering African talent with the skills and knowledge to thrive in the decentralized future.',
  keywords: ['Web3', 'Blockchain', 'DeFi', 'Smart Contracts', 'Africa', 'Education', 'Academy', 'Developer Training'],
  authors: [{ name: 'BR3CK Team' }],
  creator: 'BR3CK',
  openGraph: {
    type: 'website',
    // locale: 'en_US',
    // url: 'https://br3ck.com',
    title: 'BR3CK - Unlock Your Potential in Web3',
    description: 'BR3CK is a Web3 edutech academy focused on empowering African talent with the skills and knowledge to thrive in the decentralized future.',
    siteName: 'BR3CK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BR3CK - Unlock Your Potential in Web3',
    description: 'BR3CK is a Web3 edutech academy focused on empowering African talent.',
    creator: '@br3ck',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}