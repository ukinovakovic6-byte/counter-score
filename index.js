let increse1 =document.getElementById("btn1")
let countEL = document.getElementById("number1")
let gincrese1 = document.getElementById("g1")
let gcountEL = document.getElementById("number2")
let number1 = 0
let number2 = 0

function btnone() {
    number1 +=1
    countEL.textContent = number1
         
}
function btntwo(){
    number1+=2
    countEL.textContent = number1
}
function btntree(){
    number1+=3
    countEL.textContent=number1
}
function g1btn() {
    number2 +=1
    gcountEL.textContent=number2
}
function g2btn() {
    number2 +=2
    gcountEL.textContent=number2
}
function g3btn() {
    number2 +=3
    gcountEL.textContent=number2
}