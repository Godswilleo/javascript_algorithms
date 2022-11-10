//Q1: Takes a array and returns the sum of all the numbers divisible by 2 and 3 in the array

function sum(x){
    let a = 0;
    for (let i = 0; i < x.length; i++)
    {
        if(x[i] % 2 == 0 && x[i] % 3 == 0)
        {
            a += x[i]
        }
    }
    console.log(a)
}

sum([6])
sum([2,5,7,3])
sum([12,5,6,3])
sum([2,12,18])