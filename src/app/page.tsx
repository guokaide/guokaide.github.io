import { Fragment } from 'react'
import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <div>
      <h1 className="sr-only">Kai's Blog — Recent posts</h1>
      {posts.length === 0 ? (
        <p style={{ color: 'var(--text-faint)', fontSize: '0.875rem' }}>
          No posts yet. Add a markdown file to content/posts/.
        </p>
      ) : (
        posts.map((post, i) => (
          <Fragment key={post.slug}>
            {i > 0 && <div className="post-divider" aria-hidden="true" />}
            <PostCard post={post} />
          </Fragment>
        ))
      )}
    </div>
  )
}
