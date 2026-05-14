import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'About' }

export default function AboutPage() {
  return (
    <div>
      <h1 className="page-heading">About</h1>
      <p className="page-subheading">A little about who I am.</p>
      <div className="prose max-w-none">
        <p>
          Hi, I'm Kai — a software engineer based in China.
        </p>
        <p>
          This blog is where I write about things I'm learning, building, and
          thinking about. Topics range from software engineering and system
          design to the tools and ideas that shape how I work.
        </p>
        <p>
          I believe in learning in public — writing helps me think more clearly,
          and if something I write happens to be useful to someone else, even better.
        </p>

        <hr />

        <h2>Get in touch</h2>
        <p>
          You can find me on{' '}
          <a href="https://github.com/guokaide" target="_blank" rel="noopener noreferrer">GitHub</a>,
          or reach me by <a href="mailto:kaideguo@gmail.com">email</a>.
        </p>
      </div>
    </div>
  )
}
