# Mobile Developer Exercise
🚀 Starship Test App

### Features

- ⚡ [Expo](https://expo.dev) for mobile development
- ⚛️ [React Native](https://reactnative.dev) for building native apps using React
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 📁 File-based routing with Expo Router
- 📏 Linter with [ESLint](https://eslint.org)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🦺 Unit Testing with Jest and React Testing Library
- 🧪 E2E Testing with Detox
- 💡 Absolute Imports using `@` prefix

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/khoivtd/expo-starship.git project-name
cd project-name
yarn install
```

Then, you can run locally in development mode with live reload:

```shell
yarn run dev:ios
# Or
yarn run dev:android
```

This will open the app in the iOS simulator or Android emulator.

### Testing

Testing is an important part of the development process and often the neglected one. This starter code comes up with Jest and React Testing Library for unit testing and Detox for E2E testing.

#### Unit Testing

To run the unit tests, run the following command:

```shell
yarn run test
```

#### E2E Testing

To run the E2E tests, you first need to run the following command:

```shell
yarn run e2e:prepare # Only need to run once
```

Then, you can run the following command to run the E2E tests:

```shell
yarn run e2e:ios
# Or
yarn run e2e:android
```

---
