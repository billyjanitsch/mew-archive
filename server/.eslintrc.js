module.exports = {
  extends: 'airbnb-base',
  plugins: ['babel'],
  parser: 'babel-eslint',
  rules: {
    'babel/arrow-parens': [2, 'as-needed'],
    'babel/object-curly-spacing': [2, 'never'],
    'global-require': 0,
    'no-restricted-globals': [2, 'find'],
    'no-confusing-arrow': 0,
    'no-underscore-dangle': 0,
    'object-curly-spacing': 0,
    'prefer-spread': 2,
    'semi': [2, 'never'],
  },
}
