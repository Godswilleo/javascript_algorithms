//Q1: Find the elements in an array Y, that are equal to a given variable X

function elementsEqualtox(Y,X){
    let arr = []
    Y.forEach(a=>{
        if(a === X)
        {
            arr.push(a)
        }
     
    })
    console.log(arr)
}

elementsEqualtox(['a','a','b','f','x','y'],'a')
elementsEqualtox(['t','3',3,3,'5','v'],3)
elementsEqualtox([4,6,2,6,7,'7'],'7')