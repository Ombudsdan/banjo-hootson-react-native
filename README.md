This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

## Overview

Banjo Hootson is a React Native application that runs on **Android**, **iOS**, and **Web**.

- Native: standard React Native projects in `android/` and `ios/`.
- Web: Vite + `react-native-web` using the same `App.tsx` as native.
- Platform‑specific behavior (title, toast, vibration, share) lives behind small utility modules.

This README covers environment setup, web usage, and native usage on both Windows and macOS.

---

## 1. Environment setup

### 1.1 Requirements

- **Node**: `>= 20` (see `"engines"` in `package.json`).
- **Git**.
- **Package manager**: `npm` (bundled with Node).
- **Java JDK 17** (for Android / Gradle).
- **Android Studio** (for SDK, emulator, tools).
- **Optional macOS only**: Xcode + iOS Simulator for running iOS.

### 1.2 `.env` configuration

This project uses a simple `.env` file in the project root to describe your Java and Android SDK locations. Example (Windows):

```dotenv
JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot
ANDROID_HOME=C:\Users\<your-username>\AppData\Local\Android\Sdk
```

On macOS a typical example might be:

```dotenv
JAVA_HOME=/Library/Java/JavaVirtualMachines/temurin-17.jdk/Contents/Home
ANDROID_HOME=$HOME/Library/Android/sdk
```

> Keep these paths up to date with your actual JDK 17 and Android SDK locations.

### 1.3 What the helper scripts do

The helper scripts read `.env`, set `JAVA_HOME` / `ANDROID_HOME`, and prepend the relevant `bin` folders to `PATH` for the current shell session:

- Windows: `scripts/setup-android-env.ps1`
- macOS: `scripts/setup-android-env-macos.sh`

You **do not** need to add these to global environment variables; just run the scripts (or the npm shortcuts) in any shell before using React Native’s native commands.

---

## 2. Web (Vite + react-native-web)

The web build reuses the shared `App.tsx` via `react-native-web`, bundled with Vite.

### 2.1 Commands

From the project root:

```bash
npm install          # first time only
npm run web:dev      # start Vite dev server (http://localhost:5175)
npm run web:build    # production build to dist-web/
npm run web:preview  # preview production build (http://localhost:5174)
```

### 2.2 How it works

- `vite.config.ts`

  - Uses `web/` as the Vite root.
  - Aliases `react-native` → `react-native-web` so React Native components render in the DOM.
  - Provides shims for some React Native internals used by `react-native-safe-area-context`.
  - Outputs a production build into `dist-web/`.

- `web/index.html`

  - Minimal HTML shell with a `#root` element.

- `web/main.tsx`

  - Registers the `App` with `AppRegistry` and runs it into `#root`.

- `App.tsx`
  - Shared landing page for Android, iOS, and Web.
  - Includes a counter, name input, platform label, link to RN docs, and “device actions” buttons.

---

## 3. Native: Android

Android is the primary native target for this project on Windows, but all instructions also apply on macOS.

### 3.1 One‑shot npm scripts

These scripts automatically configure your environment from `.env` and then delegate to the React Native CLI:

```bash
# Windows (PowerShell)
npm run start:windows    # setup env + start Metro
npm run android:windows  # setup env + build & run on Android

# macOS (bash/zsh)
npm run start:mac        # setup env + start Metro
npm run android:mac      # setup env + build & run on Android
```

Typical workflow on Windows:

1. Start an Android emulator from Android Studio (e.g. Pixel API level 34).
2. In a PowerShell window at the project root:
   - `npm run start:windows` (Metro bundler).
3. In another PowerShell window at the project root:
   - `npm run android:windows` (builds the app and installs it on the emulator or connected device).

### 3.2 Manual commands (advanced)

If you prefer to manage environment variables yourself, you can:

```bash
# Start Metro
npm start

# In another terminal, with JAVA_HOME / ANDROID_HOME correctly configured
npm run android
```

On macOS the equivalents are the same commands, as long as Java 17 and the Android SDK are correctly installed.

---

## 4. Native: iOS (macOS only)

iOS builds require macOS with Xcode installed.

On macOS:

```bash
npm run ios
```

You can also open the Xcode project in `ios/` directly and run from there.

> On Windows you can edit `ios/` source files, but you cannot build or run the iOS app locally.

---

## 5. Project structure & platform utilities

- `App.tsx`

  - Shared entry component for Android, iOS, and Web.

- `web/`

  - `index.html` – HTML shell for Vite.
  - `main.tsx` – web entrypoint using `AppRegistry`.
  - `shims/` – minimal modules used to satisfy React Native internal imports in the web bundle.

- `src/utils/title.*`

  - `title.web.ts` – sets `document.title`.
  - `title.native.ts` – no‑op for native platforms.

- `src/utils/native.*`
  - `native.android.ts` – toast (ToastAndroid), vibrate, share via React Native APIs.
  - `native.ios.ts` – alert‑based toast, vibrate, share via React Native APIs.
  - `native.web.ts` – browser fallbacks: `alert`, `navigator.vibrate`, `navigator.share` / clipboard.

These modules let you write “native‑feeling” behavior once and have it adapt per platform.

---

## 6. Troubleshooting

**Metro won’t start / port in use**

- Another dev server might be using the port. Stop other Node processes or change ports in `vite.config.ts` / Metro config if needed.

**Android build fails with Java errors**

- Verify `JAVA_HOME` in `.env` points to a Java 17 JDK (not 21+).
- Ensure you’ve run the helper script (`start:windows`, `start:mac`) in the current shell.

**`adb` not recognized / emulator not found**

- Ensure `ANDROID_HOME` in `.env` points to the SDK root used by Android Studio.
- Confirm you have at least one virtual device created and running.

For general React Native issues, also see the official [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.
