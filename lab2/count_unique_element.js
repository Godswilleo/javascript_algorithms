//Q3: Takes an array and returns count of each unique elements

function unique(arr){

    const new_obj = {}

    //loop through the array and set its elements as the key of new_obj and set their value to 0
    for (let i = 0; i < arr.length; i++)
    {
        new_obj[arr[i]] = 0
    }
    
    // loop through the array again and increment the values of new_obj by 1 where the respective key is equal to x
    arr.forEach(x=>{
        new_obj[x] += 1
    })


    console.log(new_obj)

}

unique(["java","kolin","java","java","swift"])
unique(["developer","software","engineer","software"])
unique(["dog","cat","sheep","cat","sheep"])