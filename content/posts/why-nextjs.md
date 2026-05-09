---
title: Why I Built This Blog with Next.js
date: 2026-05-08
excerpt: Jekyll was fine, but I wanted a foundation that could grow with me — especially for future AI features.
tags: [tech, nextjs]
---

I've had a Jekyll blog for a while. It worked, but I knew I'd eventually want to add dynamic features — things like AI-powered post summaries or weekly reflections based on what I've been writing.

Jekyll can't do that. So I rebuilt with Next.js.

## The plan

1. **Phase 1 (now):** Static export to GitHub Pages. Zero cost, same domain.
2. **Phase 2:** Migrate to Vercel when I'm ready to add API routes for AI features.
3. **Phase 3:** AI insights — summaries, patterns, action suggestions based on my writing.

The content stays in markdown files throughout. No lock-in.

## What I'm using

- **Next.js 14** — App Router, static export
- **Tailwind CSS** — utility-first styling
- **gray-matter + remark** — markdown parsing
- **GitHub Actions** — auto-deploy on push

Simple stack, easy to extend.

## Adding a new post

Drop a markdown file in `content/posts/` with this frontmatter:

```yaml
---
title: My Post
date: 2026-05-09
excerpt: Short description.
tags: [tag1, tag2]
---
```

## Future AI route (Phase 2)

When I move to Vercel, I'll add an API route like this:

```ts
// src/app/api/ai-insight/route.ts
import Anthropic from '@anthropic-ai/sdk'

export async function POST(req: Request) {
  const { posts } = await req.json()
  const client = new Anthropic()
  const message = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1024,
    messages: [{ role: 'user', content: `Analyze these posts: ${posts}` }],
  })
  return Response.json({ insight: message.content[0] })
}
```
