/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
    ],
  },
  output: "export",
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
};

module.exports = nextConfig;