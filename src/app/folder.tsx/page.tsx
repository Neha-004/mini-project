import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact — Mini Store",
  description: "Get in touch with us for questions about the Mini Store demo project."
}

export default function ContactPage() {
  return (
    <main style={{ marginTop: "2rem" }}>
      <h1>Contact Us</h1>
      <p className="meta">
        We'd love to hear from you! Use the details below to get in touch.
      </p>
      <div style={{ marginTop: "1rem", lineHeight: "1.8" }}>
        <p>Email: <a href="mailto:hello@ministore.demo">hello@ministore.demo</a></p>
        <p>GitHub: <a href="https://github.com/yourusername" target="_blank">github.com/yourusername</a></p>
      </div>
    </main>
  )
}
