"use client"
import Link from "next/link"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Subscribed with: ${email}`)
    setEmail("")
  }

  return (
    <footer style={{
      backgroundColor: "#1f2937",
      color: "#d1d5db",
      padding: "3rem 2rem",
      marginTop: "3rem",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "2rem" }}>
        
        {/* Company Info */}
        <div style={{ flex: "1 1 200px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#06b6d4", marginBottom: "0.5rem" }}>Mini Store</h2>
          <p style={{ lineHeight: "1.8", color: "#9ca3af" }}>
            Your go-to destination for curated products, smooth shopping experience, and quality service.
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ flex: "1 1 150px" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Quick Links</h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li><Link href="/" style={{ color: "#d1d5db", textDecoration: "none" }}>Home</Link></li>
            <li><Link href="/posts" style={{ color: "#d1d5db", textDecoration: "none" }}>Products</Link></li>
            <li><Link href="/about" style={{ color: "#d1d5db", textDecoration: "none" }}>About</Link></li>
            <li><Link href="/contact" style={{ color: "#d1d5db", textDecoration: "none" }}>Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div style={{ flex: "1 1 150px" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Follow Us</h3>
          <div style={{ display: "flex", gap: "0.5rem", fontSize: "1.3rem", cursor: "pointer" }}>
            <span title="Facebook">📘</span>
            <span title="Twitter">🐦</span>
            <span title="Instagram">📸</span>
            <span title="LinkedIn">💼</span>
          </div>
        </div>

        {/* Newsletter */}
        <div style={{ flex: "1 1 250px" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Newsletter</h3>
          <p style={{ fontSize: "0.9rem", color: "#9ca3af", marginBottom: "0.5rem" }}>Subscribe to get latest updates and deals:</p>
          <form onSubmit={handleSubscribe} style={{ display: "flex", gap: "0.5rem" }}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ flex: 1, padding: "0.5rem", borderRadius: "6px", border: "none", outline: "none" }}
            />
            <button type="submit" style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#06b6d4",
              border: "none",
              borderRadius: "6px",
              color: "white",
              cursor: "pointer",
              fontWeight: 600
            }}>Subscribe</button>
          </form>
        </div>

      </div>

      {/* Bottom line */}
      <div style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.9rem", color: "#9ca3af" }}>
        © {new Date().getFullYear()} Mini Store. 
      </div>
    </footer>
  )
}
