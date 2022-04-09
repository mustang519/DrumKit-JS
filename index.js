var n = document.querySelectorAll(".drum").length;

for(var i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);

}

function handleClick(){
    this.style.color = "white";
    play_sound(this.innerHTML);
    buttonAnimation(this.innerHTML);
}

document.addEventListener("keypress", function(event){
    play_sound(event.key);
    buttonAnimation(event.key);
});

function play_sound(x){
    switch(x){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            console.log(x);

    }
}

function buttonAnimation(x){
    var active = document.querySelector("."+x);
    active.classList.add("pressed");
    setTimeout(function () {
        active.classList.remove("pressed");
    },100);
}



