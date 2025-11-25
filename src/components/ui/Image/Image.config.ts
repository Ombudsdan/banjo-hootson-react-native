import { ImageProps, ViewStyle } from 'react-native';

type ImageSource = NonNullable<ImageProps['source']>;
type ImageUsageType = 'heading' | 'gallery' | 'bio';
type ImageShapeType = 'circle' | 'rounded-square';
type ImageFrameType = 'light' | 'dark';

export interface IImage {
  source: ImageSource;
  usage?: ImageUsageType;
  shape?: ImageShapeType;
  frame?: ImageFrameType;
}

export type ImageDimensions = Required<Pick<ViewStyle, 'width' | 'height'>>;
