//Q4: Takes two arrays and eturns the length of the array with the highest sum of elements. But if the sums are equal it will return "the sums are equal"

function lengthy(X,Y){

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
        returned_value = X.length
    }
    else if( a < b)
    {
        returned_value = Y.length
    }

    else
    {
        returned_value = "The sums are equal"
    }

    console.log(returned_value)

}

lengthy([3,5,1,7,9],[11,31])
lengthy([13,11,3,1],[4,9,1])
lengthy([20],[1,18])