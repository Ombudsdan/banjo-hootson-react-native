import { PressableProps } from 'react-native';

import { ButtonProps } from 'components/ui';

type ClickablePanelButtonProps = Exclude<PressableProps, keyof ButtonProps> &
  ButtonProps;
export type ClickablePanelProps = ClickablePanelButtonProps & IClickablePanel;

export interface IClickablePanel {
  id: string;
  label: string;
  href: string;
}
