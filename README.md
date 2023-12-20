This is a minimal repository to show that `@tanstack/query/prefer-query-object-syntax` does not report errors as expected.

Reproduction steps:
Run `npm i` to install the dependencies in this package
Either run `npm run lint` in a terminal or use your code editor to inspect hooks.js
Observe only one of the functions expected to fail does

Output:

```
> npx eslint .


/Users/raul/workspace/eslint-query-test/src/hooks.js
  19:5  error  The following dependencies are missing in your queryKey: dep  @tanstack/query/exhaustive-deps

✖ 1 problem (1 error, 0 warnings)
```
