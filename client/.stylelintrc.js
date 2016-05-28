module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'font-family-name-quotes': 'always-unless-keyword',
    'function-url-quotes': 'always',
    'selector-no-id': true,
    'string-quotes': 'single',
    'value-no-vendor-prefix': true,
    'at-rule-empty-line-before': ['always', {
      except: ['blockless-group', 'all-nested'],
      ignore: ['after-comment'],
    }],
  },
}
