const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  // Your Next.js configuration
  reactStrictMode: false,
  env: {
    API_URL: "https://api.staging.croonus.com/api/v1/b2c/",
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "api.staging.croonus.com",
        port: "",
        pathname: "/croonus-uploads/**",
      },
    ],
  },
};
