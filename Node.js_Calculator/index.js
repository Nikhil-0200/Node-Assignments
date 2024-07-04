
function operation(c, a, b) { // created this operation function for performing different cases and in this we have passed three arguments c which is the diff operations, a which is the first argument & c is the second argument.
  switch (c) {
    case "add":
      console.log(Number(a) + Number(b));
      break;
    case "sub":
      console.log(Number(a) - Number(b));
      break;
    case "mult":
      console.log(Number(a) * Number(b));
      break;
    case "divide":
      console.log(Number(a) / Number(b));
      break;
    case "sin":
      console.log(Math.sin(Number(a)));
      break;
    case "cos":
      console.log(Math.cos(Number(a)));
      break;
    case "tan":
      console.log(Math.tan(Number(a)));
      break;
    case "random": // case for generating random number with randomBytes, crypto node module
        if(!a){ // here checking if a their is any data passed in this or not.
            console.log(`Provide length for generating random number`);
        }
        else{
            const length = Number(a); // if their is a data, conerting it into a number from string.
            if(length === NaN || length <= 0){ // checking if number is NaN or if it is less than or equal to zero.
                console.log("Enter Valid Number")
            }
            else{
                const crypto = require("crypto"); // importing crypto module from node.js
                crypto.randomBytes(length, (err, buf) =>{ // passig length as para in randomBytes for generating random numbers.
                    if(err) throw err; // if their is any error then err object in callback function throws err. , else buffer gets access to data and converts it into an hexadecimal string for display.
                    console.log(`${buf.length} bytes of random data: ${buf.toString("hex")}`);
                })
            }
        }
        break;
    default:
      console.log(`Unsupported Operation, ${c}`);
      break;
  }
}
const args = process.argv.slice(2);
const [c, a, b] = args;
operation(c, a, b);


