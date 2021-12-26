let username = document.getElementById("username");
let password = document.getElementById("password");
let loginButton = document.getElementById("login");


loginButton.onclick = function(req, res) {
    if (username.value == "" || password.value == "") {
        alert("Please fill out details!");
    } else {
        document.getElementById("login").submit();
    }

}

function randomString(i) {
    let rnd = "";
    while (rnd.length<i)
    rnd += Math.random().toString(36).substring(0,i)
}
randomString(36)

const create_game = document.getElementById("game")
create_game.addEventListener('click', event => {
    JSON.stringify($(form).serializeArray().reduce((acc, f) => {
        acc[f.name] = f.value
        return acc
    }, {}))
});

const join_game = document.getElementById("join_game")
join_game.addEventListener('click', event => {
    JSON.stringify($(form).serializeArray().reduce((acc, f) => {
        acc[f.name] = f.value
        return acc
    }, {}))
});
const user = document.getElementById("profile")
user.addEventListener('click', event => {
    JSON.stringify($(form).serializeArray().reduce((acc, f) => {
        acc[f.name] = f.value
        return acc
    }, {}))
});

const login = document.getElementById("login")
login.addEventListener('click', event => {
    JSON.stringify($(form).serializeArray().reduce((acc, f) => {
        acc[f.name] = f.value
        return acc
    }, {}))
    console.log(login)
});