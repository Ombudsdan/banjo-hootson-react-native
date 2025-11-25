import { View, Image as NativeImage, StyleSheet } from 'react-native';
import {
  buildImageContainerStyles,
  buildImageStyles,
  type IImage,
} from 'components/ui/Image';

export default function Image(props: IImage) {
  const styles = buildStyles(props);
  return (
    <View style={styles.container}>
      <NativeImage
        source={props.source}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
}

function buildStyles(props: IImage) {
  return StyleSheet.create({
    container: buildImageContainerStyles(props),
    image: buildImageStyles(),
  });
}
