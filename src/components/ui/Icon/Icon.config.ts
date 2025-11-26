import { ComponentProps } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { TextStyle } from 'react-native';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

import { FONT_AWESOME_ICONS } from 'components/ui';

export type FontAwesomeIconName = ComponentProps<typeof FontAwesome>['name'];

export type IconDictionaryRecord = Record<FontAwesomeIconName, IconDefinition>;

export type Icons = keyof typeof FONT_AWESOME_ICONS;

export interface IIcon {
  name: Icons;
  size?: number;
  color?: string;
  style?: TextStyle;
  webStyle?: FontAwesomeIconProps['style'];
}

export type FontAwesomeIconWeb = typeof FontAwesomeIcon | null;
export type FontAwesomeIconMobile = typeof FontAwesome | null;
