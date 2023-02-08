const body=document.getElementById("body")
const input = document.getElementById("input")
const button = document.getElementById("btn")
const output1 = document.getElementById("conversion1")
const output2 = document.getElementById("conversion2")
const output3 = document.getElementById("conversion3")


button.addEventListener("click",function(){
    output1.textContent=`${input.value} meters = ${(input.value*3.281).toFixed(3)} feet | ${input.value} feet = ${(input.value/3.281).toFixed(3)} meters`

    output2.textContent=`${input.value} liters = ${(input.value*0.264).toFixed(3)} gallons | ${input.value} gallons = ${(input.value/0.264).toFixed(3)} liters`

    output3.textContent=`${input.value} kilograms = ${(input.value*2.204).toFixed(3)} pounds | ${input.value} pounds = ${(input.value/2.204).toFixed(3)} kilograms `


})