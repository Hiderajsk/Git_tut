const input=process.argv;
const fs=require('fs');
const path=require('path');
const dirNm=path.join(__dirname,"filesHere");

if(input[2]=="add"){
    fs.writeFileSync(`${dirNm}/${input[3]}`,input[4]);
    console.log("the file has been created successfully");
}
else if(input[2]=="remove"){
    fs.unlinkSync(`${dirNm}/${input[3]}`);
    console.log("the file has been deleted successfully");
}
else{
    console.log("You have entered an invailid input");
}

