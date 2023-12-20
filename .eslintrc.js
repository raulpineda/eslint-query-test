module.exports = {
  plugins: ["@tanstack/query"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "@tanstack/query/prefer-query-object-syntax": "error",
    "@tanstack/query/exhaustive-deps": "error",
  },
};
