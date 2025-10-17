import PostCard from '../components/postcard'

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

export const revalidate = 60

async function getProducts(): Promise<Product[]> {
 const res = await fetch('https://fakestoreapi.com/products', { next: { revalidate: 60 } })
 if (!res.ok) throw new Error('Failed to fetch products')
 return res.json()
 }

export default async function PostsPage() {
 const products: Product[] = await getProducts()
 return (
 <main>
 <h2 style={{ marginTop: 12 }}>Products</h2>
 <div className="grid">
 {products.map((p: Product) => (
 <PostCard key={p.id} product={p} />
 ))}
 </div>
 </main>
 )
}