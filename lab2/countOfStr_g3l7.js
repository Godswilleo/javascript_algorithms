//Q5: Takes an array of strings and return the number of strings whose length is greater than 3 but less than or equal to 7

function range(X){

    let returned_value = 0;

    let a = 0;

    for (let i = 0; i < X.length; i++)
    {
        if(X[i].length > 3 && X[i].length <= 7)
        {
            a += 1
        }
       
    }
    console.log(a)

}

range(["java","kotlin","javascript","php","spring","closure"])
range(["os","jenkins","circleci","travis","git","closure"])
range(["springboot","servlets"])
    