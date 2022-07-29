export function isEqual(a: any, b: any) {
  if (a === b) return true
  return Object.entries(a).reduce<boolean>((prev, [key, value]) => value === b[key] && prev, true)
}
