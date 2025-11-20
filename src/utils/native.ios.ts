import { Alert, Vibration, Share } from 'react-native';

export function showToast(message: string) {
  Alert.alert('Notice', message);
}

export function vibrate(pattern?: number | number[]) {
  if (pattern) Vibration.vibrate(pattern);
  else Vibration.vibrate(200);
}

export async function share(text: string) {
  try {
    await Share.share({ message: text });
    return true;
  } catch {
    // intentionally ignore share errors
    return false;
  }
}
