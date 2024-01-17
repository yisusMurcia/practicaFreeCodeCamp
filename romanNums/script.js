const convertBtn= document.getElementById("convert-btn");
const outputEl= document.getElementById("output");
    const input= document.getElementById("number");

const convertToRoman= ()=>{
    if (input.value== ""){
        return outputEl.innerText= "Please enter a valid number";
    };
    let num= +input.value;
    if(input.value== "-1"){
        return outputEl.innerText= "Please enter a number greater than or equal to 1";
    }else if (num >= 4000){
        return outputEl.innerText= "Please enter a number less than or equal to 3999";
    };
    let romanNum= "";
    const count= (value, letter, iterations= 3)=>{
        let counter= 0
        while(num-value>= 0 && counter< iterations){
            num-= value;
            romanNum+= letter;
            counter++
        };
        counter= 0;
    };
    count(1000, "M");
    count(900, "CM", 1);
    count(500, "D");
    count(400, "CD", 1);
    count(100, "C");
    count(90, "XC", 1);
    count(50, "L");
    count(40, "XL", 1);
    count(10, "X");
    count(9, "IX", 1);
    count(5, "V");
    count(4, "IV", 1);
    count(1, "I")
    outputEl.textContent= romanNum;
};

convertBtn.addEventListener("click", ()=> {  
    convertToRoman();});