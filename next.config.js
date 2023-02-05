/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    loader: "akamai",
    path: "",
  },
  trailingSlash: true,
  assetPrefix: isProd ? "https://spacetime-frontend-fa412f.spheron.app/" : "",
};

module.exports = nextConfig;
