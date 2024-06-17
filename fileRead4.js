/* This JavaScript code snippet is using the Node.js `fs` module to read the contents of a file named
`sample.txt` asynchronously. */
var fs=require('fs')
fs .readFile('sample.txt', function(err,d1){

    if(err){
        return console.err(err);

    }
    console.log('Asynchronous read::'+d1.toString());
})