export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '@/(.*)': '<rootDir>/src/$1',
    'react-markdown':
      '<rootDir>/node_modules/react-markdown/react-markdown.min.js',
    '\\.(mp3)$': '<rootDir>/src/assets/music/index.ts',
  },
}
