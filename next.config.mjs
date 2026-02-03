/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/((?!socials|_next|favicon.ico|.*\\.).*)",
        destination: "/socials",
        permanent: false, // Set to true if this is a permanent change
      },
    ];
  },
};

export default nextConfig;
