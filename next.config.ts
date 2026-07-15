import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable webpack polling so HMR works inside Docker
  // (Docker volumes on Windows/Mac don't support inotify/FSEvents natively)
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,       // Check for changes every 1 second
        aggregateTimeout: 300, // Delay rebuild slightly to batch changes
      };
    }
    return config;
  },
};

export default nextConfig;
