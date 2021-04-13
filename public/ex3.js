
const form_result=document.querySelector("form");
form_result.addEventListener("submit",e=>{
    e.preventDefault();

    const formData=new FormData(e.target);
    fetch("/api/articles",{
        method:"POST",
        body:formData
        
    })
    .then(response=>response.text())
    .then(reply=>{
        document.getElementById("confirmation").textContent=reply;
    })
    .catch(err=>{
        console.error(err.message);
    });
});
