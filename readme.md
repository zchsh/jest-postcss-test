# Jest PostCSS Test

Trying to create a basic use of PostCSS with `jest-transform-css` for troubleshooting purposes.

## Setup

- `npm i`
- `npm run test` to show desired result with manually transpiled CSS
- In `src/test-component/index.js`, switch to `style.css` instead of `style-manually-transpiled.css`
- `npm run test` again, test should break, with an error `Could not parse CSS stylesheet`
- In `jesttransformcss.config.js`, change `modules` to `true`. Now PostCSS is working, so no error... but we also have CSS modules in place, so classNames don't seem to match up, and the test still fails.
- I think this is because of how `jest-transform-css` works, [this conditional](https://github.com/dferber90/jest-transform-css/blob/4909eb911af39fd6a206bf73d5a5e7bdb6694b4d/index.js#L35) seems to required CSS modules to be used to use any PostCSS features.