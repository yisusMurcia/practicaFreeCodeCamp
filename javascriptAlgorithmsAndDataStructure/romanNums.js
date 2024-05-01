 function convertToRoman(num) {
    let romanNum= "";
    let counter= 0;
    let count= (value, letter, itearions=3)=>{
            while (num-value>=0 && counter< itearions){
            num-= value;
            romanNum+= letter;
            counter++;
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
    return romanNum;
   };