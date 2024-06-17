const fs = require('fs');
fs.writeFile('sample2.txt', "welcome  ", function(err) {
    if (err) throw err;
    console.log("Data written");

    fs.readFile('input.txt', function(err, data) {
        if (err) throw err;
        let str = data.toString();
        console.log(str);
    })
})

