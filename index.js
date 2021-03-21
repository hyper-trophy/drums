document.addEventListener("keypress", eventHandler);
for(var i=0; i<7; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", eventHandler);
}

function eventHandler(key){
    var keypressed;
    if(key.type=="click"){
        keypressed=key.srcElement.innerHTML;
    }
    else if(key.type=="keypress"){
        keypressed=key.key;
    }
    switch (keypressed) {
        case 'w':
            var audio=new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'a':
            var audio=new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case 's':
            var audio=new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'd':
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'j':
            var audio=new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 'k':
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'l':
            var audio=new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            break;
    }
    document.querySelector("."+keypressed).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+keypressed).classList.remove("pressed");
    }, 200);
}