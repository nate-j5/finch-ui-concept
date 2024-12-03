/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      NEXT_PUBLIC_FINCH_CLIENT_ID: process.env.NEXT_PUBLIC_FINCH_CLIENT_ID,
      NEXT_PUBLIC_FINCH_CLIENT_SECRET: process.env.NEXT_PUBLIC_FINCH_CLIENT_SECRET,
      FINCH_ACCESS_TOKEN: process.env.FINCH_ACCESS_TOKEN,
    },
  };
  
  export default nextConfig;
  