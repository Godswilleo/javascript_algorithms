// Q2: find the length of numbers in an array that are divisible by both 2 and 3 and at the same time greater than 15

function divisible(X){

    let new_arr = []

    X.forEach(a=>{
        if((a % 2 == 0 && a % 3 == 0) && a > 15)
        {
            new_arr.push(a)
        }
    })

    console.log(new_arr.length)

}

divisible([2,3,12,18,42,24])
divisible([100,84,22,37])
divisible([5,8,6,12])