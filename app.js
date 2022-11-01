// 1. ============================================================================================================


// let buttons =  document.querySelectorAll('button')

// let display  = document.querySelector('.display')

// buttons.forEach(function(button){
//     button.addEventListener("click", calculate)
// })

// function  calculate(event){
//     const buttonclickValue = event.target.value
//     if(buttonclickValue === "="){
//         if(display.value !==""){
//             display.value = eval(display.value)
//         }
//     }else if(buttonclickValue === "C"){
//         display.value = ""
//     }else{
//         display.value += buttonclickValue
//     }
// }


// 2. ============================================================================================================

let display = document.querySelector(".display")

let buttons = document.querySelectorAll("button")

buttons.forEach(function(button){
    button.addEventListener("click", calculate)
})

function calculate(event){
    const buttonclickValue = event.target.value
    if(buttonclickValue === "="){
        if(display.value !== ""){
            display.value = eval(display.value)
        }
    }else if(buttonclickValue === "C"){
        display.value = ""
    }else{
        display.value += buttonclickValue
    }
}