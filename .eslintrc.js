module.exports = {
    plugins: ['no-secrets'],
    rules: {
      'no-secrets/no-console': 'off', // Tắt cảnh báo liên quan đến console
    },
    "extends": "airbnb",
    "plugins": ["react"]
};
