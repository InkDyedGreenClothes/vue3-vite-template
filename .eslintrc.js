module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['vue'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false,
    requireConfigFile: false
  },
  rules: {
    // This rule checks whether template contains single root element valid for Vue 2.
    'vue/no-multiple-template-root': 0,
    // v-model:main-active-index  解决这个问题
    'vue/no-v-model-argument': 'off',
    'no-param-reassign': 0,
    'max-len': [
      2,
      {
        code: 140,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignorePattern: 'data:image'
      }
    ],

    'no-plusplus': 0,
    'vue/html-self-closing': 0,
    'comma-dangle': 0,
    'vue/require-default-prop': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'array-callback-return': 0,
    'global-require': 0,
    radix: 0,
    'no-console': 0,
    'consistent-return': 1,
    'class-methods-use-this': 0,
    'no-buffer-constructor': 1,
    'no-continue': 0,
    camelcase: [
      1,
      {
        ignoreDestructuring: true,
        properties: 'always'
      }
    ],
    'vue/attributes-order': 0,
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'no-debugger': 0,
    'vue/attribute-hyphenation': 0,
    'vue/no-use-v-if-with-v-for': 0,
    strict: 0,
    'lines-between-class-members': 0,
    'operator-linebreak': 0,
    'no-else-return': 0,
    'vue/no-mutating-props': 0,
    'vue/require-prop-type-constructor': 0,
    'vue/return-in-computed-property': 0,
    'object-curly-newline': 0,
    'operator-assignment': 0,
    'vue/no-unused-components': 0,
    'array-bracket-spacing': 1,
    'brace-style': 1,
    'eol-last': 1,
    indent: [2, 2],
    'no-multiple-empty-lines': [1, { max: 1 }],
    'no-trailing-spaces': 1,
    'arrow-body-style': 1,
    'arrow-spacing': 1,
    'no-const-assign': 1,
    'no-duplicate-imports': 2,
    'no-useless-rename': 2,
    'no-var': 1,
    'object-shorthand': 1,
    /* 注释 */
    'spaced-comment': [
      2,
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+']
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true
        }
      }
    ],
    'switch-colon-spacing': 1,
    'prefer-template': 1,
    /* 组件 name 规则 */
    'vue/multi-word-component-names': [
      0,
      {
        ignores: []
      }
    ]
  },
  globals: {
    __NUXT__: true
  }
}
