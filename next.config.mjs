/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
      BASE_URL: process.env.BASE_URL,
   
    },
    experimental: {
      typedRoutes: true,
    },
};

export default nextConfig;
