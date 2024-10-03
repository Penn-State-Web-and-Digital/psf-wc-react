// wp-wc-resolver.js (CommonJS version)
class CustomResolverPlugin {
  apply(resolver) {
    resolver
      .getHook('before-resolve')
      .tapAsync('CustomResolverPlugin', (request, resolveContext, callback) => {
        if (request.request && request.request.startsWith('@psu-flex/')) {
          const packageName = request.request.split('/')[1];
          request.request = `node_modules/@psu-flex/${packageName}/dist/index`;
        }
        callback();
      });
  }
}

// Export using CommonJS syntax

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
