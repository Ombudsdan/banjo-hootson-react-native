import React, { useMemo } from 'react';
import { ScrollView, StyleSheet, View, Text, Dimensions } from 'react-native';
import { useColorScheme } from 'react-native';
import HomeHeader from '../components/layout/HomeHeader';
import CommunitySection from '../components/common/CommunitySection';
import GallerySection from '../components/common/GallerySection';
import SocialSection from '../components/common/SocialSection';

const { height: windowHeight } = Dimensions.get('window');

export default function HomeScreen() {
  const isDark = useColorScheme() === 'dark';

  const colors = useMemo(
    () => ({
      bg: isDark ? '#020617' : '#F9FAFB',
    }),
    [isDark],
  );

  return (
    <View
      style={[
        styles.root,
        { backgroundColor: colors.bg, minHeight: windowHeight },
      ]}
    >
      <HomeHeader />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text>Welcome to the Home Screen!</Text>
        <CommunitySection />
        <GallerySection />
        <SocialSection />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1, // makes it fill parent,
    display: 'flex', // ensures Flexbox behavior on web
    flexDirection: 'column',
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 24,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
    gap: 24,
  },
});
