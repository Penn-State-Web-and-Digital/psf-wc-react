import CustomResolverPlugin from '@psu-flex/wp-wc-resolver';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Add the custom resolver plugin
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new CustomResolverPlugin(),
    ];

    return config;
  },
};

export default nextConfig;
