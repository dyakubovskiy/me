module.exports = {
  extends: ['stylelint-config-standard'],
  overrides: [
    {
      customSyntax: 'postcss-scss',
      files: ['./assets/styles/**/*.scss']
    },
    {
      customSyntax: 'postcss-html',
      files: ['./src/components/**/*.vue', './src/views/**/*.vue']
    }
  ],
  rules: {
    'selector-id-pattern': ['^[a-z][a-zA-Z0-9]+$'],
    'selector-class-pattern': ['^[a-zA-Z_-]*$'],
    'declaration-block-single-line-max-declarations': null,
    'import-notation': 'string',
    'alpha-value-notation': ['number'],
    'no-descending-specificity': null,
    'at-rule-no-unknown': null,
    'value-no-vendor-prefix': null,
    'property-no-vendor-prefix': null,
    'keyframe-block-no-duplicate-selectors': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'block-no-empty': true,
    'comment-no-empty': true,
    'color-no-invalid-hex': true,
    'keyframe-declaration-no-important': true,
    'named-grid-areas-no-invalid': true,
    'no-invalid-position-at-import-rule': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: ['grid-template']
      }
    ],
    'color-named': 'never',
    'color-function-notation': 'legacy',
    'declaration-no-important': true,
    'declaration-property-unit-allowed-list': {
      'letter-spacing': ['em'],
      'box-shadow': ['px']
    },
    'unit-disallowed-list': [
      'px',
      {
        ignoreProperties: {
          px: ['/^border/', 'box-shadow', 'outline', 'stroke-width']
        }
      }
    ],
    'function-url-scheme-disallowed-list': ['/^http/'],
    'selector-max-type': [
      2,
      {
        ignoreTypes: ['compounded']
      }
    ],
    'selector-max-universal': 1,
    'font-weight-notation': 'numeric'
  }
}
