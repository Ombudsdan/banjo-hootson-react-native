import React, { createContext, useContext } from 'react';

// Minimal web shim for react-native-safe-area-context (no real safe area)
const defaultInsets = { top: 0, left: 0, right: 0, bottom: 0 };
const InsetsContext = createContext(defaultInsets);

export const SafeAreaProvider = (props: { children?: React.ReactNode }) => {
  return React.createElement(
    InsetsContext.Provider,
    { value: defaultInsets },
    props.children,
  );
};

export function useSafeAreaInsets() {
  return useContext(InsetsContext);
}
