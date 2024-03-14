/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
    },
    images: {
      domains: ["images.oyoroomscdn.com"],
      domains: ['storage.googleapis.com'],
    },
  };
  
  module.exports = nextConfig;
  
