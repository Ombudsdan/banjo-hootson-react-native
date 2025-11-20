import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ClickablePanelRow from './ClickablePanelRow';

export default function SocialSection() {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Come join me on my adventures!</Text>
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
