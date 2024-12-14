import React from 'react'
import type { Metadata } from 'next'
import '@/styles/globals.css'
<<<<<<< HEAD

=======
>>>>>>> 64792fce2a1e796ed95be2edcc3d8dc9e16cb14b
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
