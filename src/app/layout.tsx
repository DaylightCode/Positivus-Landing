import { spaceGrotesk } from './fonts'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title></title>
      <body className={`${spaceGrotesk.className} overflow-x-hidden max-w-full`}>
        {children}
      </body>
    </html>
  )
}
