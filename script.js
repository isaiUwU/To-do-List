const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");

input.addEventListener("keydown", (event) => {
    if(event.code == "Enter")
        addItem();
})

function addItem() {
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");

    divParent.className = "item";
    divParent.innerHTML = '<div>'+input.value+'</div>';
    divParent.addEventListener("mouseenter", () => {
        trashIcon.style.visibility = "visible";
    })
    divParent.addEventListener("mouseleave", () => {
        trashIcon.style.visibility = "hidden";
    })
  
    checkIcon.className = "fa-solid fa-square-check";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click", () => {checkIcon.style.color = "limegreen";
    })

    divChild.appendChild(checkIcon);

    trashIcon.className = "fa-solid fa-trash";
    trashIcon.style.visibility = "hidden";
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click", () => {
        divParent.remove();
    })

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = '';
}