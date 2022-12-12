/* Aula 19 de JS Conversor de Temperaturas */

// input range
let celsius = document.querySelector('#celsius')
let fahrenheit = document.querySelector('#fahrenheit')
let kelvin = document.querySelector('#kelvin')

// input number
let numeroC = document.querySelector('#numeroC')
let numeroF = document.querySelector('#numeroF')
let numeroK = document.querySelector('#numeroK')

// O input recebe o valor do slider
numeroC.value = celsius.value
numeroF.value = fahrenheit.value
numeroK.value = kelvin.value

// Altera os valores quando mechemos no celsius

function atualizaC() {
    numeroC.value = celsius.value
    fahrenheit.value = numeroF.value
    kelvin.value = numeroK.value
}

function atualizaF() {
    let celsius_fahrenheit = (celsius.value * 9 / 5) + 32
    numeroF.value = celsius_fahrenheit.toFixed(2)
}

function atualizaK() {
    let celsius_kelvin = parseFloat(celsius.value) + 273.00
    numeroK.value = parseFloat(celsius_kelvin).toFixed(2)
}

// Altera os valores quando mechemos no fahrenheit


function alteraCatravesDoF() {
    let fahrenheit_celsius = (fahrenheit.value - 32) * 5 / 9
    numeroC.value = parseFloat(fahrenheit_celsius).toFixed(2)
}

function alteraF() {
    numeroF.value = fahrenheit.value
    celsius.value = numeroC.value
    kelvin.value = numeroK.value
}

function alteraKatravesDoF() {
    let fahrenheit_kelvin = (fahrenheit.value - 32) * 5 / 9 + 273.15
    numeroK.value = parseFloat(fahrenheit_kelvin).toFixed(2)
}

// Altera os valores quando mechemos no kelvin

function alteraCatravesDoK() {
    let kelvin_celsius = parseFloat(kelvin.value) - 273.15
    numeroC.value = parseFloat(kelvin_celsius).toFixed(2)
}

function alteraFatravesDoK() {
    let kelvin_fahrenheit = (kelvin.value - 273.15) * 9 / 5 + 32
    numeroF.value = parseFloat(kelvin_fahrenheit).toFixed(2)
}

function alteraK() {
    numeroK.value = kelvin.value
    celsius.value = numeroC.value
    fahrenheit.value = numeroF.value
}

function zerar() {
    celsius.value = 100.00
    fahrenheit.value = 212.00
    kelvin.value = 373.00

    numeroC.value = celsius.value
    numeroF.value = fahrenheit.value
    numeroK.value = kelvin.value
}
