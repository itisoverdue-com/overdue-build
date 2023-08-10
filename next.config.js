/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         { protocol: "https", hostname: "**.cloudinary.com" },
         { protocol: "https", hostname: "img.evbuc.com" },
         { protocol: "https", hostname: "i0.wp.com" },
         { protocol: "https", hostname: "secure.gravatar.com" },
      ],
   },
}

module.exports = nextConfig
