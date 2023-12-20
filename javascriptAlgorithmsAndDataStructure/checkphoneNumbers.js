function telephoneCheck(str) {
    let passed= true;
    for (let i= 0; i<str.length; i++){
        if (isNaN(str[i]) && str[i]!= "-" && str[i]!= "(" && str[i]!= ")"){
            return false;
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
                return false;
            }else if(nums.length== 10){
                if (separators!= null){
                    if (consecutiveNums.length >3){
                        return false;
                    };
                };
            };
        };
        if (nums.length!= 10 && nums.length!= 11){
            return false;
        }else if(nums.length== 11 && str[0]!= 1){
            return false;
        };
    };
    return passed;
};
console.log(telephoneCheck("55-555)-5555"));