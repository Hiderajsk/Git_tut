const input=process.argv;
const fs=require('fs');
const path=require('path');
const dirNm=path.join(__dirname,"filesHere");

// for(let i=0;i<5;i++){
//     console.log("Creating 5 new files one by one");
//     fs.writeFileSync(`${dirNm}/files_${i}`,"This will be the content of the each file"); 

//     // console.log("Deleting 5 new files one by one");
//     // fs.unlinkSync(`${dirNm}/files_${i}`);  
// }

// fs.readdir(dirNm,(err,files)=>{
//     files.forEach(item => {
//         console.log("File name = ",item);
//     });
// })

// fs.readFile(`${dirNm}/files_1`,'utf-8',(err,item)=>{
//     if(!err){
//         console.log("The file contents = ",item);
//     }
// })

// fs.appendFile(`${dirNm}/files_1`,"This text will be added to the file",(err)=>{
//     if(!err){
//         console.log("The next content has been added to the file successfully\n");
//     }
// })

// fs.rename(`${dirNm}/files_1`,`${dirNm}/NewFileName`,(err)=>{
//     if(!err){
//         console.log("The file has been renamed successfully to NewFileName");
//     }
// })

fs.unlinkSync(`${dirNm}/NewFileName`);