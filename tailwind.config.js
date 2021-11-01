module.exports = {
  mode: "jit",
  prefix: "tw-",
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class",
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      scale: ["group-hover"],
    },
  },
};
