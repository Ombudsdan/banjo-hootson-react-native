import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Heading } from 'components/ui/Heading';

import ClickablePanelRow from './ClickablePanelRow';

export default function SocialSection() {
  return (
    <View style={styles.section}>
      <Heading level={2}>Come join me on my adventures!</Heading>
      <ClickablePanelRow groupKey="social-links" />
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
