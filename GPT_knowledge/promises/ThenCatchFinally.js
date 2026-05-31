"use strict";
function loginUser1(email) {
    return new Promise((resolve, reject) => {
        console.log('[executor] runs right now, synchronously');
        setTimeout(() => {
            email.includes('@') ? resolve(`tokenfor${email} : "token123"`) : reject(new Error('Invalid email address'));
        }, 100);
    });
}
const myPromise1 = loginUser1('kalyankumarreddy6@gmail.com');
myPromise1.then(token => {
    console.log('Token received:', token);
});
myPromise1.catch(error => {
    console.error('Error:', error.message);
});
myPromise1.finally(() => {
    console.log('Promise has been settled (either fulfilled or rejected)');
});
console.log('-----------Error path is skipped -------');
const myPromise2 = loginUser1('kalyankumarreddygmail.com');
myPromise2.then(token => {
    console.log('Token received:', token);
});
myPromise2.catch(error => {
    console.error('Error:', error.message);
});
myPromise2.finally(() => {
    console.log('Error path has been skipped');
    console.log('Promise has been settled (either fulfilled or rejected )');
});
