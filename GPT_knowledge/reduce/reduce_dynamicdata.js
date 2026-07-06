const fields = ["username", "password"]
const credentials = [
    [ "kalyan", "kalyan@123"],
    ["john", "john@123"],
    [ "jane", "jane@123"],
    [ "sush", "sush@123"],
    [ "maha", "maha@123"],
    [ "kumar", "kumar@123"]
]

const testData = credentials.reduce((acc,field, index)=>{
    acc[field] = credentials[index]
   
        return acc;
    }   
, {})
console.log(testData)