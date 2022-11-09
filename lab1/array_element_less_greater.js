//ALPHA: Get the number of elements in an array y that ae greater than or equal to the variable x and les than or equal to the variable z

function noOfElements(y,x,z){
    
    let j = 0;

    for(let i = 0; i < (y.length); i++)
    {
        if(y[i] <= z && y[i] >= x)
        {
            j += 1;
        }
    } 
    console.log(j)

}

noOfElements([2,3,0,1,7],4,8)
noOfElements([4,6,2,6,7,7],0,7)