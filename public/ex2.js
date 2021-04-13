const tarvel_info=
    {
        name:"Tanay",
        countries:[
            {
                name:"US",
                year:2021
            },
            {
                name:"Russia",
                year:2017
            },
            {
                name:"Turkey",
                year:2019
            },
            {
                name:"Switzerland",
                year:2016
            },
            {
                name:"Italy",
                year:2016
            }
        ],

    }

const form_result=document.querySelector("form");
form_result.addEventListener("submit",e=>{
    e.preventDefault();
    
fetch("/api/countries",{
    method:"POST",
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
    },
    body:JSON.stringify(tarvel_info)
})
.then(response=>response.text())
.then(display=>{
    document.getElementById("message").textContent=display;
})
.catch(err=>{
    console.error(err.message);
});

});