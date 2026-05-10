# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start local development server
npm run build    # Static export to /out (runs next build)
npm run lint     # ESLint + TypeScript checking
```

No test suite is configured.

## Architecture

Personal blog built with **Next.js 14 App Router**, exported as a static site for GitHub Pages deployment.

### Content pipeline

Blog posts live in `/content/posts/*.md` as Markdown files with YAML frontmatter (`title`, `date`, `excerpt`, `tags`). All processing happens in `src/lib/posts.ts` at build time:

1. `fs.readdirSync` reads the posts directory
2. `gray-matter` parses frontmatter + raw content
3. `remark` → `remark-rehype` → `@shikijs/rehype` → `rehype-stringify` renders Markdown to HTML with syntax highlighting (github-light theme)
4. Reading time is derived from word count (÷ 200)

The two TypeScript types are `PostMeta` (slug, title, date, excerpt, tags, readingTime) and `Post` (extends PostMeta with rendered HTML `content`).

### Pages

| Route | File |
|-------|------|
| `/` | `src/app/page.tsx` — reverse-chronological post list |
| `/posts/[slug]` | `src/app/posts/[slug]/page.tsx` — individual post |
| `/archive` | `src/app/archive/page.tsx` — posts grouped by year |
| `/tags` | `src/app/tags/page.tsx` — all tags with counts |
| `/tags/[tag]` | `src/app/tags/[tag]/page.tsx` — posts for a tag |
| `/about` | `src/app/about/page.tsx` — static about page |

Dynamic routes (`[slug]`, `[tag]`) implement `generateStaticParams()` for full static export compatibility.

### Styling

Tailwind CSS with the typography plugin. Design tokens are CSS variables on `:root` — a warm cream/manuscript palette with deep manuscript-red accent (`--accent: #8B2D1F`, secondary `--accent-soft: #B45309`). All styling targets light mode only.

Three Google fonts wired through CSS variables (configured in `src/app/layout.tsx`):
- `--font-display` (Fraunces, italic-friendly serif) — logo, page headings, post titles, drop caps
- `--font-serif` (Newsreader) — body and prose
- `--font-tech` (JetBrains Mono) — meta lines, nav, footer (uppercase + tracked)

Signature editorial details: drop cap on the first paragraph of articles (`.prose > p:first-of-type::first-letter`, accent-red italic Fraunces), centered `✦` flourish dividers, film-grain overlay, short accent stripe top-left of the header. Global styles in `src/app/globals.css`.

CJK fallback: the html root is `lang="zh-Hans"` and `--font-serif` / `--font-display` chain into Source Han Serif / Songti / Noto CJK before Latin fallbacks. Negative letter-spacing on display headings is kept gentle (`~-0.015em`) so it does not crush Chinese glyphs.

### Deployment constraints

`next.config.js` sets `output: 'export'` and `trailingSlash: true` for GitHub Pages. This means:
- No API routes or server-side rendering
- No Next.js image optimization (`images.unoptimized: true`)
- All data fetching must be synchronous/build-time only

Path alias `@/*` maps to `src/*`.
