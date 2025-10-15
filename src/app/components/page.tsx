import PostCard from './postcard'


export const revalidate = 60


async function getProducts() {
const res = await fetch('https://fakestoreapi.com/products', { next: { revalidate: 60 } })
if (!res.ok) throw new Error('Failed to fetch products')
return res.json()
}


export default async function PostsPage() {
const products = await getProducts()
return (
<main>
<h2 style={{ marginTop: 12 }}>Products</h2>
<div className="grid">
{products.map((p: any) => (
<PostCard key={p.id} product={p} />
))}
</div>
</main>
)
}