const fs = require("fs");

function operation(op, a, b) {
  switch (op) {
    case "read":
      fs.readFile("test.txt", "utf-8", (err, data) => {
        if (err) throw err;
        console.log(`Test.txt Ouput -> ${data}`);
      });
      break;

    case "delete":
      fs.unlink("test.txt", (err, data) => {
        if (err) throw err;
        console.log(`Test.txt Ouput -> ${data}`);
      });
      break;

    case "create":
      fs.writeFile("test.txt", a, (err) => {
        if (err) {
          console.log(`Error:`, err);
        } else {
          console.log(`File created Successfully`);
        }
      });
      break;

    case "append":
      fs.appendFile("test.txt", a, (err) => {
        if (err) {
          console.log(`Error:`, err);
        } else {
          console.log(`Data Appended Successfully`);
        }
      });
      break;

    case "rename":
      fs.rename(a, b, (err) => {
        if (err) {
          console.log(`Error:`, err);
        } else {
          console.log(`File Renamed Appended Successfully`);
        }
      });
      break;

    case "list":
      fs.readdir(a, (err, files) => {
        if (err) {
          console.log(`Error:`, err);
        } else {
          console.log(`Files and directories in ${a}:`);
          files.forEach((file) => {
            console.log(file);
          });
        }
      });
      break;

    default:
      console.log(`Unsupported Operation, ${op}`);
      break;
  }
}

const args = process.argv.slice(2);
const [op, a, b] = args;
operation(op, a, b);
