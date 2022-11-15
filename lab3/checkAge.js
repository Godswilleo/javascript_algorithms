//Q4: Given an array of objects containing users information, assign a default age x for any uer that did not enter his/her age and return the array


function checkAge(arr,defaultAge){
    
    for(let i = 0; i < arr.length; i++)
    {
        if ((arr[i]["age"] == undefined ))
        {
            arr[i]["age"] = defaultAge
        }
        
    }
    console.log(arr)
}

checkAge([{'name':"XYZ", 'age':23},{'name':"ABC"}],33)
checkAge([{'name':"XYZ"},{'name':"ASD"},{'name':"XYZ", 'age':23}],55)