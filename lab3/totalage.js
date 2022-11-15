//Q3: Find total age of applicants that applied for this interview from the given record below

function totalAge(arr){

let total_age = 0

for(let i = 0; i < arr.length; i++)
{
    total_age += arr[i].age
}

console.log(total_age)

}

totalAge([{'name':'XYZ', 'age':23},{'name':'ABC', 'age':40}])
totalAge([{'name':'XYZ', 'age':34},{'name':'ABC', 'age':29},{'name':'ABC', 'age':33}])
totalAge([{'name':'XYZ', 'age':66},{'name':'WER', 'age':44},{'name':'AZX', 'age':22}])