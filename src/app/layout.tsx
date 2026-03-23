import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'commissioni.com — Trova chi ti aiuta, vicino a te',
  description:
    'La piattaforma italiana per richiedere e offrire servizi di prossimità: spesa, dog sitting, accompagnamento bambini, pagamento bollette, assistenza fiscale.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
