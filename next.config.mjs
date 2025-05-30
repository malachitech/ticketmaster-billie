/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/:path*.txt',
          destination: '/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;