// Extract the numbers from a string a sum up the numbers

function numSum(str)
{
    // const strconv = str.alphaNumericSplit()
    
    // for(let i = 0; i < strconv.length; i++)
    // {
    //     console.log(strconv[i])
    // }

    if(str.match(/[0-9]/g))
    {
    console.log("yes")
    }
    else 
    {
        console.log("no")
    }
}

numSum("dd")