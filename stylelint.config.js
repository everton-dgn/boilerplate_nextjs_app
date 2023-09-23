module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-sass-guidelines',
    'stylelint-config-prettier'
  ],
  plugins: [
    'stylelint-sass-render-errors',
    'stylelint-selector-no-empty',
    'stylelint-high-performance-animation'
  ],
  rules: {
    'no-descending-specificity': null,
    'declaration-block-no-duplicate-properties': true,
    'max-nesting-depth': 2,
    'no-empty-source': null,
    'custom-property-pattern': '^([a-z][a-z0-9]*)((-|--)[a-z0-9]+)*$',
    'selector-class-pattern':
      '^[a-z]+(?:[a-z0-9]+)*(?:_[a-z0-9]+)*(?:--[a-z0-9]+)?$',
    'color-no-invalid-hex': true,
    'color-named': null,
    'hue-degree-notation': null,
    'comment-no-empty': null,
    'comment-empty-line-before': null,
    'custom-property-empty-line-before': null,
    'selector-no-qualifying-type': null,
    'function-no-unknown': null,
    'at-rule-no-unknown': null,
    'scss/no-global-function-names': null,
    'scss/comment-no-empty': null,
    'scss/dollar-variable-empty-line-before': null,
    'scss/double-slash-comment-empty-line-before': null,
    'plugin/sass-render-errors': true,
    'plugin/stylelint-selector-no-empty': true,
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested']
      }
    ],
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['layer']
      }
    ],
    'plugin/no-low-performance-animation-properties': [
      true,
      {
        ignoreProperties: ['background-color'],
        severity: 'warning'
      }
    ]
  }
}
