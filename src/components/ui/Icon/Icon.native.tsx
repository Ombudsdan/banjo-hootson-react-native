import { IconDictionary, IIcon } from 'components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconDefinition, library } from '@fortawesome/fontawesome-svg-core';

export default function Icon(props: IIcon) {
  const { name } = props;
  const icon = IconDictionary.get(name);
  if (!icon) return null;

  const { prefix, iconName } = icon;

  library.add(icon as IconDefinition);

  return <FontAwesomeIcon icon={{ prefix, iconName }} />;
}
