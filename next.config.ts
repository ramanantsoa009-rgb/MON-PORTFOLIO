import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Domaines autorisés pour les images en arrière-plan via next/image
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
};

export default nextConfig;
