/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'cdn.sanity.io'],
  },
  swcMinify: false,
}

module.exports = nextConfig
