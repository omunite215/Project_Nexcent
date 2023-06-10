import '../sass/main.scss'
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nexcent',
  description: 'Lessons and Insights from 8 years',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
