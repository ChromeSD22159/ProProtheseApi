export default {
  css: ["@/assets/scss/style.scss"],
  scss: {
    additionalData: `
        @import "@/assets/scss/_vars.scss"; 
        @import "@/assets/scss/_preset.scss"; 
        @import "@/assets/scss/_font.scss";
    `
  },
  tailwindcss: {},
};