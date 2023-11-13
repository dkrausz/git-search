const baseUrl = 'https://api.github.com/users/';

searchButton();

async function fetchUserData(user){
    const result = await fetch(`${baseUrl}${user}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    }).then((res) => {        
        if(!res.ok){
            window.location.replace("./src/pages/error.html");
        }
        return res.json();
    })
        
    return result;
}

function searchButton() {
    const button = document.querySelector(".index__button");
    const inputSearch = document.querySelector(".index__input");
    button.addEventListener("click", async() => {
       const user = await fetchUserData(inputSearch.value);
       const userData= JSON.stringify(user);
       localStorage.setItem("@githubUserInfo",userData);   
     location.replace("./src/pages/profile.html")
    });
}

// console.log(await fetchUserData("dkrausz"))    

