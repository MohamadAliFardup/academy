import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  matcher: ['/dashboard/:path*', '/courses/:path*'],
};

export default nextConfig;
