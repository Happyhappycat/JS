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