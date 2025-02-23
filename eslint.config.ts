// import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
// import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
// import vueEslintParser from 'vue-eslint-parser'
// import oxlint from 'eslint-plugin-oxlint'
// import pluginVue from 'eslint-plugin-vue'

// export default defineConfigWithVueTs(
//   {
//     name: 'app/files-to-lint',
//     files: ['**/*.{ts,mts,tsx,vue}']
//   },
//   {
//     name: 'app/files-to-ignore',
//     ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', 'types/app.d.ts']
//   },
//   pluginVue.configs['flat/recommended'],
//   vueTsConfigs.recommended,
//   oxlint.configs['flat/recommended'],
//   skipFormatting,
//   {
//     rules: {
//       'vue/require-default-prop': 'off',
//       'vue/attribute-hyphenation': 'off',
//       'vue/html-closing-bracket-newline': [
//         'error',
//         {
//           singleline: 'never',
//           multiline: 'never'
//         }
//       ],
//       'vue/attributes-order': [
//         'error',
//         {
//           order: [
//             'DEFINITION',
//             'LIST_RENDERING',
//             'CONDITIONALS',
//             'RENDER_MODIFIERS',
//             'GLOBAL',
//             'UNIQUE',
//             'TWO_WAY_BINDING',
//             'OTHER_DIRECTIVES',
//             'OTHER_ATTR',
//             'EVENTS',
//             'CONTENT'
//           ]
//         }
//       ]
//     },
//     languageOptions: {
//       parser: vueEslintParser,
//       ecmaVersion: 'latest',
//       sourceType: 'module'
//     }
//   }
// )

import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import typescriptEslint from 'typescript-eslint'

export default typescriptEslint.config(
  { ignores: ['*.d.ts', '**/coverage', '**/dist'] },
  {
    extends: [
      eslint.configs.recommended,
      ...typescriptEslint.configs.recommended,
      ...eslintPluginVue.configs['flat/recommended']
    ],
    files: ['**/*.{ts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        parser: typescriptEslint.parser
      }
    },
    rules: {
      // your rules
      'vue/require-default-prop': 'off',
      'vue/attribute-hyphenation': 'off',
      'vue/html-closing-bracket-newline': [
        'error',
        {
          singleline: 'never',
          multiline: 'never'
        }
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'vue/attributes-order': [
        'error',
        {
          order: [
            'DEFINITION',
            'LIST_RENDERING',
            'CONDITIONALS',
            'RENDER_MODIFIERS',
            'GLOBAL',
            'UNIQUE',
            'TWO_WAY_BINDING',
            'OTHER_DIRECTIVES',
            'OTHER_ATTR',
            'EVENTS',
            'CONTENT'
          ]
        }
      ]
    }
  },
  eslintConfigPrettier
)
