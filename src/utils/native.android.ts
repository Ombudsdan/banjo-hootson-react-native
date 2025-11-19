import { ToastAndroid, Vibration, Share } from 'react-native';

export function showToast(message: string) {
  ToastAndroid.show(message, ToastAndroid.SHORT);
}

export function vibrate(pattern?: number | number[]) {
  if (pattern) Vibration.vibrate(pattern);
  else Vibration.vibrate(200);
}

export async function share(text: string) {
  try {
    await Share.share({ message: text });
    return true;
  } catch (e) {
    return false;
  }
}
