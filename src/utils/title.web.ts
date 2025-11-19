export function setTitle(title: string) {
  if (typeof document !== 'undefined') {
    document.title = title;
  }
}
