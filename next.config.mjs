/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.glb$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'static/models/',
            publicPath: '/_next/static/models/',
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
