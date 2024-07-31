export default function cleanSet(set, string) {
  let cleanSet = '';
  if (!string || typeof (string) !== 'string') { return cleanSet; }
  for (const s of set) {
    if (s && s.startsWith(string)) {
      cleanSet += `${s.slice(string.length)}-`;
    }
  }
  return cleanSet.slice(0, -1);
}
