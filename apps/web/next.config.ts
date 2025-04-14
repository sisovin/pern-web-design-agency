/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  // If you're using TypeScript for your config, convert the TS to JS
  // and place any exported types in separate files
};

module.exports = nextConfig;