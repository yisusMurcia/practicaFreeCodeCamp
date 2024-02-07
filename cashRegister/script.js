let price = 19.5;
let cid = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];

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

const updateCash= (price, cid)=>{
    priceText.textContent= `$${price}`;
    cidText.innerHTML= "";
    cid.forEach(element => {
        cidText.innerText+= `${element[0]}: ${element[1]}\n`;
    });
};

const exchange= (number)=>{
    const obj= {
        status: "OPEN",
        change: []
    };
    let toReturn= number- price;
    if(toReturn== 0){
        changeDueText.textContent= "No change due - customer paid with exact cash";
        return
    }else if(toReturn< 0){
        alert("Customer does not have enough money to purchase the item");
        return
    }
    const numOfChanges= cid.map((arr, index)=>Math.round(arr[1]/moneyValue[index]));
    for(let i= cid.length; i>=0; i--){
        if(moneyValue[i]<= toReturn){
            obj.change.push([cid[i][0], 0]);
            while(moneyValue[i]<= toReturn && numOfChanges[i]>0){
                obj.change[obj.change.length-1][1]+= moneyValue[i];
                numOfChanges[i]--;
                cid[i][1]= moneyValue[i] * numOfChanges[i];
                toReturn-= moneyValue[i];
            };
        };
    };
    if(toReturn<0.01 && cid[0][1]>0){
        cid[0][1]-= 0.01;
        obj.change[obj.change.length-1][1]+= 0.01;
    }else if(toReturn>0){
        changeDueText.innerText= `Status: INSUFFICIENT_FUNDS`;
        return
    };
    if(cid.every((el)=> el[1]<=0)){
        obj.status= "Closed"
    };
    changeDueText.innerText= `Status: ${obj.status}\n`
    obj.change.forEach(arr=>{ 
    if(arr[1]!= 0){
        if(arr[1]> 0.5 && arr[1]< 0.6){
            arr[1]= 0.5
        }
       changeDueText.innerText+= `${arr[0]}: $${arr[1]}\n`;
    updateCash(price, cid);
    }
    })
};

updateCash(price, cid);

purchaseBtn.addEventListener("click", ()=>{
    exchange(input.value);
});