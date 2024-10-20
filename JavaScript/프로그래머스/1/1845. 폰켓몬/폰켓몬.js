function solution(nums) {
    const target = new Set(nums);
    const maxNum = nums.length / 2;
    
    return Math.min(target.size, maxNum);
}
