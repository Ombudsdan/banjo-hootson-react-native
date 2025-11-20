import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import imgConnect1 from '../../assets/images/home-connect-1.jpg';
import imgConnect2 from '../../assets/images/home-connect-2.jpg';
import imgConnect3 from '../../assets/images/home-connect-3.jpg';
import imgConnect4 from '../../assets/images/home-connect-4.jpg';

// Simple gallery roughly mirroring web GalleryController.homeItems.
const mockGalleryItems = [
  {
    id: '1',
    title: 'Meeting friends',
    source: imgConnect1,
  },
  {
    id: '2',
    title: 'City adventures',
    source: imgConnect2,
  },
  {
    id: '3',
    title: 'Big journeys',
    source: imgConnect3,
  },
  {
    id: '4',
    title: 'Cosy evenings',
    source: imgConnect4,
  },
];

export default function GallerySection() {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>
        Exploring the plushie world is my passion...
      </Text>
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
            <Text style={styles.caption}>{item.title}</Text>
          </View>
        )}
      />
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
  listContent: {
    gap: 12,
  },
  card: {
    width: 160,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#020617',
  },
  image: {
    width: '100%',
    height: 110,
  },
  caption: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    fontSize: 12,
    color: '#E5E7EB',
  },
});
