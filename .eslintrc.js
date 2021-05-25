module.exports = {
    "env": {
        "browser": true, 
        "es6": true, 
        "node": true 
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser":  "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "no-console": "error",
        "comma-dangle": 1,
        "quotes": [ 0, "single" ],
        "global-strict": 0,
        "no-extra-semi": 1,
        "no-underscore-dangle": 0,
        "no-unused-vars": [
            "warn",
            {
                "vars": "all",
                "args": "after-used",
                "ignoreRestSiblings": false,
                "varsIgnorePattern": "createElement"
            }
        ],
        "no-unreachable": 1,
        "no-alert": 2,
        "no-mixed-spaces-and-tabs": 1,
        "no-empty-pattern": 1,
        "no-empty": 2,
        "no-useless-escape": 1,
        "no-case-declarations": 1,
        "no-debugger": 2,
        "no-undef": 2,
        "react/no-string-refs": 1,
        "react/react-in-jsx-scope": 2,
        "react/no-direct-mutation-state": 1,
        "react/prop-types": 0,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/jsx-no-undef": 2,
        "react/display-name": 0,
        "react/no-deprecated": 0,
        "react/no-unescaped-entities": 1,
        "react/jsx-key": 1,
        "react/jsx-no-target-blank": 1,
        "react/no-find-dom-node": 1,
        "experimentalDecorators": 0
    }
};