var a=10;
var b=90;
console.log("a = ",a);
console.log("b = ",b);
console.log("a + b = ",a+b);

const waitingData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        b=100;
        resolve();
    },2000)
});

waitingData.then(()=>{
    console.log("After updation of b");
    console.log("a = ",a);
    console.log("b = ",b);
    console.log("a + b = ",a+b);
});