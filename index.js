function map(arr, cb){
  let newArr = []
  for (let i = 0; i < arr.length; i++){
    newArr.push(cb(arr[i]))
  }
  return newArr
}


function reduce(arr, cb, starting){
  let sum = (!!starting) ? starting : arr[0]

  for (let i = (!!starting) ? 0 : 1; i < arr.length; i++){
    sum = cb(arr[i], sum)
  }
  return sum
}