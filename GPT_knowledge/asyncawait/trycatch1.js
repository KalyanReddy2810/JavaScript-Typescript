//Error Example

try {
    throw new Error("Something went wrong");
}
catch(error){
    console.log(error.message);
}
finally{
    console.log("Cleaning resources");

}

//Without catch
/*try {
    throw new Error("Something went wrong2");
}

finally{
    console.log("Cleaning resources2");

} */


//Without finally

try {
    throw new Error("Something went wrong3");
}      
catch(error){
    console.log(error.message);
}

//error stops remaining code execution
try {
    console.log("1 error");
    console.log("2 error");
    throw new Error("Something went wrong4");
    console.log("3 error");
    console.log("4 error");
}
catch (error){
    console.log(error.message);
}       
