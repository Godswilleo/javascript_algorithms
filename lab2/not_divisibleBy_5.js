// Q2: Takes an array and return all the numbers that are not divisible by 5

function divisible(x){
    let new_arr = [];
    for (let i = 0; i < x.length; i++)
    {
        if(!(x[i] % 5 == 0))
        {
            new_arr.push(x[i])        
        }
    }
    console.log(new_arr)
}

divisible([3,5,15])
divisible([23,12])
divisible([3,25])

