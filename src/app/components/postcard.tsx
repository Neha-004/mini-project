import Image from 'next/image'
import Link from 'next/link'

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function PostCard({ product }: { product: Product }) {
return (
<article className="card">
<Link href={`/${product.id}`}>
<div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
<div style={{ width: 88, height: 88, position: 'relative' }}>
<Image src={product.image} alt={product.title} fill sizes="88px" style={{ objectFit: 'contain' }} priority={false} />
</div>
<div>
<h3 style={{ margin: 0, fontSize: 16 }}>{product.title}</h3>
<div className="meta">{product.category}</div>
<div className="price">${product.price}</div>
</div>
</div>
</Link>
</article>
)
}