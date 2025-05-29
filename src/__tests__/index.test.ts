import { getCurrentTimestamp, greetUser } from '../index.js';

describe('greetUser function', () => {
  test('should return correct greeting message', () => {
    const result = greetUser('Alice');
    expect(result).toBe('Hello, Alice! Welcome to TypeScript!');
  });

  test('should handle different user names', () => {
    const result = greetUser('Bob');
    expect(result).toBe('Hello, Bob! Welcome to TypeScript!');
  });

  test('should handle empty string', () => {
    const result = greetUser('');
    expect(result).toBe('Hello, ! Welcome to TypeScript!');
  });

  test('should handle special characters', () => {
    const result = greetUser('测试用户');
    expect(result).toBe('Hello, 测试用户! Welcome to TypeScript!');
  });
});

describe('getCurrentTimestamp function', () => {
  test('should return valid ISO timestamp string', () => {
    const result = getCurrentTimestamp();
    expect(result).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
  });

  test('should return string type', () => {
    const result = getCurrentTimestamp();
    expect(typeof result).toBe('string');
  });

  test('should be convertible back to Date object', () => {
    const result = getCurrentTimestamp();
    const date = new Date(result);
    expect(date.toISOString()).toBe(result);
  });

  test('should return different timestamps on consecutive calls', async () => {
    const timestamp1 = getCurrentTimestamp();
    await new Promise((resolve) => setTimeout(resolve, 1));
    const timestamp2 = getCurrentTimestamp();
    expect(timestamp1).not.toBe(timestamp2);
  });
});
