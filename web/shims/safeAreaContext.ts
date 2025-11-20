import React, { createContext, useContext } from 'react';
import { useWindowDimensions, View } from 'react-native';

// Minimal web shim for react-native-safe-area-context (no real safe area)
export type EdgeInsets = {
  top: number;
  left: number;
  right: number;
  bottom: number;
};

const defaultInsets: EdgeInsets = { top: 0, left: 0, right: 0, bottom: 0 };
const InsetsContext = createContext<EdgeInsets>(defaultInsets);

export const SafeAreaProvider = (props: { children?: React.ReactNode }) => {
  return React.createElement(
    InsetsContext.Provider,
    { value: defaultInsets },
    props.children,
  );
};

// React Navigation expects this context symbol to exist.
export const SafeAreaInsetsContext = InsetsContext;

export function useSafeAreaInsets(): EdgeInsets {
  return useContext(InsetsContext);
}

// React Navigation 7 expects useSafeAreaFrame to exist.
export function useSafeAreaFrame() {
  const { width, height } = useWindowDimensions();

  return {
    x: 0,
    y: 0,
    width,
    height,
  };
}

// Provide a basic initialWindowMetrics object for SafeAreaProviderCompat.
export const initialWindowMetrics = {
  insets: defaultInsets,
  frame: {
    x: 0,
    y: 0,
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  },
};

// Basic SafeAreaView shim that just renders children inside a View.
export const SafeAreaView = (props: { children?: React.ReactNode }) => {
  return React.createElement(View, null, props.children);
};
