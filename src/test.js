const lengthOfLongestSubstring = require('./script');

describe('lengthOfLongestSubstring: returns the length of the longest substring', () => {
    test('returns the length of the longest substring', () => {
        let result = lengthOfLongestSubstring('abcabcbb');
        expect(result).toBe(3);
    });
    test('returns the length of the longest substring', () => {
        let result = lengthOfLongestSubstring('bbbbb');
        expect(result).toBe(1);
    });
    test('returns the length of the longest substring', () => {
        let result = lengthOfLongestSubstring('pwwkew');

        expect(result).toBe(3);
    });
    test('returns the length of the longest substring', () => {
        let result = lengthOfLongestSubstring('');

        expect(result).toBe(0);
    });
    test('returns the length of the longest substring', () => {
        let result = lengthOfLongestSubstring('a');

        expect(result).toBe(1);
    });
    test('returns the length of the longest substring', () => {
        let result = lengthOfLongestSubstring('aa');

        expect(result).toBe(1);
    });
    test('returns the length of the longest substring', () => {
        let result = lengthOfLongestSubstring('ab');

        expect(result).toBe(2);
    });
    test('returns the length of the longest substring', () => {
        let result = lengthOfLongestSubstring('aab');

        expect(result).toBe(2);
    });
    test('returns the length of the longest substring ', () => {
        let result = lengthOfLongestSubstring('abb');

        expect(result).toBe(2);
    });
    test('returns the length of the longest substring ', () => {
        let result = lengthOfLongestSubstring('abcde');

        expect(result).toBe(5);
    });
    test('returns the length of the longest substring', () => {
        let result = lengthOfLongestSubstring('abcabcabc');

        expect(result).toBe(3);
    });
    test('returns the length of the longest substring', () => {
        let result = lengthOfLongestSubstring('abccba');

        expect(result).toBe(3);
    });
});

describe('lengthOfLongestSubstring: throws an error if input is not a string', () => {
    test('throws an error if input is not a string', () => {
        expect(() => lengthOfLongestSubstring(null)).toThrow('Input must be a string');
    });
    test('throws an error if input is not a string', () => {
        expect(() => lengthOfLongestSubstring(123)).toThrow('Input must be a string');
    });
    test('throws an error if input is not a string', () => {
        expect(() => lengthOfLongestSubstring(undefined)).toThrow('Input must be a string');
    });
    test('throws an error if input is not a string', () => {
       expect(() => lengthOfLongestSubstring({})).toThrow('Input must be a string');
    });
});