import React, { useMemo } from 'react';
import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native';
import homeHeadingImage from '../../assets/images/home-heading-image.jpg';

export default function HomeHeader() {
  const isDark = useColorScheme() === 'dark';

  const colors = useMemo(
    () => ({
      bg: isDark ? '#020617' : '#0F172A',
      text: '#F9FAFB',
      sub: '#CBD5F5',
      border: isDark ? '#1E293B' : '#1E293B',
    }),
    [isDark],
  );

  return (
    <View
      style={[
        styles.header,
        { backgroundColor: colors.bg, borderBottomColor: colors.border },
      ]}
    >
      <View style={styles.headerContent}>
        <View style={styles.headingWrap}>
          <Text style={[styles.title, { color: colors.text }]}>
            Banjo Hootson
          </Text>
          <Text style={[styles.subtitle, { color: colors.sub }]}>
            Friendly neighbourhood Djungelskog and sound Yorkshireman
          </Text>
        </View>
        <View style={styles.imageWrap}>
          <Image
            source={homeHeadingImage}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 24,
    paddingBottom: 16,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  headingWrap: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
  },
  imageWrap: {
    width: 96,
    height: 96,
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
