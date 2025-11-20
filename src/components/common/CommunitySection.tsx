import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ClickablePanelRow from './ClickablePanelRow';

export default function CommunitySection() {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Plushie Community</Text>
      <ClickablePanelRow groupKey="community-links" />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
  },
});
