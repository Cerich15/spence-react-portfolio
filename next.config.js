/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config, options) =>
  {
      config.module.rules.push({
        test: /\.pdf$/i,
        type: 'asset/resource',
        // use: [
        //   {
        //     loader: 'file-loader',
        //   },
        // ],
        // generator: {
        //   filename: `[name][ext]`
        // },
        // test: /\.pdf$/i,
        // use: 'raw-loader',
      })

      return config
  },
  nextConfig
}