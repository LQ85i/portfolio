/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  compiler: {
    // Enables the styled-components SWC transform
    // fixes bug where font is not loading
    styledComponents: true
  },
}

module.exports = nextConfig
