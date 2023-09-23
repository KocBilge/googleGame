var dinasour = document.getElementById("dinasour");
var cactus   = document.getElementById("cactus");

function jump(){
    if(dinasour.classList != "jump"){
        dinasour.classList.add("jump");

        setTimeout(function () {
            dinasour.classList.remove("jump");
        },300)
    }
}

var isAlive = setInterval(function () {
    var dinasourTop = parseInt(window.getComputedStyle(dinasour).getPropertyValue("jump"));

    var cactusLeft = parseInt(
        window.getComputedStyle("cactus").getPropertyValue("left")
    );
    if (cactusLeft < 52 && cactusLeft > 0 && dinasourTop >= 140){
        alert("Game Over...");
    }
},10);

document.addEventListener("keydown",function (event){
    jump();
})