function loginflow(email:string, password:string): Promise<string> {
    return new Promise((resolve => setTimeout(() => resolve('TOKEN_abc'), 1000)));
}

function getProfile(token:string): Promise<number> {
    return new Promise((resolve => setTimeout(() => resolve(123), 1000)));
}

function getOrders(userId: number): Promise<string[]> {
  return new Promise(resolve => setTimeout(() => resolve(['Order#1', 'Order#2']), 200));
}


loginflow('kalyan@gmail.com', '123456')
.then(token => {
    console.log('Login successful, token:', token);
    return getProfile(token);
})
.then(userId => {
    console.log('Profile retrieved, user ID:', userId);
    return getOrders(userId);
})
.then(orders => {
    console.log('Orders retrieved:', orders);
})
.catch(error => {
    console.error('An error occurred:', error);
});     