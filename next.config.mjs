/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.impawards.com",
        pathname: "/**", // Allows all paths on this domain
      },
    ],
  },
  // Optimize for production
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
