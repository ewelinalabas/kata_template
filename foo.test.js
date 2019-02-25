import { duplicateCount } from './foo'

test('duplicateCount 0', () => {
  expect(duplicateCount("")).toBe(0);
});

test('duplicateCount abcd', () => {
  expect(duplicateCount("abdc")).toBe(0);
});

test('duplicateCount aabbcd', () => {
  expect(duplicateCount("Aabbdc")).toBe(2);
});