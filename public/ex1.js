const dataElements=document.querySelector("form");
dataElements.addEventListener("submit",e=>{
    e.preventDefault();

    const formData=new FormData(e.target);
    fetch("http://localhost:3000/ex1",{
        method:"POST",
        body:formData
    })
    .then(response=>response.text())
    .then(result=>{
        document.getElementById("data").textContent=result;
    })
    .catch(err=>{
        console.error(err.message);
    });

});
