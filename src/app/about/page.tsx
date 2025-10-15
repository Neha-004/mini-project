import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About — Mini Store",
  description: "Learn more about Mini Store, its mission, and what makes it unique."
}

export default function AboutPage() {
  return (
    <main style={{ marginTop: "2rem", maxWidth: "800px", marginLeft: "auto", marginRight: "auto", padding: "0 1rem" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>About Mini Store</h1>

      <p style={{ fontSize: "1.1rem", color: "#6b7280", marginBottom: "1.5rem", lineHeight: "1.8" }}>
        Mini Store is your go-to destination for discovering high-quality, curated products
        at affordable prices. We aim to provide a smooth and enjoyable shopping experience
        for everyone.
      </p>

      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Our Key Characteristics</h2>
      <ul style={{ lineHeight: "1.8", marginBottom: "1.5rem" }}>
        <li>🛍️ <strong>Curated Collection:</strong> Only the best products selected for quality and style.</li>
        <li>💰 <strong>Affordable Pricing:</strong> Competitive prices without compromising on value.</li>
        <li>🚀 <strong>Fast & Easy Shopping:</strong> Smooth browsing experience with quick access to products.</li>
        <li>🌍 <strong>Wide Selection:</strong> Multiple product categories to suit different tastes and needs.</li>
        <li>🛡️ <strong>Reliable Service:</strong> Transparent and trustworthy shopping for all customers.</li>
        <li>❤️ <strong>Customer-Focused:</strong> Designed with your convenience and satisfaction in mind.</li>
      </ul>

      <p style={{ fontSize: "1rem", color: "#6b7280" }}>
        Mini Store is built to make online shopping simple, fun, and accessible for everyone.
      </p>
    </main>
  )
}
