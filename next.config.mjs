/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],

    minimumCacheTTL: 0,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        // port: "",
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

// "oct4nzh6qckbwkjr.public.blob.vercel-storage.com",
