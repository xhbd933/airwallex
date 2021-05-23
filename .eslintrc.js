module.exports = {
    // 指定脚本的运行环境，一个环境定义了一组预定义的全局变量
    "env": {
        "browser": true, //浏览器环境中的全局变量
        "es6": true, //启用除了modules以外的所有ES6特性（该选项会自动设置 ecmaVersion 解析器选项为 6）
        "node": true //Node.js 全局变量和 Node.js 作用域
    },
    "extends": [
        "eslint:recommended", //所有在规则页面被标记为“✔️”的规则将会默认开启
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    // 设置全局变量
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser":  "@typescript-eslint/parser",
    // 第三方插件
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
        "no-trailing-spaces": [1, { "skipBlankLines": true }],
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