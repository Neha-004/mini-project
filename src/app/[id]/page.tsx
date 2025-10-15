import Image from 'next/image'
import { Metadata } from 'next'


export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
// fetch minimal data for metadata
const res = await fetch(`https://fakestoreapi.com/products/${params.id}`, { next: { revalidate: 60 } })
if (!res.ok) return { title: 'Product' }
const p = await res.json()
return {
title: `${p.title} — Mini Store`,
description: p.description.slice(0, 140)
}
}


async function getProduct(id: string) {
const res = await fetch(`https://fakestoreapi.com/products/${id}`, { next: { revalidate: 60 } })
if (!res.ok) throw new Error('Product not found')
return res.json()
}


export default async function ProductPage({ params }: { params: { id: string } }) {
const product = await getProduct(params.id)


return (
<main style={{ marginTop: 12 }}>
<div style={{ display: 'flex', gap: 24 }}>
<div style={{ width: 320, height: 320, position: 'relative' }}>
<Image src={product.image} alt={product.title} fill sizes="(max-width: 768px) 100vw, 320px" style={{ objectFit: 'contain' }} />
</div>
<div>
<h1>{product.title}</h1>
<div className="meta">{product.category}</div>
<div className="price">${product.price}</div>
<p style={{ marginTop: 12 }}>{product.description}</p>
</div>
</div>
</main>
)
}