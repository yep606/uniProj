var mapArr = document.getElementsByClassName("map");

var selectedId = 0;

for(let i = 1; i < mapArr.length; i++){

    mapArr[i].classList.add("hidden");

}

function change(){

    var newSelectedId = document.getElementById("levels").value;

    mapArr[selectedId].classList.add("hidden");
    mapArr[newSelectedId].classList.remove("hidden");
    selectedId = newSelectedId;
        
}

