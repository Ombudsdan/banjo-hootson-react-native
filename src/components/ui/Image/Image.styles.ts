import { ColorValue, ImageStyle, ViewStyle } from 'react-native';

import type { ImageDimensions, IMyImage } from 'components/ui/Image';
import { colour } from 'styles/variables';

export function buildImageStyles(): ImageStyle {
  return {
    width: '100%',
    height: '100%',
  };
}

export function buildImageContainerStyles(props: IMyImage): ViewStyle {
  const frame = setFrame(props);
  const dimensions = setDimensions(props.usage);
  const shape = setShape(props);

  return {
    ...(frame || {}),
    ...(shape || {}),
    overflow: 'hidden',
    width: dimensions.width,
    height: dimensions.height,
  };
}

function setShape(props: IMyImage) {
  if (!props.usage && !props.shape) return undefined;
  let shape: IMyImage['shape'];

  if (props.shape) shape = props.shape;
  else shape = inferShapeFromUsage(props);

  return {
    borderRadius: setBorderRadius(shape),
  };
}

function inferShapeFromUsage(props: IMyImage) {
  switch (props.usage) {
    case 'heading':
      return 'circle';
    case 'bio':
    case 'gallery':
      return 'rounded-square';
    default:
      return undefined;
  }
}

function setFrame(props: IMyImage) {
  if (!props.frame && !props.usage) return undefined;
  let frame: IMyImage['frame'];

  if (props.frame) frame = props.frame;
  else if (props.usage === 'heading') frame = 'dark';
  else return undefined;

  const frameColours = setFrameColours(frame);
  return {
    borderWidth: 3,
    ...frameColours,
  };
}

function setBorderRadius(shape: IMyImage['shape']) {
  if (!shape) return 0;
  if (shape === 'circle') return 9999;
  if (shape === 'rounded-square') return 16;
  return 0;
}

function setFrameColours(frame: IMyImage['frame']) {
  let outerRingColour: ColorValue;
  const innerRingColour: ColorValue = colour.white;

  if (frame === 'light') outerRingColour = colour.tan;
  else if (frame === 'dark') outerRingColour = colour.brown;
  else outerRingColour = 'transparent';

  return {
    borderColor: innerRingColour,
    boxShadow: `0 0 0 4px ${String(outerRingColour)},
    0 0 0 8px rgba(255, 255, 255, 0.3),
    0 4px 15px rgba(0, 0, 0, 0.3)`,
  };
}

function setDimensions(usage: IMyImage['usage']): ImageDimensions {
  switch (usage) {
    case 'heading':
      return { width: 150, height: 150 };
    case 'bio':
    case 'gallery':
    default:
      return { width: 120, height: 120 };
  }
}
