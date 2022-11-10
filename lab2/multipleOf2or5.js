//Q6: Takes a array of numbers and returns the nubers that are multiple of 3 or 5

function multiples(x){

    let new_arr = []
    for (let i = 0; i < x.length;i++)
    {
        if (x[i] % 2 == 0 || x[i] % 5 == 0)
        {
            new_arr.push(x[i])
        }
    }
    console.log(new_arr)
}

multiples([2,11,45])
multiples([3,155,5,18])
multiples([3,7])