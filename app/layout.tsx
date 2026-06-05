import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChurnShield — AI Churn Prevention Emails',
  description: 'Generate personalized churn prevention emails using cancellation data. Stop losing subscribers with AI-powered retention campaigns.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c311359d-5a36-4311-bce0-5b55202ff98b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
