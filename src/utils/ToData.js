export function toSplitList(inputString) {
  return inputString.split(',').map((value) => value.split('-'));
}
