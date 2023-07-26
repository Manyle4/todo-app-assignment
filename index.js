let icon = document.getElementById('icon');

icon.onclick = function(){
    document.body.classList.toggle("dark_mode");
    if(document.body.classList.contains("dark_mode")){
        icon.src = "assets/icon-sun.svg";
    }
    else{
        icon.src = "assets/icon-moon.svg";
    }
}

document.addEventListener("click", updateCheckedCount);

let listContainer = document.getElementById("list_container");
function addTask(){
    if(create.value === ''){
        alert("You must enter something!");
    }
    else{
        let taskdiv = document.createElement("div");
        taskdiv.classList.add("taskdiv");
        let taskdiv2 = document.createElement("div");
        taskdiv2.classList.add("taskdiv2");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("check");
        let li = document.createElement("li");
        li.innerHTML = create.value;
        li.classList.add("list");
        let cross = document.createElement("img");
        cross.src = "assets/icon-cross.svg";
        cross.classList.add("cross");

        cross.addEventListener("click", function () {
            let parentDiv = this.parentElement;
            parentDiv.remove();
          })

        taskdiv.appendChild(checkbox);
        taskdiv.appendChild(li);
        taskdiv2.appendChild(taskdiv);
        taskdiv2.appendChild(cross);
        listContainer.appendChild(taskdiv2);
    }
    create.value = "";
}

function updateCheckedCount() {
    const checkedCount = countCheckedCheckboxes();
    console.log('Number of checked checkboxes:', checkedCount);
}

  function countCheckedCheckboxes() {
    const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    return checkedCheckboxes.length;
}

  updateCheckedCount();