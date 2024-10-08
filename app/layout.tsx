import type { Metadata } from 'next'

// These styles apply to every route in the application
import './globals.css'
import ParticlesComponent from './components/particle'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Mystery+Quest&display=swap" rel="stylesheet" />

      </head>
      <body className='flex'>
        <ParticlesComponent/>
          {children}
        
      </body>
    </html>
  )
}