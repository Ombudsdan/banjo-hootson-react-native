import React from 'react';
import { StyleSheet, View } from 'react-native';

import homeHeadingImage from 'assets/images/home-heading-image.jpg';
import { Image } from 'components/ui';
import { colourUsage } from 'styles/variables';
import { PageHeading } from 'components/common';

export default function HomeHeader() {
  return (
    <View style={styles.header}>
      <Image source={homeHeadingImage} usage="heading" />
      <PageHeading />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colourUsage.heroBackground,
    paddingTop: 24,
    paddingBottom: 24,
    paddingHorizontal: 16,
    width: '100%',
  },
});
