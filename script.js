// Pegando a referência de cada ID
const form = document.getElementById("form");
const nomeCompleto = document.getElementById("nome");
const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const senha = document.getElementById("senha");
const confirmacaoSenha = document.getElementById("confirmacaoSenha");

/*  Colocando um evento dentro do formulario, do tipo submit, que recebe o evento "preventDefault" 
    para prevenir o comportamento padrão da página de recarregar
    ***Utilizamos o preventDefault para controlar o quê e como sera enviado do nosso formulário
*/
form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
});

//Evento para quando eu tirar o foco do input, a validação de erro sair
//blur é quando você está no foco e tira o foco do input
nome.addEventListener("blur", () => {
  checkInputNome();
});

usuario.addEventListener("blur", () => {
  checkInputUsuario();
});

email.addEventListener("blur", () => {
  checkInputEmail();
});

telefone.addEventListener("blur", () => {
  checkInputTelefone();
});

senha.addEventListener("blur", () => {
  checkInputSenha();
});

confirmacaoSenha.addEventListener("blur", () => {
  checkInputConfirmaSenha;
});

// VALIDACÕES
function checkInputNome() {
  const nomeValue = nome.value;

  if (nomeValue === "") {
    errorInput(nome, "Nome completo obrigatório");
  } else {
    const formItem = nome.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputUsuario() {
  const usuarioValue = usuario.value;

  if (usuarioValue === "") {
    errorInput(usuario, "Nome de usuário obrigatório");
  } else {
    const formItem = usuario.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputEmail() {
  const emailValue = email.value;

  if (emailValue === "") {
    errorInput(email, "Email obrigatório");
  } else {
    const formItem = email.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputTelefone() {
  const telefoneValue = telefone.value;

  if (telefoneValue === "") {
    errorInput(telefone, "Telefone obrigatório");
  } else {
    const formItem = telefone.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputSenha() {
  const senhaValue = senha.value;

  if (senhaValue === "") {
    errorInput(senha, "Senha obrigatória");
  } else if (senhaValue.length < 8) {
    errorInput(senha, "A senha deve conter no mínimo 8 caractéres");
  } else {
    const formItem = senha.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputConfirmaSenha() {
  const senhaValue = senha.value;
  const confirmaSenhaValue = confirmacaoSenha.value;

  if (confirmaSenhaValue === "") {
    errorInput(confirmacaoSenha, "Digite a senha novamente");
  } else if (confirmaSenhaValue !== senhaValue) {
    errorInput(confirmacaoSenha, "As senhas devem ser iguais");
  } else {
    const formItem = confirmacaoSenha.parentElement;
    formItem.className = "form-content";
  }
}

//Nessa função chamo todas as validações do formulário
function checkForm() {
  checkInputNome();
  checkInputUsuario();
  checkInputEmail();
  checkInputTelefone();
  checkInputSenha();
  checkInputConfirmaSenha();

  //Validação para barrar o formulário com erro de ser enviado
  const formItems = form.querySelectorAll(".form-content");

  //O every no JS vai verificar se todos os elementos do nosso array passam por alguma condição que colocarmos,
  //e dentro dele eu recebo uma função anonima que eu tenho acesso a cada "item"/ "elemento"
  //e dou um return em todo item/elemento que a classe estiver como "form-content"
  const isValid = [...formItems].every((item) => {
    return item.className === "form-content";
  });

  if (isValid) {
    alert("Cadastrado com sucesso!");
  }
}

function errorInput(input, message) {
  const formIten = input.parentElement;
  const textMessage = formIten.querySelector("a");

  textMessage.innerText = message;
  formIten.className = "form-content error";
}
