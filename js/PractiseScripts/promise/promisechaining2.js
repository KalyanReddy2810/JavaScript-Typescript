function launchURL() {
    return new Promise((resolve, reject)=>{
        console.log("Launching URL...");
        setTimeout(()=>{

           let url = "www.amazon.com";
            if(url.includes("amazon") && url.includes(".com")){
                resolve({"product" : "iphone", "price" : 100000, "availability" : "in stock"});
        }            else{
            reject("URL is not valid");
        }  
    },2000) 
})
}


function searchProduct(productInfo) {
    return new Promise((resolve, reject)=>{
        console.log("Searching for product...");
        setTimeout(()=>{
            if(productInfo.product === "iphone"){
                resolve("Product found: " + productInfo.product + ", Price: " + productInfo.price + ", Availability: " + productInfo.availability);
        }  else{     
                  reject("Product not found");
}       
    })
}
)}  


    launchURL()
    .then((productInfo) => {    
        return searchProduct(productInfo);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

