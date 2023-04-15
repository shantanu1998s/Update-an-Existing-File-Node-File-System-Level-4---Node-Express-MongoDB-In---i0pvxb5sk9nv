const fs = require("fs/promises");
const fileName = "myfile.txt";
const updateFile = async (fileName, fileContent) => {
const path = require('path');

function updateFile(fileName, contentToAdd) {
  // read the content of the file
  const filePath = path.join(__dirname, fileName);
  let fileContent = fs.readFileSync(filePath, 'utf8');

  // add the content to the existing content
  fileContent += ', ' + contentToAdd;

  // write the updated content back to the file
  fs.writeFileSync(filePath, fileContent);

  // return the updated content
  return fileContent;
}

// example usage
console.log(updateFile('myfile.txt', 'An online learning platform'));

  
};

module.exports = updateFile;
