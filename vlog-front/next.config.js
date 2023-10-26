/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'aviacionaldia.com'
            },
            {
                hostname: "res.cloudinary.com"
            }
        ],
        dangerouslyAllowSVG: true,
        unoptimized: true,
    }
}

module.exports = nextConfig
