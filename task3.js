const { error } = require('console')
const fs = require ('fs')

fs.writeFile('welcome.txt','hello node',(error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("file created succussfully");
    }
  });
  fs.readFile("welcome.txt", "utf8", (error, data) => {
    if (error) {
      console.log("the error is", error);
    } else {
      console.log(`${data}`);
    }
  });