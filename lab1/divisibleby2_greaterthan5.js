//BETA: Find the number of the elements in array A that are divisible by 2 and greater than 15

function divisible(A){
    
    let j = 0

    for (let i = 0; i < A.length;i++)
    {
        if ( A[i] % 2 == 0 && A[i] > 15)
        {
            j += 1
        }
    }

    console.log(j)
}

divisible([100,84,37])
divisible([5,8,6,12])