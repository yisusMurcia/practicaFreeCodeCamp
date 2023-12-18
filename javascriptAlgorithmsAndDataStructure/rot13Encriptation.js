function rot13(str) {
    let strArr= str.split("");
    strArr.map((letter)=>letter.toUpperCase());
    let arr1= "ABCDEFGHIJKLM".split("");
    let arr2= "NOPQRSTUVWXYZ".split("");
    let message= "";
    for (let i= 0; i<str.length; i++){
        let arr= arr1.includes(strArr[i])?arr2: arr2.includes(strArr[i])?arr1: null;
        if (arr==null){
            message+= strArr[i];
            continue;
        };
        let otherArr= arr==arr1?arr2:arr1;
        let index= otherArr.indexOf(strArr[i]);
        message+= arr[index];
    };
    return message;
};