/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdne-hippo-recipe-bad8dfdnfhh6e5hu.z01.azurefd.net',
        port: '',
        pathname: '/web/**'
      }
    ]
  }
}

module.exports = nextConfig
