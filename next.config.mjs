/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["oct4nzh6qckbwkjr.public.blob.vercel-storage.com"],
    minimumCacheTTL: 0,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        pathname: "/**",
      },
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
