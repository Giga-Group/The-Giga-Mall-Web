/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
  // Optimize for production
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
