import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Heading } from 'components/ui/Heading';
import { ClickablePanelRow } from 'components/common/ClickablePanelRow';

export default function CommunitySection() {
  return (
    <View style={styles.section}>
      <Heading level={2}>Plushie Community</Heading>
      <ClickablePanelRow groupKey="community-links" />
      {/* <View>
        <FlatList
          data={mockGalleryItems}
          keyExtractor={item => item.id}
          horizontal
          contentContainerStyle={styles.listContent}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image
                source={item.source}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          )}
        />
      </View> */}
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
