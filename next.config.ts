import type { NextConfig } from "next";

const nextConfig = {
  experimental: {
    middlewareClientMaxBodySize: '100mb', // or whatever max you want to allow
  },
};

module.exports = nextConfig;