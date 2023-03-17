/** @type {import('next').NextConfig} */

module.exports = module.exports = {
  webpack: (config, options) =>
  {
      config.module.rules.push({
        test: /\.pdf$/i,
        type: 'asset/resource',
      })

      return config
  },
  reactStrictMode: true,
  swcMinify: true,
}