/** @type {import("next").NextConfig} */
const nextConfig = {
   experimental: {
      appDir: false,
   },
   i18n: {
      locales: ["en-US"],
      defaultLocale: "en-US",
   },
};

module.exports = nextConfig;
