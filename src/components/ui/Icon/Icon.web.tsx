import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IconDictionary, IIcon } from 'components/ui';

export default function Icon(props: IIcon) {
  const { name, webStyle } = props;
  const icon = IconDictionary.get(name);

  if (!icon) return null;

  return <FontAwesomeIcon icon={icon} style={webStyle} />;
}
