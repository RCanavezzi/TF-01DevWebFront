document.addEventListener("DOMContentLoaded", async () => {

    const toDos = [
        "Estudar HTML semântico",
        "Praticar CSS básico",
        "Revisar seletores CSS",
        "Montar página com Flexbox",
        "Adicionar responsividade com media queries",
        "Estudar JavaScript básico",
        "Praticar manipulação do DOM",
        "Implementar evento de clique em botão",
        "Criar lista dinâmica com JS",
        "Estudar funções em JavaScript",
        "Aprender sobre arrays e objetos",
        "Praticar laços (for, while)",
        "Estudar fetch() e requisições HTTP",
        "Consumir API simples (ex: Pokédex)",
        "Criar mini-projeto integrando tudo"
    ];

    // Corrigido o ID do elemento, de "list-container" para "list-wrapper"
    const sectionListElement = document.getElementById("list-wrapper");
    const inputListAddElement = document.getElementById("list-add");
    const buttonListAddElement = document.getElementsByClassName("btn")[0];


    console.log(sectionListElement, inputListAddElement, buttonListAddElement)


    const ulElement = document.createElement("ul");

    ulElement.setAttribute("class", "list-names");

    sectionListElement.append(ulElement);

    // Corrigido o nome do array, de "names" para "toDos"
    toDos.forEach((toDo) => {
        const liElement = document.createElement("li");

        liElement.innerText = toDo;

        const buttonDeleteElement = document.createElement("button");
        buttonDeleteElement.innerHTML = "<strong>Excluir</strong>";

        buttonDeleteElement.addEventListener("click", (event) => {
            const currentTargetElement = event.currentTarget;
            const liParentElement = currentTargetElement.parentElement;
            liParentElement.remove();
        });

        liElement.append(" ", buttonDeleteElement);
        ulElement.append(liElement);
    });

    buttonListAddElement.addEventListener("click", (event) => {
        event.preventDefault();

        const inputValue = inputListAddElement.value;

        if (inputValue === "") {
            return;
        }

        const liElement = document.createElement("li");
        
        // Adiciona o texto do input ao novo item da lista
        liElement.innerText = inputValue; 

        const buttonDeleteElement = document.createElement("button");
        buttonDeleteElement.innerHTML = "<strong>Excluir</strong>";
        buttonDeleteElement.addEventListener("click", (event) => {
            const currentTargetElement = event.currentTarget;
            const liParentElement = currentTargetElement.parentElement;
            liParentElement.remove();
        });

        // Adiciona o botão de exclusão ao item da lista
        liElement.append(" ", buttonDeleteElement);

        ulElement.append(liElement);

        inputListAddElement.value = "";
    });

});