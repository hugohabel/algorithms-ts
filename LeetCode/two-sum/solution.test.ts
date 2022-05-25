import { twoSum } from './solution';

test.each([
  { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] }
])('twoSum($nums, $target)', ({ nums, target, expected }) => {
  expect(twoSum(nums, target)).toStrictEqual(expected);
});
