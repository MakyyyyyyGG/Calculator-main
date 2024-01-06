
let screen = document.getElementById('screen');
let clear = document.getElementById('clear');
let del = document.getElementById('delete');
let evaluate = document.getElementById('evaluate');
let scren2 = document.getElementById('screen2');
// const getNumber = (number) =>{
//     screen.innerHTML = number;
// }

function getNumber(number, value){
    screen.innerHTML += number;
}

function clearFunction(){
    screen.innerHTML = '';
    screen2.innerHTML = '';
}

function deleteFunction(){
    screen.innerHTML = screen.innerHTML.slice(0, -1);
}

function evalFunction(){
    screen2.innerHTML = screen.textContent;
    console.log(screen.textContent);
    console.log('button is clicked');
    screen.innerHTML = eval(screen.textContent);
}