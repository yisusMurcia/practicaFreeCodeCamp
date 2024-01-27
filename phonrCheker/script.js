const input= document.getElementById("user-input");
const checkBtn= document.getElementById("check-btn");
const clearBtn= document.getElementById("clear-btn");
const resultsDiv= document.getElementById("results-div");

const regex= /1?[\s-]?([(]\d\d\d[)]|\d\d\d)[\s-]?/;

clearBtn.addEventListener("click", ()=>{
    resultsDiv.innerText="";
});

checkBtn.addEventListener("click", ()=>{
    if(input.value== ""){
        alert("Please provide a phone number");
    }else{
        let str= input.value;
        let passed= true;
        for (let i= 0; i<str.length; i++){
            if (isNaN(str[i]) && str[i]!= "-" && str[i]!= "(" && str[i]!= ")"){
                break
            };
            if (str[i]== "(" || str[i]== ")"){
                passed= false;
                let other= str[i]== "("? ")": "(";
                for (let j= 0; j< str.length; j++){
                    if (str[j]== other && str.indexOf("(")< str.indexOf(")")){
                        passed= true;
                    };
                };
            };
        };
        if (passed){
            let nums= str.match(/\d/g);
            let separators= str.match(/\D/g);
            let consecutiveNums= str.match(/\d+/g);
            if (separators!= null){
                if (separators.length== 2 && separators[0]== "("){
                    passed= false;
                }else if(nums.length== 10){
                    if (separators!= null){
                        if (consecutiveNums.length >3){
                            passed= false;
                        };
                    };
                };
            };
            if (nums.length!= 10 && nums.length!= 11){
                passed= false;
            }else if(nums.length== 11 && str[0]!= 1){
                passed= false;
            };
        };
        if(passed){
            resultsDiv.innerText+= `Valid US number: ${input.value}`;
        }else{
            resultsDiv.innerText+= `Invalid US number: ${input.value}`;
        };
    };
});