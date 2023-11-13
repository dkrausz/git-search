

function redirectToHomePage(){
    const button = document.querySelector("button");

    button.addEventListener("click",()=>{
        location.replace("../../index.html")
    });
}

redirectToHomePage();