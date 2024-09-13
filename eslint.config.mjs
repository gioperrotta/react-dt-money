import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import react from 'eslint-plugin-react'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import reactHooks from 'eslint-plugin-react-hooks'
// import importHelpers from "eslint-plugin-import-helpers";
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default [
  {
    ignores: ['**/*.css', '**/.snap']
  },
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended'
    )
  ),
  {
    plugins: {
      react: fixupPluginRules(react),
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      'react-hooks': fixupPluginRules(reactHooks)
      // "import-helpers": importHelpers,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module'
    },

    settings: {
      react: {
        version: 'detect'
      },

      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      }
    },

    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      'import/no-cycle': 'off',
      camelcase: 'off',
      'jsx-a11y/heading-has-content': 'off',
      'jsx-a11y/anchor-has-content': 'off',
      'jsx-a11y/iframe-has-title': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      'prettier/prettier': [
        'error',
        {
          trailingComma: 'none',
          semi: false,
          singleQuote: true,
          pluginSearchDirs: false
        }
      ]

      // "import-helpers/order-imports": ["warn", {
      //     newlinesBetween: "always",

      //     groups: [
      //         ["/^react/", "/^next/"],
      //         "/^@testing-library/react/",
      //         "/^contentlayer/",
      //         "/^fs/",
      //         "/^disqus-react/",
      //         "module",
      //         "/^@shared/",
      //         "absolute",
      //         "/^@/components/",
      //         "/^@/pages/",
      //         "/utils/",
      //         "/^@/models/",
      //         "/^@/store/",
      //         "/^@/lib/",
      //         "/^@/styles/",
      //         "/^@/templates/",
      //         ["parent", "sibling", "index"],
      //     ],

      //     alphabetize: {
      //         order: "asc",
      //         ignoreCase: true,
      //     },
      // }],
    }
  }
]
