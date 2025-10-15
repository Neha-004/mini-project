import "./globals.css"
// import Header from "../components/Header"
// import Footer from "../components/Footer"
import Header from "./components/header"
import Footer from "./components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mini Store — Next.js App Router Demo",
  description: "A small demo showing posts/products routing, image optimization, loading UI and SEO metadata.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
