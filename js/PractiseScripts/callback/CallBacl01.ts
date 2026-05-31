function fetchBugsCb(path:string, callback:(err: Error | null, data: string |null) => void) {

    setTimeout(() => {
        if (path !== 'jirapath'){
            callback(new Error('Jira is down'), null);
        } else {
            callback(null, 'Bugs found');
        }
    }, 1000);
}


fetchBugsCb('jirapath1', (err, data) => {
    if (err) {
        console.error('Error:', err.message);
    } else {
        console.log('Data:', data);
    }
}); 
fetchBugsCb('jirapath', (err, data) => {
    if (err) {
        console.error('Error:', err.message);  
    } else {
        console.log('Data:', data);
    }   
});