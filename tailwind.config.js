/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        themeBackground: 'var(--background)',
        themeSBackground:'var(--secondaryBackground)',
        themeTBackground:'var(--tertiaryBackground)',
        themeText: 'var(--text)',
        themeInputText:'var(--inputText)',
        switchText:'var(--switchText)',
        switchBackground:'var(--switchBackground)'
      },
    },
  },
  plugins: [],
}
