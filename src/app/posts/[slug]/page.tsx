import { getAllPosts, getPost } from '@/lib/posts'
import Link from 'next/link'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug)
  return { title: post.title, description: post.excerpt }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  return (
    <article>
      <header className="article-header">
        <div className="article-meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="article-meta-sep">/</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="article-title">{post.title}</h1>
        {post.tags.length > 0 && (
          <div className="article-tags">
            {post.tags.map((tag: string) => (
              <Link key={tag} href={`/tags/${tag}`} className="article-tag">
                {tag}
              </Link>
            ))}
          </div>
        )}
      </header>

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <footer className="article-footer">
        <Link href="/" className="back-link">← All posts</Link>
      </footer>
    </article>
  )
}
