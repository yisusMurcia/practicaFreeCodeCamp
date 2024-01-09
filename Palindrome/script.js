const textInput= document.getElementById("text-input");
const checkButton= document.getElementById("check-btn");
const resultDiv= document.getElementById("result");

const checkEmptyButton=()=> textInput.value== "";
const checkPalindrom= (strArr)=>{
  strArr= strArr.join(" ").match(/\w/g);
  console.log(strArr)
    let end= strArr.length-1;
    let isPalindrome= true;
    
    for (let i= 0; i< strArr.length; i++){
      if (end<= i){
        break;
      }else if (strArr[i]!= strArr[end-i]){
        isPalindrome= false;
        break;
      };
    };
    return isPalindrome;
}
checkButton.addEventListener("click", ()=>{
    if (checkEmptyButton()){
        alert("Please input a value");
    };
    const regex= /[A-Za-z0-9 ]/g
    const str= textInput.value.toLowerCase()
    const strArr= str.match(regex)
    if (checkPalindrom(strArr)){
        resultDiv.innerHTML= `${textInput.value} is a palindrome`
    }else{
      resultDiv.innerHTML= `${textInput.value} is not a palindrome`
    };
});