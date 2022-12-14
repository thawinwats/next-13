import "./styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body className="dark:bg-black dark:text-white">{children}</body>
    </html>
  )
}
