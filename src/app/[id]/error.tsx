'use client'
import { useEffect } from 'react'


export default function Error({ error, reset }: { error: Error; reset: () => void }) {
useEffect(() => {
console.error(error)
}, [error])


return (
<div className="card">
<h3>Something went wrong</h3>
<p className="meta">{error?.message}</p>
<button className="button" onClick={() => reset()}>Try again</button>
</div>
)
}