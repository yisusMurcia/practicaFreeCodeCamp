function palindrome(str) {
    const arr= str.toLowerCase().match(/[A-Za-z0-9]/g);
    let end= arr.length-1;
    let isPalindrome= true;
    for (let i= 0; i< arr.length; i++){
      if (end<= i){
        break;
      }else if (arr[i]!= arr[end-i]){
        isPalindrome= false;
        break;
      };
    };
    return isPalindrome;
  }