/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // static export for GitHub Pages
  trailingSlash: true,   // required for GitHub Pages routing
  images: {
    unoptimized: true,
  },
  // When migrating to Vercel: remove the `output: 'export'` line above.
  // API routes in /src/app/api/ will automatically activate.
}

module.exports = nextConfig
