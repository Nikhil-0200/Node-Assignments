
function operation(c, a, b) {
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
    case "random":
        if(!a){
            console.log(`Provide length for generating random number`);
        }
        else{
            const length = Number(a);
            if(length === NaN || length <= 0){
                console.log("Enter Valid Number")
            }
            else{
                const crypto = require("crypto");
                crypto.randomBytes(length, (err, buf) =>{
                    if(err) throw err;
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


