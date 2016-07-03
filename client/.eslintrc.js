module.exports = {
  extends: 'airbnb',
  plugins: ['babel'],
  parser: 'babel-eslint',
  rules: {
    'babel/arrow-parens': [2, 'as-needed'],
    'babel/object-curly-spacing': [2, 'never'],
    'global-require': 0,
    'import/default': 2,
    'import/named': 2,
    'import/namespace': 2,
    'import/newline-after-import': 2,
    'import/no-extraneous-dependencies': [2, {devDependencies: true}],
    'import/order': 2,
    'jsx-quotes': [2, 'prefer-single'],
    'operator-linebreak': [2, 'before', {overrides: {'&&': 'after', '||': 'after'}}],
    'no-class-assign': 2,
    'no-confusing-arrow': 0,
    'no-multiple-empty-lines': [2, {max: 1, maxEOF: 1}],
    'no-restricted-globals': ['error', 'event', 'find', 'open'],
    'no-underscore-dangle': 0,
    'object-curly-spacing': 0,
    'prefer-spread': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'semi': [2, 'never'],

    // TODO: https://github.com/yannickcr/eslint-plugin-react/issues/540
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-closing-bracket-location': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json', '.css']
      }
    },
    'import/ignore': ['node_modules', '\.(png|svg|jpg|css)$'],
  },
}
