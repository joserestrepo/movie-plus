module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'react-hooks', 'import', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
}
