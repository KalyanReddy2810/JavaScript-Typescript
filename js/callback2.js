
function food(item, callback){
    setTimeout(()=> {
        const tiffins = ["idly", "dosa", "vada","pongal","upma", "poha", "uggani", "puri"];
        //const favtiffin = "uggani";
        if(tiffins.includes(item)){
            callback(item + " is available");
        }else{
            callback(items + " is not available");
        }
    })
}

function checkavailability(message){
    console.log(message);
}


food("uggani",checkavailability);
//food("chapathi",checkavailability); //ReferenceError: items is not defined



//Example of callback  
function test1(){
    console.log("test1 function executed");
}

function test2(callback){
    console.log("test2 function executed");
    callback() ;
}

test2(test1);


//example of callback with variable
function test3(callback){
    var name = "kalyan";
    callback(name);
}   

function test4(name){
    console.log("Hello " + name);
}   

test3(test4);



