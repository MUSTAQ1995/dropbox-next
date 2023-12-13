/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    remotePatterns: [
      {
        protocol:"https",
        // hostname:"easypractice.net"\
        hostname:"www.shareicon.net"
      }
    ]
   }
}

module.exports = nextConfig
