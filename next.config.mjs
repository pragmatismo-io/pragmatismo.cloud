/** @type {import('next').NextConfig} */
const nextConfig = {    trailingSlash: true,
    output: 'standalone',
    images: { unoptimized: true }
};

export default nextConfig;
