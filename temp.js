let productName="Laptop";
let quantity=2;
let status="pending";
let productstatus="Status of the product is";
productstatus += (status =='delivred')?'green':'red';

let description="I have ordered"+quantity+""+productName+"from\"amazon\" last week"+productstatus;


function estimatedDelivery(){
    return"13-12-2022";
}

let productstat =`Stat of the product is ${status =='delivered' ? 'green':'red'}`;

let description2='I have ordered ${quantity} ${productName} from "amazon" last week and estimated delivery for this product is ${estimatedDelivery()} and following is the status:${productStat}';

console.log(description);
console.log(description2);