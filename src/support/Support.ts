export function elementOf<T extends Element>(id: string) {
  return <T>document.querySelector(id);
}
