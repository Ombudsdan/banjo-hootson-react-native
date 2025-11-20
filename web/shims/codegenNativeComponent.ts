import React, { ReactNode, ComponentType, FC } from 'react';
import { View } from 'react-native';

export default function codegenNativeComponent<TProps = any>(
  name: string,
): ComponentType<TProps> {
  const Stub: FC<TProps & { children?: ReactNode }> = ({
    children,
    ...rest
  }) => {
    return React.createElement(
      View,
      { accessibilityLabel: name, ...(rest as any) },
      children,
    );
  };

  Stub.displayName = `${name}_WebStub`;
  return Stub as any;
}
