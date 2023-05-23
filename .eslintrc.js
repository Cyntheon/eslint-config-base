module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:import/recommended", "airbnb-base"],
  rules: {
    "class-methods-use-this": "off",
    "no-console": "off",
    "no-empty-function": "off",
    "no-nested-ternary": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    "no-void": "off",

    "import/extensions": "off",
    "import/no-cycle": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.test.ts",
          "**/*.spec.ts",
          "**/*.int-spec.ts",
          "**/*.e2e-spec.ts",
          "**/jest.config.*",
          "**/next.config.js",
        ],
      },
    ],
    "import/prefer-default-export": "off",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      parserOptions: {
        project: ["tsconfig.json"],
      },
      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts"],
        },
        "import/resolver": {
          typescript: {
            alwaysTryTypes: true,
            project: "tsconfig.json",
          },
        },
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "airbnb-typescript/base",
      ],
      rules: {
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/no-empty-function": [
          "error",
          {allow: ["constructors"]},
        ],
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-useless-constructor": "off",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-non-null-assertion": "off",
      },
    },
    {
      files: ["*"],
      extends: ["plugin:prettier/recommended"],
    },
  ],
};
