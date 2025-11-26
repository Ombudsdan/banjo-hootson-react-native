import {
  faBeer,
  faCoffee,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIconName, IconDictionaryRecord } from 'components/ui';

export const FONT_AWESOME_ICONS = {
  coffee: faCoffee,
  beer: faBeer,
} as const satisfies Partial<IconDictionaryRecord>;

const IconDictionary = (
  Object.entries(FONT_AWESOME_ICONS) as [FontAwesomeIconName, IconDefinition][]
).reduce((map, [key, value]) => {
  map.set(key, value);
  return map;
}, new Map<FontAwesomeIconName, IconDefinition>());

export default IconDictionary;
