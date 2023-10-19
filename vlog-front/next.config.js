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
    }
}

module.exports = nextConfig
