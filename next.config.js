const prod = process.env.NODE_ENV === "production";

const withPWA = require("next-pwa");

const nextConfig = withPWA({
  pwa: {
    dest: "public",
    disable: prod ? false : true,
  },
  i18n: {
    locales: ["pt-br"],
    defaultLocale: "pt-br",
  },
});

module.exports = nextConfig;
