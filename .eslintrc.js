module.exports = {
  plugins: ["@tanstack/query"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "@tanstack/query/prefer-query-object-syntax": "error",
    "@tanstack/query/exhaustive-deps": "error",
  },
};
