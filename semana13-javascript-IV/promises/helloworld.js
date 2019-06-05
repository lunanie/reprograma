const retornaPromise = () => {
    return new Promise((resolvePromise, reject)=>{
        setTimeout(()=>{
            resolvePromise("Hello World")   
        }, 2000)
    })
}

function job (){
    retornaPromise()
    .then(bunda => console.log(bunda))
}

job()