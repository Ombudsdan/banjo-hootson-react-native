import { StyleSheet, Text, View } from 'react-native';
import { colourUsage } from 'styles/variables';
import { Heading } from 'components/ui/Heading';
import { fontFamilyStyles } from 'styles/typography';

export default function PageHeadingText() {
  return (
    <View style={styles.headingWrap}>
      <Heading level={1} styles={styles.title}>
        Banjo Hootson
      </Heading>
      <Text style={styles.subtitle}>
        Friendly neighbourhood Djungelskog and sound Yorkshireman
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headingWrap: {
    marginTop: 8,
  },
  title: {
    color: colourUsage.heroText,
  },
  subtitle: {
    color: colourUsage.heroText,
    ...fontFamilyStyles.poppins_bold,
    textAlign: 'center',
    fontSize: 14,
  },
});
