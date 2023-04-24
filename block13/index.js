//-create a varibale
//-if value is truthy, print true
//-if value is falsey, then we want to check the following conditions
    //-if value is false
        //-print "The boolean value false is falsy";
    //-if value is null
        //-print "the null value is falsy";
    //...

    let value ="Ahmed";
    if (value) {
        console.log(true)
    } else {
        if (value === false) {
            console.log("The boolean value false is falsy");
        } else if (value === null) {
            console.log("the null value is falsy");
        } else if (value === undefined) {
            console.log("undefined is falsy");
        } else if (value === 0) {
            console.log("The number 0 is falsy(the onlyfalsy number)")
        } else if (value === "") {
            console.log("the empty string is falsy( the only falsy string)");
        }
    }


    let num1 = 5;
    let num2 = 6;
    if (num1 >= 5 && num2 >= 5) {
    // condition evaluates to true runs the codeblock otherwise skips to the else statement
    console.log(true);
    } else {
    console.log(false);
    }
    
    //I need to test if this statement is true with the values i chose

    let num3 = 50;
    let num4 = 51;
    
    if (num3 && num4 >= 101) {
        console.log ("100 is greater than 101");
    } else {
        console.log ("101 is greater than 100");
    } 

    // I need to compare these values to see if they are truthy

    let param1A = 0;
    let param1B = 5;
    let param2A = "horse"
    let param2B = "horse"

    if (param1A < param1B && "horse" === "horse") {
        console.log (true)
    } else {
        console.log (false)
    }