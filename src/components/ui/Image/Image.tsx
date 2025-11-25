import { View, Image, StyleSheet } from 'react-native';

import type { IMyImage } from 'components/ui/Image';

import { buildImageContainerStyles, buildImageStyles } from './Image.styles';

export default function MyImage(props: IMyImage) {
  const styles = buildStyles(props);
  return (
    <View style={styles.container}>
      <Image source={props.source} style={styles.image} resizeMode="cover" />
    </View>
  );
}

function buildStyles(props: IMyImage) {
  return StyleSheet.create({
    container: buildImageContainerStyles(props),
    image: buildImageStyles(),
  });
}
