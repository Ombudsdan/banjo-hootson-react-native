import { ComponentProps } from 'react';
import { Text } from 'react-native';

export type RootComponentProps = ComponentProps<typeof Text>;

export type CommonComponentProps<
  TRootComponentProps extends RootComponentProps,
  TCustomComponentProps extends {},
> = RootComponentProps<TRootComponentProps> & TCustomComponentProps;
