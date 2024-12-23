/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["images.oyoroomscdn.com"],
    domains: ["storage.googleapis.com"],
  },
};

module.exports = {
  // Remove this section or correct it
  experimental: {
    serverActions: false, // This can be safely omitted
  },
};
