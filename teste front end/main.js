const cep = document.querySelector("#cep");

const showData = (result) => {
  for (const campo in result) {
    if (document.querySelector("#" + campo)) {
      document.querySelector("#" + campo).value = result[campo];
    }
  }
};

cep.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    let search = cep.value.replace("-", "");
    const options = {
      method: "GET",
      mode: "cors",
      cache: "default",
    };
    //para criar a url vamos usar o fetch, ELA USA CRASE)
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
      .then((response) => {
        response.json().then((data) => showData(data));
      })
      .catch((error) =>
        alert("CEP" + " " + cep.value + " " + "não foi encontrado!")
      );
  }
});

const btn = document.querySelector("#send");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let search = cep.value.replace("-", "");
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };
  //para criar a url vamos usar o fetch, ELA USA CRASE)
  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then((response) => {
      response.json().then((data) => showData(data));
    })
    .catch((error) =>
      alert("CEP" + " " + cep.value + " " + "não foi encontrado!")
    );
});

//sempre que usarmos fetch vamos usar o course para mostrar que estamos usando servidores diferentes
//se der certo

//se der errado
