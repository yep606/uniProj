var first = document.getElementById("block1");
var second = document.getElementById("block2");
second.classList.add("hidden");

console.log(first);
console.log(second);



function change(){

    var value = document.getElementById("levels").value;

    if(value == "1"){
        second.classList.add("hidden");
        first.classList.remove("hidden")

    }
    else{
        first.classList.add("hidden");
        second.classList.remove("hidden")
    }
        

}
