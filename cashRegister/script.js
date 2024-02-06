let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

const moneyValue= [
    0.01,
    0.05,
    0.1,
    0.25,
    1,
    5,
    10,
    20,
    100
]

const input= document.getElementById("cash");
const changeDueText= document.getElementById("change-due");
const purchaseBtn= document.getElementById("purchase-btn");
const priceText= document.getElementById("price");
const cidText= document.getElementById("cid");

const obj= {
    status: "OPEN",
    change: []
  };

const updateCash= (price, cid)=>{
    priceText.textContent= `$${price}`;
    cidText.innerHTML= "";
    cid.forEach(element => {
        cidText.innerText+= `${element[0]}: ${element[1]}\n`;
    });
};

const exchange= (number)=>{
    let toReturn= number- price;
    if(!toReturn){
        changeDueText.textContent= "No change due - customer paid with exact cash";
        return
    }else if(toReturn< 0){
        alert("Customer does not have enough money to purchase the item");
        return
    }
    const numOfChanges= cid.map((arr, index)=>Math.round(arr[1]/moneyValue[index]));
    for(let i= cid.length-1; i>0; i--){
        if(moneyValue[i]<= toReturn){
            obj.change.push([cid[i][0], 0]);
            while(moneyValue[i]<= toReturn && numOfChanges[i]>0){
                obj.change[obj.change.length-1][1]+= moneyValue[i];
                toReturn-= moneyValue[i];
                numOfChanges[i]--;
                cid[i][1]= moneyValue[i] * numOfChanges[i];
            };
        };
    };
    if(toReturn< 0.0001 && toReturn>0 && !numOfChanges.some(num=> num>0)){
        changeDueText.innerText= `Status: INSUFFICIENT_FUNDS`;
        return
    }
    changeDueText.innerText= `Status: ${obj.status}\n`;
    obj.change.forEach(arr=> changeDueText.innerText+= `${arr[0]}: $${arr[1]}\n`);
    updateCash(price, cid);
};

updateCash(price, cid);

purchaseBtn.addEventListener("click", ()=>{
    exchange(input.value);
})