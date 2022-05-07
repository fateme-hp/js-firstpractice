// Practice 01 - convert cm to m 


function lengthConverter ( cm ){
    console.log( "result:", cm / 100 , "m");
}

lengthConverter ( .3)

// Practice 02 - basic bot 

function basicBot( message ){
 
    if ( message ==  "salam") {
        console.log ( "bot:", "salam :)");
    }
    if ( message ==  "chetori?" ){
        console.log ( "bot:", "khoobam!");
    }
    if ( message == "che khabar? "){
        console.log ( "bot:", "salamati :)");
    }
    if ( message == "khoobi?"){
        console.log ( "bot:", "man khoobam, khodet chetori?");
    }
    else {
        console.log ( "bot:", "zaban shoma ra balad nistam!");
    }
}

basicBot( "khobi?");


// Practice 03 - school object

let firstClass = [ 
    {
        fullName :" samane sanaee" ,
        finalResult: 20 ,
        phone: "09179177878",
        id: 3490265997 ,
       age: 17
    },
     {
         fullName : "fatemeh zamani" ,
         finalResult: 19.15 ,
         phone: "09199177879",
         id: 3490246797 ,
         age: 18
     },
      {
         fullName :" rahele rad" ,
         finalResult: 17.99 ,
         phone: "09219177855",
         id: 3500265991 ,
         age: 17
     },
     {
        fullName :"mahsa mahdavi" ,
         finalResult: 18.23 ,
         phone: "09179142871",
        id: 3490123497 ,
        age: 17
     }
]

let secondClass = [
     {
        fullName :" bahar behrozi" ,
        finalResult: 18.75 ,
        phone: "0369177777",
        id: 3550265997 ,
        age: 17
    },
    {
        fullName :" mania masroor" ,
        finalResult: 18.66 ,
        phone: "09399177232",
        id: 3490265997 ,
        age: 18
    },
    {
        fullName :" zahra zarin" ,
        finalResult: 19.97 ,
        phone: "09179171234",
        id: 3490265123 ,
        age: 17
    },
   {
        fullName :" hanieh hesam" ,
        finalResult: 19.95 ,
        phone: "09171237878",
        id: 34912365997 ,
        age: 17
    }
]

let thirdClass = [
   {
        fullName :" ziba zand" ,
        finalResult: 20 ,
        phone: "09179112348",
        id: 3490265117 ,
        age: 18
    },
    {
        fullName :" mozhgan mohebi" ,
        finalResult:19.46 ,
        phone: "09192377824",
        id: 3490265997 ,
        age: 17
    },
  {
        fullName :" maryam arya" ,
        finalResult: 20 ,
        phone: "09179182425",
        id: 3490262425 ,
        age: 17
    },
     {
        fullName :"fatemeh ahora" ,
        finalResult: 18.99 ,
        phone: "09179177878",
        id: 3503559799 ,
        age: 17
    }
  ]

let schoolData = {
    firstClass,
    secondClass,
    thirdClass
}
function max(className){

    let max = className[0].finalResult;

    for ( let i = 0 ; i < className.length ; i++) {
        if (className[i].finalResult >= max) {
            max = className[i].finalResult; 
            fullName = className[i].fullName
    }
    
    console.log ("Top student:" , fullName , "Result:", max );
}
}
max(firstClass)
max(secondClass)
max(thirdClass)