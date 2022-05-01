export function toBackendCart(items) {
  return items.map(({ _id, amount }) => ({ item: _id, unit: amount }));
}
export function toFrontendCart(item) {
  return item.map(({ item, unit }) => ({ _id: item, amount: unit }));
}
