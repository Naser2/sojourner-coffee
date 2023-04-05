
// import withVideos from 'next-videos'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },

}

// export const widthVideos = withVideos()
export default nextConfig

import withImages from  'next-images';
 withImages(); 