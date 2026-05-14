import { getAllPosts, getAllTags } from '@/lib/posts'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Topics' }

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  })
}

export default function TagsPage() {
  const tags = getAllTags()
  const posts = getAllPosts()

  return (
    <div>
      <h1 className="page-heading">Topics</h1>
      <p className="page-subheading">{tags.length} tags · {posts.length} posts</p>

      {tags.map(tag => {
        const tagPosts = posts.filter(p => p.tags.includes(tag))
        return (
          <section key={tag} className="topic-section">
            <div className="topic-header">
              <Link href={`/tags/${tag}`} className="topic-name"><span className="topic-hash">#</span>{tag}</Link>
              <span className="topic-count">
                {tagPosts.length} {tagPosts.length === 1 ? 'post' : 'posts'}
              </span>
            </div>
            <div>
              {tagPosts.map(post => (
                <div key={post.slug} className="topic-post-row">
                  <Link href={`/posts/${post.slug}`} className="topic-post-title">
                    {post.title}
                  </Link>
                  <time className="topic-post-date" dateTime={post.date}>
                    {formatDate(post.date)}
                  </time>
                </div>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
