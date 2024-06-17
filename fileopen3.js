var f1=require('fs')
f1.open('sample.txt','r',function(err,file){
    if(err)throw err;
    console.log("file opened successfully");
})