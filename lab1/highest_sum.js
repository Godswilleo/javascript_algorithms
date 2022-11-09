//MIG: Returns the sum of the array with the highest value when its elements are summed. However if the sum of array X and that of array Y is equal return "The sums are equal"

function highestSum(X,Y){

    let returned_value = 0;

    let a = 0;
    for (let i = 0; i < X.length; i++)
    {
        a += X[i]
    }
    
    let b = 0;
    for (let j = 0; j < Y.length; j++)
    {
        b += Y[j]
    }

    if (a > b)
    {
        returned_value = a
    }
    else if( a < b)
    {
        returned_value = b
    }

    else
    {
        returned_value = "The sums are equal"
    }

    console.log(returned_value)

}

highestSum([15,7],[12,17])
highestSum([30],[3,6,2,6])