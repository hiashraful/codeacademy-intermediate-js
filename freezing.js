function celsiusToFahrenheit(celsius){
    return celsius * (9/5) + 32;
}
const freezingPointC = 0;
const boilingPointC = 100;

const freezingPointF = celsiusToFahrenheit(freezingPointC);
const boilingPointF = celsiusToFahrenheit(boilingPointC);

console.log(freezingPointF + ' F');
console.log(boilingPointF + ' F');