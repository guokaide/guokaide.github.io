import Link from 'next/link'
import { PostMeta } from '@/lib/types'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="post-card">
      <div className="post-meta-row">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>
      <Link href={`/posts/${post.slug}`} className="post-title-link">
        <h2 className="post-title">{post.title}</h2>
      </Link>
      {post.excerpt && (
        <p className="post-excerpt">{post.excerpt}</p>
      )}
    </article>
  )
}
