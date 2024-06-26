// /** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        discord_blue: "#295DE7",
        discord_blurple: "#7289da",
        discord_purple: "#5865f2",
        discord_green: "#3ba55c",
        discord_serverBg: "#36393f",
        discord_serverBg: "#202225",
        discord_channelsBg: "#2f3136",
        discord_serverNameHoverBg: "#34373c",
        discord_channel: "#8e9297",
        discord_channelHoverBg: "#3a3c43",
        discord_userSectionText: "#b9bbbe",
        discord_iconHoverBg: "#3a3c43",
        discord_userSectionBg: "#292b2f",
        discord_iconHover: "#dcddde",
        discord_chatBg: "#36393f",
        discord_chatHeaderIcon: "#72767d",
        
      },
      height:{
        "83vh" : "83vh",
      },
      borderRadius: ["hover","focus"],

    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

