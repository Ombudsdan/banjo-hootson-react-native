import React from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { PANEL_GROUPS, PanelGroupId } from '../../config/clickablePanels';

export default function ClickablePanelRow({
  groupKey,
}: {
  groupKey: PanelGroupId | string;
}) {
  const links = PANEL_GROUPS[groupKey as PanelGroupId] ?? [];

  if (!links.length) return null;

  return (
    <View style={styles.row}>
      {links.map(link => (
        <Pressable
          key={link.id}
          style={({ pressed }) => [
            styles.panel,
            pressed && styles.panelPressed,
          ]}
          onPress={() => Linking.openURL(link.href)}
        >
          <Text style={styles.label}>{link.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  panel: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#111827',
  },
  panelPressed: {
    opacity: 0.8,
  },
  label: {
    color: '#F9FAFB',
    fontSize: 14,
    fontWeight: '600',
  },
});
