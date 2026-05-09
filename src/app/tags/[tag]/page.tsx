import { getAllPosts, getAllTags } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import Link from 'next/link'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getAllTags().map(tag => ({ tag }))
}

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  return { title: `#${params.tag}` }
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const posts = getAllPosts().filter(p => p.tags.includes(params.tag))

  return (
    <div>
      <div style={{ marginBottom: '0.75rem' }}>
        <Link href="/tags" className="back-link">← All topics</Link>
      </div>
      <h1 className="page-heading">#{params.tag}</h1>
      <p className="page-subheading">
        {posts.length} {posts.length === 1 ? 'post' : 'posts'}
      </p>
      {posts.map(post => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  )
}
