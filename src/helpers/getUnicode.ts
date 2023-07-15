export const getUnicodeCharacter = (...codePoints: string[]): string => {
  return codePoints
    .map(codePoint => String.fromCodePoint(parseInt(codePoint.substr(2), 16)))
    .join('');
};
