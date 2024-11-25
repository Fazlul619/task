/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        pathname: '/**',
      },
    ],
    // Increase the timeout to 30 seconds
    minimumCacheTTL: 600,
  },
};

export default nextConfig;
