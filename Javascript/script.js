/*
        console.log("hello world")
        var type = "City boy"

        console.log(myname+" "+type)

        // number
        // string
        // boolean




            var myname = "JAMEL"
            let age = 30
            const surname = "Johnson"
            var locate = "Manchester"
 
            console.log(myname.toLowerCase())
            */
    /*
            console.log("Hi my name is" ,myname, "and I live in",locate, "on my next birthday I will turn" ,age,".")
            console.log(`Hey there I'm from ${locate} and my last name is ${surname}.`)
    */

/*
let array = ["crawl", "walk", "jog", "run", "sprint", "fly"] ;
console.log(array.toUpperCase()) */
//array[0] = "SAT"  // < Conditional array







//console.log(array[4])

//console.log(array[array.length-1])
//console.log(array[3])


/*
let min = 6;

if (min >= 76 ) {
    console.log("You've got the enough credit!");
 }

else {
    console.log("Unlucky...Maybe next time");
}
*/

// Nested conditions 
/*
var shopping = [100]

if (typeof shopping !=String ){
    console.log("Error needs to be list of items")
}
else
    if(shopping.length>3){
        console.log("Thanks your items have been added")
    }
    else{
        console.log("Need more items")
    }
*/
    // Nested conditions exercise 


/*
    var result = ["50"]

        if(result >=90){
            console.log("Grade: A*") }
     else if (result >=80){
        console.log("Grade A")
     }       
     else if (result >=70){
        console.log("Grade B")
     }

    else if(result >=60){
        console.log( "Grade C")
    }
    else if (result<60){ 
    console.log("Fail retest needed")
    }
    else { 
    console.log("error")
}

*/

//Home work loops

/*
for ( let i = 1; i<=100; i++){

 if (i%3===0 && i%5 ===0){
    console.log("FIZZBUZZ")
    }
    else if (i%3 === 0){
        console.log("FIZZ")
    }
    else if (i%5 === 0){
        console.log("BUZZ")
    }
    else{
        console.log(i)
    }
    
    
}

*/

// Functions

function newAgain(DJ,CLUB) {
    console.log(DJ)
    console.log(CLUB)
}

function grader(result){
    
    if(result >=90){
        console.log("Grade: A*") }
 else if (result >=80){
    console.log("Grade A")
 }       
 else if (result >=70){
    console.log("Grade B")
 }

else if(result >=60){
    console.log( "Grade C")
}
else if (result<60){ 
console.log("Fail retest needed")
}
else { 
console.log("error")
}

}



var score =mult(5,5)

function mult(num1, num2){
    ans = num1*num2
    return ans
}

function addition(num){
    var answer = mult(5,5)
    console.log(answer+num)
}
// Celsius to fahrenheit  -- (0°C × 9/5) + 32 = 32°F

function celsius(C) {
cel = C*9/5+32
return cel
    
}

function fahrenheit(){
    var far = celsius(0)
    console.log(cel)
}

fahrenheit()