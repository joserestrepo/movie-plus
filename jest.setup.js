Object.defineProperty(global, '__non_webpack_require__', {
  value: () => {
    throw new Error('Dynamic requires are not allowed by Jest')
  },
})

Object.defineProperty(global, 'import.meta', {
  value: { env: { VITE_URL_IMAGES: 'mocked_url' } },
})
