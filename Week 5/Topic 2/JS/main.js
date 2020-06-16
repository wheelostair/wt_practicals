
async function getUserData (uname) {
    
        const user = await fetch("https://api.github.com/users/"+uname);
        const userData = await user.json();
        
        document.querySelector('#avatar').setAttribute('src', userData.avatar_url);
        document.querySelector('#info').innerHTML = `<strong> bio:</strong> ${userData.bio} <strong> followers: </strong> ${userData.follwers} `
}

window.addEventListener('DOMContentLoaded', () => {
    
})


var formInput = document.getElementById("gitForm")
    formInput.addEventListener("submit", e => {
        e.preventDefault()
        var userName = document.getElementById("userName").value
        getUserData(userName)
    })