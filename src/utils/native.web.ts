export function showToast(message: string) {
  if (typeof window !== 'undefined') {
    // Prefer a non-blocking toast later; for now use alert as simple feedback
    // eslint-disable-next-line no-alert
    alert(message);
  }
}

export function vibrate(pattern?: number | number[]) {
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    (navigator as any).vibrate?.(pattern ?? 200);
  }
}

export async function share(text: string) {
  try {
    if (typeof navigator !== 'undefined' && (navigator as any).share) {
      await (navigator as any).share({ text });
      return true;
    }
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      // eslint-disable-next-line no-alert
      alert('Copied to clipboard');
      return true;
    }
  } catch {}
  return false;
}
