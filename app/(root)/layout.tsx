import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technikaz',
  description: 'The only blog site you need.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}