import React from 'react';
import { View } from 'react-native';

export default function codegenNativeComponent<TProps = any>(
  _name: string,
): React.ComponentType<TProps> {
  const Stub: React.FC<TProps & { children?: React.ReactNode }> = ({
    children,
    ...rest
  }) => {
    return (
      <View accessibilityLabel={_name} {...(rest as any)}>
        {children}
      </View>
    );
  };
  Stub.displayName = `${_name}_WebStub`;
  return Stub as any;
}
