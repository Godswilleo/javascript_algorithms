//HERCULES: Replace all numbers in an array X divisble by an integer U with the string "isDivisible"

function replaceDivisible(X,Y)
{
    const new_arr = []
    
    for (let i = 0; i < X.length; i++)
    {
        if(X[i] % Y == 0)
        {
            X[i] = "isDivisible"
        }

        new_arr.push(X[i])
    }
    console.log(new_arr)

}

replaceDivisible([2,4,3,6,5],3)