const promiseOne = new Promise(function(resolve,reject){
    // Do Async Task 
    // DB Calls, Cryptography, network 
    setTimeout(function(){
        console.log("Async Task is Complete");
        resolve()

    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        
    },1000)
    resolve()
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true 
        if (!error){
            resolve({user:"Harshavardhan",password:"123" })
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})