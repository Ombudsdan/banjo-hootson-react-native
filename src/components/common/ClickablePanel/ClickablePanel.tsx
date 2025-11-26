import { StyleSheet, Text, View } from 'react-native';

import { ClickablePanelProps } from 'components/common/ClickablePanel';
import { Button, ButtonProps } from 'components/ui';
import { filterKeys } from 'utils/utils';

const BUTTON_PROPS_KEYS: (keyof ButtonProps)[] = ['id', 'label', 'onPress'];

export default function ClickablePanel(props: ClickablePanelProps) {
  const { label } = props;
  const buttonProps = filterKeys<ButtonProps>(props, BUTTON_PROPS_KEYS);

  return (
    <View style={styles.container}>
      <Button {...buttonProps} />
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'column', rowGap: 4, alignItems: 'center' },
  label: {},
});
