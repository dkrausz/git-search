const baseUrl = 'https://api.github.com/users/';

searchButton();

async function fetchUserData(user) {
    const userInfo = await fetch(`${baseUrl}${user}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
        if (userInfo.ok) {
            console.log(userInfo);
            const userData = await userInfo.json();
            console.log(userData);
            localStorage.setItem("@githubUserInfo", JSON.stringify(userData));
            location.replace("./src/pages/profile.html");
        } else {
            window.location.replace("./src/pages/error.html");
        }
  
}

function searchButton() {
    const button = document.querySelector(".index__button");
    const inputSearch = document.querySelector(".index__input");
    button.addEventListener("click", async () => {
        await fetchUserData(inputSearch.value);


    });
}

// console.log(await fetchUserData("dkrausz"))    

