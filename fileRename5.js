var f1 =require('fs')
f1.rename('example2.txt','sample2.txt',function(err){
    if(!err) {
        console.log("file renamed successfully")
    }
    else{
        console.log("Error in renaming file :" +err);
    }   
    
})