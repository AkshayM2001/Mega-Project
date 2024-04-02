///================== CALCUATOR =================///
// let string = "";
// let buttons = document.querySelectorAll('.btn');

// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click', (e)=>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             document.querySelector('.input').value = string;
//         }
//         else if(e.target.innerHTML == 'C'){
//             string = "";
//             document.querySelector('.input').value = string;
//         }

//         else{
//             console.log(e.target)
//             string = string + e.target.innerHTML;
//             document.querySelector('.input').value = string;
//         }
        
//     })
// })

////==============MY EDIT================////

const display = document.getElementById("input");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}


function calculate(){
    try{
        // oldValue = display.value;
        display.value = eval(display.value);
        // newValue = eval(display.value);
        // show = String(oldValue) + "/n" + String(newValue);
        // display.value = show;
    }
    catch(error){
        display.value = "Error";
    }
}

function clearLast(){
    // display.value = display.value.slice(0, -1);
    // let str = String(display.value);
    // str = str.substring(0, str.length - 1);
    str = str.slice(0, -1);
    display.value = str;
}

function stopSpam(){

}

// console.log(typeof(display.value));