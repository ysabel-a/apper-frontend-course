function transform(nums) {

  // shortened version:
  // return nums.map(num => num*num).sort((a, b) => a - b);


  //long version using for loop:
  // Use a loop to square each element in the array
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i]
  }

  // Sort the array in ascending order and return
  return nums.sort((a, b) => a - b)
  }
  
  const nums = [4,9,5,3,8]
  const sortedSquaredNums = transform(nums)
  console.log(sortedSquaredNums) // [9, 16, 25, 64, 81]