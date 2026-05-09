import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'About' }

export default function AboutPage() {
  return (
    <div>
      <h1 className="page-heading">About</h1>
      <p className="page-subheading">A little about who I am.</p>
      <div className="prose max-w-none">
        <p>
          Hi, I'm Kai. I'm a software engineer based in China. This is my personal
          blog where I write about things I'm learning, building, and thinking about.
        </p>
        <p>
          Feel free to reach out at{' '}
          <a href="mailto:kaideguo@gmail.com">kaideguo@gmail.com</a>.
        </p>
      </div>
    </div>
  )
}
