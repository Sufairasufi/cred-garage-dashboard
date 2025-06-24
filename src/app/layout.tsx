import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'CRED Garage Dashboard',
  description: 'Inspired by CRED UI, built with Next.js and TailwindCSS',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="">
      <body>{children}</body>
    </html>
  )
}
