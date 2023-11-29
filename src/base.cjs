/** @type {import("eslint").Linter.Config} */
module.exports = {
    env: {
        es2021: true,
    },
    plugins: ['import', 'jsdoc'],
    extends: [
        'eslint:recommended',
    ],
};
