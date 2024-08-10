/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "i.scdn.co",
                port: "",
                pathname: "/image/**",
            },
            {
                protocol: 'https',
                hostname: "avatars.githubusercontent.com",
                port: "",
                pathname: "/u/**",

            }
        ]
    }
};

export default nextConfig;