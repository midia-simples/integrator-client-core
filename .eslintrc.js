module.exports = {
    "env": {
        "node": true,
        "es6": true,
        "es2021": true
    },
    "extends": [
        "airbnb-base"
    ],
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "rules": {
        'no-underscore-dangle': 'off',
        'class-methods-use-this': 'off',
        'prefer-destructuring': 'off',
        'no-param-reassign': 'off',
        camelcase: 'off',
        'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    },
    settings: {
      'import/resolver': 'babel-plugin-root-import',
    },
};
