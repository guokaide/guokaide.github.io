import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Archive' }

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })
}

export default function ArchivePage() {
  const posts = getAllPosts()

  const byYear = posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear().toString()
    if (!acc[year]) acc[year] = []
    acc[year].push(post)
    return acc
  }, {} as Record<string, typeof posts>)

  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a))

  return (
    <div>
      <h1 className="page-heading">Archive</h1>
      <p className="page-subheading">{posts.length} posts</p>

      {years.map(year => (
        <section key={year} className="archive-section">
          <h2 className="archive-year">{year}</h2>
          <div>
            {byYear[year].map(post => (
              <div key={post.slug} className="archive-row">
                <time className="archive-date" dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                <Link href={`/posts/${post.slug}`} className="archive-title">
                  {post.title}
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
