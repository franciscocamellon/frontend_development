let questionSixContainer = document.getElementById('q6');

function createHtmlElement(tag, parent, properties) {
    let divContainer = document.createElement('div');
    let htmlElement = document.createElement(tag);
    if (properties) {
        Object.entries(properties).forEach(([key, value]) => {
            htmlElement.setAttribute(key, value)
        });
    }
    
    divContainer.appendChild(htmlElement);
    parent.appendChild(divContainer);
    return htmlElement
};

let loginLabel = createHtmlElement('label', questionSixContainer, {'for': 'username'});
loginLabel.innerText = "Login";
let notLoggedDiv = createHtmlElement('div', questionSixContainer, {'id':'nao_logado', 'visibility':'hidden'})
let user = createHtmlElement('input', questionSixContainer, { 'id':'username', 'class': 'input-text', 'type': 'text', 'placeholder': 'username', 'required': 'true' });
let password = createHtmlElement('input', questionSixContainer, { 'id':'password', 'class': 'input-text', 'type': 'password', 'placeholder': 'password', 'required': 'true' });
let loginButton = createHtmlElement('input', questionSixContainer, { 'class': 'input-button', 'type': 'button', 'value': 'Login', 'onclick': 'logar()' });
notLoggedDiv.appendChild(loginLabel)
notLoggedDiv.appendChild(user)
notLoggedDiv.appendChild(password)
notLoggedDiv.appendChild(loginButton)
    
let registerLabel = createHtmlElement('label', questionSixContainer, {'for': 'new_user'});
registerLabel.innerText = "Novo usuário";
let register = createHtmlElement('input', questionSixContainer, { 'id':'new_user', 'class': 'input-text', 'type': 'text', 'placeholder': 'username', 'required': 'true' });
let registerPassword = createHtmlElement('input', questionSixContainer, { 'id':'new_password', 'class': 'input-text', 'type': 'password', 'placeholder': 'password', 'required': 'true' });
let registerButton = createHtmlElement('input', questionSixContainer, { 'class': 'input-button', 'type': 'button', 'value': 'Cadastrar', 'onclick': 'criarUsuarioNovo()' });
notLoggedDiv.appendChild(registerLabel)
notLoggedDiv.appendChild(register)
notLoggedDiv.appendChild(registerPassword)
notLoggedDiv.appendChild(registerButton)

let messageDiv = createHtmlElement('div', questionSixContainer, {'id':'messages'})
let loggedDiv = createHtmlElement('div', questionSixContainer, {'id':'logado', 'visibility':'hidden'})
let loggedDiv2 = createHtmlElement('div', questionSixContainer, {})
loggedDiv2.innerText = "Logado"
loggedDiv.appendChild(loggedDiv2)
let logoutButton = createHtmlElement('input', questionSixContainer, { 'class': 'input-button', 'type': 'button', 'value': 'Deslogar', 'onclick': 'deslogar()' });
loggedDiv.appendChild(logoutButton)

function isLogged() {
    return window.localStorage.getItem("login");
  }
  
  function deslogar() {
    naoLogadoElement = document.getElementById("nao_logado");
    logadoElement = document.getElementById("logado");
  
    window.localStorage.removeItem("login");
    naoLogadoElement.style.visibility = "visible";
    logadoElement.style.visibility = "hidden";
  }
  
  function logar() {
    naoLogadoElement = document.getElementById("nao_logado");
    logadoElement = document.getElementById("logado");
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let users = [];
    if (window.localStorage.getItem("users")) {
      users = JSON.parse(window.localStorage.getItem("users"));
    }
    for (let i = 0; i < users.length; i++) {
      if (users[i].username == username && users[i].password == password) {
        window.localStorage.setItem(
          "login",
          document.getElementById("username").value
        );
        naoLogadoElement.style.visibility = "hidden";
        logadoElement.style.visibility = "visible";
        break;
      }
    }
  }
  
  function criarUsuarioNovo() {
    let username = document.getElementById("new_user").value;
    let password = document.getElementById("new_password").value;
    let messages = document.getElementById("messages");
    let users = [];
    if (window.localStorage.getItem("users")) {
      users = JSON.parse(window.localStorage.getItem("users"));
    }
  
    users.push({ username: username, password: password });
    window.localStorage.setItem("users", JSON.stringify(users));
    messages.innerHTML = "<div>Usuario criado!</div>";
  }