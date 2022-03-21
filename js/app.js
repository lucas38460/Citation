let baveu = document.getElementById('center');




fetch ('http://api.quotable.io/random').then((response)=>{
    console.log(response).json()
}).then((data)=>{
    console.log(data.content)
}).catch()