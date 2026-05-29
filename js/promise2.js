function studentinfo(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{{
            const student = [
                {name: "kalyan", branch: "cse", sid: 1001},
                {name: "sushmitha", branch: "ece", sid: 1002},
                {name: "maha", branch: "mech", sid: 1003},
                {name: "sri", branch: "civil", sid: 1004},
                {name: "Bhoomi", branch: "eee", sid: 1005}
            ]
            resolve(student);
        }
        reject("Error fetching student information");      
            
        }
        , 2000);
    });
}   

studentinfo()
.then((student) => {
    console.log(student);
})
.catch((error) => {
    console.error(error);
});
