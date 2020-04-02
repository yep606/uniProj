var map = document.getElementById("map");
second.classList.add("hidden");

console.log(first);
console.log(second);



function change(){

    var value = document.getElementById("levels").value;

    if(value == "1"){
        map.classList.remove("hidden")

    }
    else{
        map.classList.add("hidden");
    
    }
        

}
