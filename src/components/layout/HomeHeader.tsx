import React from 'react';
import { StyleSheet, View } from 'react-native';
import homeHeadingImage from '../../assets/images/home-heading-image.jpg';
import { colourUsage } from 'styles/variables';
import PageHeadingText from './PageHeadingText';
import { MyImage } from 'components/ui';

export default function HomeHeader() {
  return (
    <View style={styles.header}>
      <MyImage source={homeHeadingImage} usage="heading" />
      <PageHeadingText />
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
