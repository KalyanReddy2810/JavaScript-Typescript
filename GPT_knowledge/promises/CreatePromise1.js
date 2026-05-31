"use strict";
function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        console.log('[executor] runs right now, synchronously');
        setTimeout(() => {
            if (!email.includes('@')) {
                reject(new Error('Invalid email address'));
                return;
            }
            if (password.length < 6) {
                reject(new Error('Password must be at least 6 characters long'));
                return;
            }
            resolve(`tokenfor${email} : "token123"`);
        }, 1000);
    });
}
console.log('Before calling loginUser');
const myPromise = loginUser('kalyankumarreddy6@gmail.com', 'password123');
myPromise.then(token => {
    console.log('Token received:', token);
});
myPromise.catch(error => {
    console.error('Error:', error.message);
});
console.log('After calling loginUser');
