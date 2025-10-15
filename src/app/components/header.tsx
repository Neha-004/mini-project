// components/Header.tsx
import Link from "next/link"

export default function Header() {
  return (
    <header className="header" style={{ marginBottom: "1rem" }}>
      <div>
        <Link href="/">
          <h2 style={{ margin: 0, color: "#06b6d4" }}>Mini Store</h2>
        </Link>
  
      </div>

      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link href="/">Home</Link>
        <Link href="/posts">Products</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}
