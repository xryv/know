module.exports = {
    extends: [
      'next/core-web-vitals',
    ],
    rules: {
        'react/no-unescaped-entities': 'off', // Disable the rule
      },
    overrides: [
      {
        files: ['*.js', '*.ts', '*.jsx', '*.tsx'],
        rules: {
          // You can add rules specific to these file types if needed
        },
      },
    ],

  };
  