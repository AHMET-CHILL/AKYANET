import type { NextConfig } from "next";

// Next.js yapılandırması deploy ortamında ekstra sunucu karmaşıklığı olmadan çalışacak şekilde sade tutulur.
const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
