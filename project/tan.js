var elements = document.querySelectorAll('.sqdOP.L3NKy._8A5w5');
console.log(elements);

var i = 1;

function myLoop() {

    setTimeout(() => {
        
        var elem = elements.item(i);
        elem.click();

        setTimeout(() =>{
            unfollow();
        }, 4000);

        i++;

        if(i < elements.length){
            myLoop();
        }

    }, 9000);

}
function unfollow(){
    document.querySelector('.aOOlW.-Cab_').click();
}
myLoop();

