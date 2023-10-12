import "@/styles/eudoxus.css"
import "./globals.css"

export const metadata = {
   title: "Metaversus"
}

const RootLayout = ({ children }) => (
   <html lang="en-US">
      <body>{children}</body>
   </html>
)

export default RootLayout
