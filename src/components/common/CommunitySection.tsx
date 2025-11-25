import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ClickablePanelRow from './ClickablePanelRow';
import Heading from '../ui/Heading/Heading';

export default function CommunitySection() {
  return (
    <View style={styles.section}>
      <Heading level={2}>Plushie Community</Heading>
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
