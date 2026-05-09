import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <div>
      {posts.length === 0 ? (
        <p style={{ color: 'var(--text-faint)', fontSize: '0.875rem' }}>
          No posts yet. Add a markdown file to content/posts/.
        </p>
      ) : (
        posts.map(post => <PostCard key={post.slug} post={post} />)
      )}
    </div>
  )
}
