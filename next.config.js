/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Export statique pour GitHub Pages
  reactStrictMode: true,
  swcMinify: true,
  // Optimisations de compilation
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Pas de basePath si le repo s'appelle gdevis (racine)
  // Si votre repo s'appelle autrement, ajustez le basePath
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    unoptimized: true, // Nécessaire pour l'export statique
  },
  // Les headers() ne fonctionnent pas avec output: 'export'
  // compress: true, // Ne fonctionne pas avec export statique
  poweredByHeader: false,
  generateEtags: true,
};

module.exports = nextConfig;
