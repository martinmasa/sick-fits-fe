const prettierOptions = require('./.prettierrc');

const OFF = 0;
const ERROR = 2;

module.exports = {
  'root': true,
  'parser': 'babel-eslint',
  'extends': [
    'prettier'
  ],
  'env': {
    'browser': true,
    'node': true,
    'jest': true,
    'es6': true
  },
  'plugins': [
    'react',
    'jsx-a11y',
    'import',
    'prettier'
  ],
  'rules': {
    'prettier/prettier': [ERROR, prettierOptions],
    'arrow-body-style': OFF,
    'arrow-parens': OFF,
    'camelcase': OFF,
    'class-methods-use-this': OFF,
    'comma-dangle': OFF,
    'function-paren-newline': OFF,
    'object-curly-newline': OFF,
    'implicit-arrow-linebreak': OFF,
    'import/no-extraneous-dependencies': OFF,
    'import/no-named-as-default': OFF,
    'import/prefer-default-export': OFF,
    'jsx-a11y/anchor-is-valid': OFF,
    'jsx-a11y/label-has-associated-control': OFF,
    'jsx-a11y/label-has-for': OFF,
    'react/prefer-stateless-function': OFF,
    'react/prop-types': OFF,
    'react/require-default-props': OFF,
    'react/jsx-one-expression-per-line': OFF,
    'react/jsx-filename-extension': OFF
  }
};
