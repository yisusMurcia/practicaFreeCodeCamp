function checkCashRegister(price, cash, cid) {
  let money= [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];
  let obj= {
    status: "OPEN",
    change: []
  };
  let numOfCash= [];
  for(let arr of cid){
    let times= arr[1]/money[cid.indexOf(arr)][1];
    numOfCash.push([arr[0], times]);
  };
  let toReturn= cash-price;
  for (let i= money.length-1; i>= 0; i--){
    if (money[i][1]<= toReturn){
      obj.change.push([money[i][0], 0]);
      while(money[i][1]<= toReturn && numOfCash[i][1]>0){
        obj.change[obj.change.length-1][1]+= money[i][1];
        numOfCash[i][1]--;
        toReturn-=money[i][1];
      };
      if (i== 0){
        
        if (toReturn> 0.001){
          if (toReturn<0.01){
            obj.change[obj.change.length-1][1]+= money[i][1];
          numOfCash[i][1]--;
          }else{
            obj.status= "INSUFFICIENT_FUNDS";
            obj.change= [];
            return obj;
          };
        };
        for (let arr of obj.change){
        for (let i= 0; i<cid.length; i++){
          if (arr[0]== cid[i][0]){
            if (arr[1]>cid[i][1]){
              arr[1]= cid[i][1];
            };
          };
        };
      };
        let moreMoney= numOfCash.some((arr)=> arr[1]>0);
        if (!moreMoney){
          obj.status= "CLOSED";
          obj.change= cid;
        };
      };
    };
  };
  
  return obj;
};

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));