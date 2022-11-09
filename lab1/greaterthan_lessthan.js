//PHOENIX: Get the number of elements in an array U that are greater than a variable X and less than the vairable Z
 
function noOfElements(y,x,z){
    
    let j = 0;

    for(let i = 0; i < (y.length); i++)
    {
        if(y[i] < z && y[i] > x)
        {
            j += 1;
        }
    } 
    console.log(j)

}

noOfElements([2,3,0,1,7,7,8],4,8)
noOfElements([3,30,2,7],15,30)