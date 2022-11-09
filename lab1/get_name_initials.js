//This code takes a persons name and return the initials from the name
// e.g Faith James returned as F. J.

function initial(str){

const splitName = str.split(" ");
const firstPart = splitName[0][0]
const secondPart = splitName[1][0]

console.log(firstPart+". "+secondPart+".")

}

initial("Faith James")
initial("Neche Ukanacho")
initial("Godswill Enaohwo")
initial("Ovigue Grace")