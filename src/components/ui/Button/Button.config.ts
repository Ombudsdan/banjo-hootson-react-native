import { PressableProps } from 'react-native';
import { CommonComponentProps } from 'types/react-native';

interface IButton {
  id: string;
  label?: string;
  onPress: NonNullable<PressableProps['onPress']>;
}

export type ButtonProps = CommonComponentProps<PressableProps, IButton>;
