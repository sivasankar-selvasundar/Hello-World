/** @type {import('next').NextConfig} */
const buildTarget = process.env.BUILD_TARGET || 'default';

const nextConfig = {
  output: 
    buildTarget === 'static' ? 'export' : 
    buildTarget === 'docker' ? 'standalone' : 
    undefined,
  images: { unoptimized: buildTarget === 'static' },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;