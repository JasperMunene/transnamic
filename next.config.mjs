/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.prod.website-files.com',
          pathname: '/6329ae223e4134f94a1f5728/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  