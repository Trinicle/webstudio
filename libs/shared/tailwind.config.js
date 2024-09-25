const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        wstheme: {
          "primary": '#1d4ed8',
          "secondary": "#f59e0b",
          "accent": "#10b981",
          "neutral": "#ffffff",
          "base-100": "#ffffff",
        }
      }
    ]
  }
};
