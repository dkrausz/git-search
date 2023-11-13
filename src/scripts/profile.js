const baseUrl = 'https://api.github.com/users/';

const getUserFromLocalStorage=()=> {
    const user = JSON.parse(localStorage.getItem("@githubUserInfo"));
    return user;
}
function renderUserInfo(user){
const profileImg = document.querySelector(".profile__image");
const userName = document.querySelector(".profile__username");
profileImg.src = (user.avatar_url);
userName.innerText= user.name; 
    
}
function redirectToHomePage(){
    const button = document.querySelector("button");

    button.addEventListener("click",()=>{
        localStorage.clear();
        location.replace("../../index.html")
    });
}

async function renderUserRepos(){
    const login = getUserFromLocalStorage().login;
    const ul = document.querySelector("ul");
    ul.innerHTML='';
    const repositorios = await fetch(`${baseUrl}${login}/repos`).then((res)=>
         res.json());
    
    console.log(repositorios);
    repositorios.forEach((item)=>{
        ul.appendChild(creatRaposCard(item));
    })
} 


function creatRaposCard(repos){
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    const text = document.createElement("p");
    const link = document.createElement("a");

    h4.innerText = repos.name;
    text.innerText= repos.description;
    link.innerText = "Repositório";
    link.addEventListener("click",()=>{
        open(`${repos.html_url}`,"_blank");
    })
    li.append(h4,text,link);
    return li;
}

redirectToHomePage();
renderUserInfo(getUserFromLocalStorage());
renderUserRepos();

// Crie uma constante chamada "ul" e selecione o elemento ul com a classe "profile__ul" na página profile.html.

// Faça um loop para percorrer o array armazenado na constante "repos".

// Dentro do loop, crie elementos das tags li, h4, p e a.

// No elemento h4, adicione o texto do elemento atual do loop, que está na chave "name".
// No elemento p, adicione o texto do elemento atual do loop que está na chave "description". 
// Antes de adicionar, verifique se o valor é nulo. Se for nulo, adicione o texto "Repositório sem descrição"; 
// caso contrário, adicione o valor da chave "description".
// No elemento a, adicione o texto "Repositório".
// No atributo href do elemento a, adicione o valor da chave "html_url" do elemento atual do loop. 
// Adicione também o atributo target com o valor "_blank" para abrir o link em uma nova guia.