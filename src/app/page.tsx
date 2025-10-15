import Image from "next/image"
import Link from "next/link"

export const revalidate = 60

async function getFeaturedProducts() {
  const res = await fetch("https://fakestoreapi.com/products?limit=4", { next: { revalidate: 60 } })
  if (!res.ok) throw new Error("Failed to fetch products")
  return res.json()
}

export default async function HomePage() {
  const featured = await getFeaturedProducts()

  return (
    <main style={{ marginTop: "2rem" }}>
      {/* --- Hero Section --- */}
      <section style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
          Welcome to <span style={{ color: "#06b6d4" }}>Mini Store</span>
        </h1>
        <p style={{ color: "#94a3b8", maxWidth: "600px", margin: "0 auto" }}>
          Discover high-quality products at unbeatable prices 
        </p>
        <Link href="/posts">
          <button
            style={{
              marginTop: "1.5rem",
              padding: "10px 18px",
              backgroundColor: "#06b6d4",
              border: "none",
              borderRadius: "8px",
              color: "white",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Shop Now →
          </button>
        </Link>
      </section>

      {/* --- Featured Products --- */}
      <section>
        <h2 style={{ marginBottom: "1rem" }}>Featured Products</h2>
        <div className="grid">
          {featured.map((p: any) => (
            <article key={p.id} className="card">
              <Link href={`/posts/${p.id}`}>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div style={{ width: 88, height: 88, position: "relative" }}>
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="88px"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 16 }}>{p.title}</h3>
                    <div className="meta">{p.category}</div>
                    <div className="price">${p.price}</div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link href="/posts">
            <button className="button">View All Products</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
