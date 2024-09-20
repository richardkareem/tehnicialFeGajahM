/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:'cdn.dummyjson.com'
            }
        ],

    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
