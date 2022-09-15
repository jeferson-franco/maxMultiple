const solution = require('./maxMultiple.js');

test('test 1', () => {
    expect(solution(3, 10)).toBe(9);
});

test('test 2', () => {
    expect(solution(2, 7)).toBe(6);
});

test('test 3', () => {
    expect(solution(10, 50)).toBe(50);
});

test('test 4', () => {
    expect(solution(7, 100)).toBe(98);
});

test('test 5', () => {
    expect(solution(7, 20)).toBe(14);
});

test('test 6', () => {
    expect(solution(5, 13)).toBe(10);
});

test('test 7', () => {
    expect(solution(8, 88)).toBe(88);
});

test('test 8', () => {
    expect(solution(10, 100)).toBe(100);
});

test('test 9', () => {
    expect(solution(2, 5)).toBe(4);
});

test('test 10', () => {
    expect(solution(3, 5)).toBe(3);
});

test('test 11', () => {
    expect(solution(9, 11)).toBe(9);
});

test('test 12', () => {
    expect(solution(8, 15)).toBe(8);
});

test('test 13', () => {
    expect(solution(9, 60)).toBe(54);
});
