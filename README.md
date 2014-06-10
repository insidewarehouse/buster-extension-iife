# Buster extension: IIFE #

Wrap every test file in a self invoking function to create a closure before sending tests to the browser.
Useless for node.js testing.
Want other resources wrapped? Submit a PR!

## Usage ##
`npm install buster-extension-iife` and then in your `buster.js` include:

```
extensions: [
	require("buster-extension-iife")
]
```
