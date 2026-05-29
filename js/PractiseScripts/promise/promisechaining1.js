//promise chaining

function launchBrowser(){
    return new Promise((resolve, reject)=>{
        console.log("Launching Browser...");
        setTimeout(()=>{
            let browserlaunched = true;
            if(browserlaunched){
                resolve("Browser launched successfully");
            }            else{
                reject("Browser failed to launch");
            }       
        },2000)

}
    )}


function launchurl(){
    return new Promise((resolve, reject)=>{
        console.log("Launching URL...");    
        setTimeout(()=>{    
            let urllaunched = true;
            if(urllaunched){
                resolve("URL launched successfully");
            }            else{
                reject("URL failed to launch");
            }
},3000)
}    
)}

function login(){
    return new Promise((resolve, reject)=>{
        console.log("Logging in...");
        setTimeout(()=>{
            let loginsuccessful = true;
            if(loginsuccessful){
                resolve("Login successful");
            }            else{
                reject("Login failed");
            }
        },3000)
    })
}


function searchProduct(){
    return new Promise((resolve, reject)=>{
        console.log("Searching for product...");
        setTimeout(()=>{
            let productfound = true;
            if(productfound){
                resolve("Product found");
            }  else{     
                  reject("Product not found");
}
     },4000)
    })
}


function addToCart(){
    return new Promise((resolve, reject)=>{
        console.log("Adding product to cart...");
      setTimeout(()=>{
            let addedtocart = true;     
        if(addedtocart){    
            resolve("Product added to cart successfully");
        }else{
                reject("Failed to add product to cart");
            }


    }, 5000)
})
}

function paymentprocess(){
    return new Promise((resolve, reject)=>{
        console.log("Processing payment...");
        setTimeout(()=>{
            let paymentprocessed = true;    
        if(paymentprocessed){
            resolve("Payment processed successfully");
        }else{
            reject("Failed to process payment");
        }
    }, 5000)
})
}


launchBrowser()
.then(()=> launchurl())    
.then(()=> login())
.then(()=> searchProduct())
.then(()=> addToCart())
.then(()=> paymentprocess())
.then(result => console.log(result))
.catch(error => console.log(error)) 

/*
console.log("-----------using return statement in promise chaining------------------    ")
launchBrowser()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
.then(()=> {return login()})
.then(()=> {return searchProduct()})
.then(()=>{return addToCart()})   
.then(()=> {return paymentprocess()})                                                                                                                                                                                                                                                                                                                                                                                                                                                     
.then(result => console.log(result))
.catch(error => console.log(error))     

console.log("even a single expression arrow function auto retun ")
launchBrowser()
.then(login)
.then(searchProduct)
.then(addToCart)
.then(paymentprocess)
.then(console.log)
.catch(console.log)

*/
