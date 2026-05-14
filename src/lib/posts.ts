import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeShiki from '@shikijs/rehype'
import rehypeStringify from 'rehype-stringify'
import { Post, PostMeta } from './types'

const postsDir = path.join(process.cwd(), 'content/posts')

function calcReadingTime(content: string): string {
  const cjk = content.match(/[一-鿿㐀-䶿]/g)
  const cjkCount = cjk ? cjk.length : 0
  const latin = content.replace(/[一-鿿㐀-䶿]/g, ' ').trim()
  const latinWords = latin ? latin.split(/\s+/).length : 0
  const minutes = Math.max(1, Math.ceil(latinWords / 200 + cjkCount / 300))
  return `${minutes} min read`
}

async function markdownToHtml(content: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeShiki, { theme: 'github-light' })
    .use(rehypeStringify)
    .process(content)
  return result.toString()
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir)
  return files
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const slug = f.replace(/\.md$/, '')
      const raw = fs.readFileSync(path.join(postsDir, f), 'utf8')
      const { data, content } = matter(raw)
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? '',
        excerpt: data.excerpt ?? '',
        tags: data.tags ?? [],
        readingTime: calcReadingTime(content),
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tagSet = new Set<string>()
  posts.forEach(p => p.tags.forEach((t: string) => tagSet.add(t)))
  return Array.from(tagSet).sort()
}

export async function getPost(slug: string): Promise<Post> {
  const filePath = path.join(postsDir, `${slug}.md`)
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    excerpt: data.excerpt ?? '',
    tags: data.tags ?? [],
    readingTime: calcReadingTime(content),
    content: await markdownToHtml(content),
  }
}
