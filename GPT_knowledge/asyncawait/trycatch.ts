import test from "@playwright/test";

async function login(email: string, password: string): Promise<string> {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous login operation
        setTimeout(() => {
            if (email === 'kalyan@gmail.com' && password === 'Password123') {
                resolve('Login successful');
            } else {
                reject(new Error('Invalid credentials'));
             }   

})
    })
}

login('kalyan@gmail.com', 'Password123')
    .then((message) => console.log(message))
    .catch((error) => console.error(error.message));


//eample ---------------------------------
function loginUser( email: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'bad-email') {
        reject(new Error('Invalid credentials')); // → rejected
      } else {
        resolve('abc123token'); // → fulfilled
      }
    }, 300);
  });
}


async function test1(){
    try{
        await loginUser('bad-email');
    } catch (error:any) {
        const e = error as Error;  // TypeScript type assertion — compile-time only
        console.log(e.message);// human-readable description
        console.log(e.name);       // e.g. 'Error', 'TimeoutError'
      //  console.log(e.stack);  // full stack trace
        
    }
}

async function test2(){
    try{
        const token = await loginUser('good-email');
        console.log(`Token: ${token}`);
        console.log('Login successful.......');
       
    } catch (e:any) {
        console.error(e.message);   
    }
}


async function test3(){
    try{
        await loginUser('bad-email');
    } catch (error:any) {
        if (error instanceof Error) {
            console.log(error.message); // human-readable description
            console.log(error.name);    // e.g. 'Error', 'TimeoutError'
          // console.log(error.stack);  // full stack trace
        } else {
            console.error(error);
        }
    }
}
test1();
test2();
test3();