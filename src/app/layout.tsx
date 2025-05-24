import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import type { ReactNode } from 'react'

import './globals.css'

import { Footer } from '~/layouts/Footer'
import { Header } from '~/layouts/Header'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '4º Ofício de Aracaju',
  description:
    'Serviços de Registro Civil e Tabelionato de Notas com atendimento ágil e de qualidade para a população de Aracaju.',
  openGraph: {
    title: '4º Ofício de Aracaju',
    description:
      'Serviços de Registro Civil e Tabelionato de Notas com atendimento ágil e de qualidade para a população de Aracaju.',
    images: ['/logotype.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '4º Ofício de Aracaju',
    description:
      'Serviços de Registro Civil e Tabelionato de Notas com atendimento ágil e de qualidade para a população de Aracaju.',
    images: ['/logotype.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  )
}
