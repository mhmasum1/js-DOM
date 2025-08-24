// btn click hoice kine cheak korlam

const btnClicked = document.getElementById("btn-clicked")
    .addEventListener("click", function () {

        const commentsField = document.getElementById("comments-field").value;

        const mainContainer = document.getElementById("main-container")

        const pTagCreate = document.createElement("p");
        pTagCreate.textContent = commentsField;

        mainContainer.appendChild(pTagCreate);
        document.getElementById("comments-field").value = "";

    })



