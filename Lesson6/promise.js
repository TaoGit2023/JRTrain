function asynSum(a,b, callback){
    setTimeout(()=>{
        callback(a+b);
    },1000);
}

function asynSumPromise(a,b){
    return new Promise((resolve,reject)=>{
        console.log(1);
        setTimeout(()=>{
           // resolve(a+b);
            reject('there is a error!')
        },1000);
    });
}

asynSumPromise(2,2).then((res)=>{
    console.log(res);
    return res;
}).then((result)=>{
    console.log(result);
}).catch((err)=>{
console.log(err);
});
