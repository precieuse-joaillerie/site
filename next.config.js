/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true
  },
  webpack: (config, { isServer }) => {
    // Disable webpack cache to prevent ENOENT errors
    config.cache = false;
    if (isServer) {
      config.cache = false;
    }
    // Add canvas to externals to prevent client-side bundling
    config.externals.push("canvas");
    return config;
  },
};

module.exports = nextConfig;