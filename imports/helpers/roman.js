export default function decimalToRoman(value) { 
    var roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]; 
    var decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1]; 
    
    if (value <= 0 || value >= 4000) return value; 
        var romanNumeral = ""; 
        for (var i=0; i<roman.length; i++) { 
        while (value >= decimal[i]) {  
            value -= decimal[i]; 
            romanNumeral += roman[i]; 
        } 
    } 
    return romanNumeral; 
}