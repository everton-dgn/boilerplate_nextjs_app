module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-sass-guidelines',
    'stylelint-config-prettier'
  ],
  plugins: [
    'stylelint-order',
    'stylelint-sass-render-errors',
    'stylelint-selector-no-empty',
    'stylelint-high-performance-animation'
  ],
  rules: {
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
    ],
    'order/properties-order': [
      [
        // positioning and z-index
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'z-index',

        // display and box model
        'display',
        'box-sizing',

        // flexbox
        'flex',
        'flex-basis',
        'flex-direction',
        'flex-flow',
        'flex-grow',
        'flex-shrink',
        'flex-wrap',

        // grid
        'grid',
        'grid-area',
        'grid-template',
        'grid-template-areas',
        'grid-template-rows',
        'grid-template-columns',
        'grid-row',
        'grid-row-start',
        'grid-row-end',
        'grid-column',
        'grid-column-start',
        'grid-column-end',
        'grid-auto-rows',
        'grid-auto-columns',
        'grid-auto-flow',
        'gap',
        'row-gap',
        'column-gap',

        // sizing and overflow
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'overflow',

        // borders and outline
        'border',
        'border-top',
        'border-right',
        'border-bottom',
        'border-left',
        'border-width',
        'border-style',
        'border-color',
        'border-radius',
        'outline',
        'outline-width',
        'outline-style',
        'outline-color',

        // alignment (flexbox and grid)
        'justify-content',
        'justify-items',
        'justify-self',
        'align-content',
        'align-items',
        'align-self',

        // margins and padding
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',

        // background and shadows
        'background',
        'background-color',
        'background-image',
        'background-repeat',
        'background-position',
        'background-size',
        'box-shadow',

        // cursor and interactivity
        'cursor',
        'pointer-events',

        // filters and objects
        'filter',
        'object-fit',
        'object-position',

        // text resizing and spacing
        'resize',
        'white-space',
        'word-break',
        'word-wrap',
        'text-overflow',
        'overflow-wrap',

        // lists and vertical alignment
        'list-style',
        'list-style-type',
        'list-style-position',
        'list-style-image',
        'vertical-align',

        // typography and text
        'color',
        'font',
        'font-family',
        'font-size',
        'font-weight',
        'line-height',
        'text-align',
        'text-transform',
        'text-decoration',
        'letter-spacing',
        'text-indent',
        'text-shadow',

        // table
        'table-layout',
        'border-collapse',
        'border-spacing',
        'caption-side',
        'empty-cells',

        // column
        'columns',
        'column-gap',
        'column-fill',
        'column-rule',
        'column-rule-width',
        'column-rule-style',
        'column-rule-color',
        'column-span',
        'column-count',
        'column-width',

        // 3D and perspective
        'backface-visibility',
        'perspective',
        'perspective-origin',

        // opacity and visibility
        'opacity',
        'visibility',

        // transformations and transitions
        'transform',
        'transform-origin',
        'transition',
        'transition-delay',
        'transition-timing-function',
        'transition-duration',
        'transition-property',

        // animation
        'animation',
        'animation-name',
        'animation-duration',
        'animation-timing-function',
        'animation-delay',
        'animation-iteration-count',
        'animation-direction',
        'animation-fill-mode',
        'animation-play-state'
      ],
      {
        unspecified: 'bottomAlphabetical'
      }
    ]
  }
}
