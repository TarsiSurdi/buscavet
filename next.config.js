const withPWA = require("next-pwa");

const nextConfig = withPWA({
  pwa: {
    dest: "public",
  },
  i18n: {
    locales: ["pt-br"],
    defaultLocale: "pt-br",
  },
});

module.exports = nextConfig;
