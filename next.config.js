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
  experimental: {
    serverActions: true,
  },
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
