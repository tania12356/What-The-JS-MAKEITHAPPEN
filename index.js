//console.log("t")

///Dom section js 


let Something = document.querySelector("h1")

console.log("this is Something->", Something)























let variable1 = 1   //create a variable
console.log("This is variable-->", variable1)  //check variable in console

function changeAVariable (placeholderParameter){    //change a variable by creating a function // () is a paramater
    console.log ("----INSIDE: changeVariable")

    placeholderParameter = 2



    console.log("this is placeholderParameter ->", placeholderParameter)

    return placeholderParameter


} 




changeAVariable()  //invokes a function
changeAVariable(variable1)




function aFunctionWithoutParameters (){   //
      
}
//aFunctionWithoutParameters()  //invokes a function

