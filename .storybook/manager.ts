import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "dark",

    //Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    //Logo section
    brandTitle: "custom storybook title",
    brandUrl: "https://example.com",
    brandImage: "/Tapup-logo-dark.png",
    brandTarget: "_self",

    colorPrimary: "#585C6D",
    colorSecondary: "#1AA845",
  }),
})