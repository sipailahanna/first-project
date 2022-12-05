module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "mocha": true
    },
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
    },
    "extends": [
        "eslint:recommended",
        "plugin:wdio/recommended"
    ],
    "plugins": ["wdio"]
}
