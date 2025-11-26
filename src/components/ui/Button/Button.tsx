import { Pressable, StyleSheet } from 'react-native';
import { ButtonProps } from 'components/ui';

export default function Button(props: ButtonProps) {
  const { id, onPress } = props;

  return (
    <Pressable
      key={id}
      style={({ pressed }) => [styles.panel, pressed && styles.panelPressed]}
      onPress={onPress}
    >
      {props.children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  panel: {},
  panelPressed: { opacity: 0.8 },
});
