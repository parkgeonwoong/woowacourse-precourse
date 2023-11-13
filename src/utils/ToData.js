export function toSplitList(inputString) {
  return inputString.split(',').map((value) => value.split('-'));
}

export function toCommaFormat(number) {
  return number.toLocaleString();
}
