// Take a number entered and get the missing digit from number 0 - 9 if non of the numbers is missing in the entered number return "no digit is missing"



function missingNum(str)
{
    const comp = "1234567890"
    const strconv = str.toString()
    const new_arr = []
    
    for(let i = 0; i < comp.length; i++)
    {
        if(!(strconv.includes(comp[i])))
        {
            new_arr.push(comp[i])
        }
    }
    if (new_arr.length == 0)
        {
            console.log("no digit is missing")
        }
    else
        {
        console.log(new_arr)
        }
}

missingNum(123467890)
