import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Heading } from 'components/ui/Heading';

import ClickablePanelRow from './ClickablePanelRow';

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
