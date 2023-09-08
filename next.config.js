/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // required for gh-pages deployment
  images: { unoptimized: true },
  compiler: {
    // Enables the styled-components SWC transform
    // fixes bug where font is not loading
    styledComponents: true
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
