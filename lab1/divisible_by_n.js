//GAMMA: Extracts all the value of an array that a divisible by n

function isDivisible(arr,n){
    
    const new_arr = [];

    for (let i = 0; i < arr.length;i++)
    {
        if (arr[i] % n == 0 && !(new_arr.includes(arr[i])))
        {
            new_arr.push(arr[i])
        }
    }

    console.log(new_arr)
}

isDivisible([100,84,37],2)
isDivisible([5,8,6,12],3)
isDivisible([1,3,5,6,3,6,7,4],2)
