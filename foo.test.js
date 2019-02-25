import { foo, hello } from './foo'

test('it returns 1', () => {
  expect(foo).toBe(1);
});

test('hello', () => {
  expect(hello("Tomek")).toBe("Hello Tomek!");
});
