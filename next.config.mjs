/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'down-vn.img.susercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'down-vn.img.susercontent.com',
        pathname: '/**',
      }, 
      {
        protocol: 'https',
        hostname: 'woo.dealoria.store',
        pathname: '/**',
      },
       {
        protocol: 'http',
        hostname: 'woo.dealoria.store',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'woo.dealoria.store',
        port: '',
        pathname: '/wp-content/**', // cho phép ảnh trong thư mục uploads
      },
      {
        protocol: 'http',
        hostname: 'muasamngay.com',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'muasamngay.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
