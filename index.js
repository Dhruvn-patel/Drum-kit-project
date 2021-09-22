var lengthofbutton = document.querySelectorAll(".drum").length;

for (var i = 0; i < lengthofbutton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {


        var btninnerhtml = this.innerHTML;

        makesound(btninnerhtml);

        animationbtn(btninnerhtml);

        //keyboard press key generate sound

        //event gives information like which key press and other details..
        document.addEventListener("keypress", function(event) {
            var keyname = event.key;
            makesound(keyname);
            animationbtn(keyname);

        })

    });
}

//button press 
function makesound(key) {
    switch (key) {
        case "w":
            var song = new Audio("sounds/crash.mp3");
            song.play();
            break;

        case "a":
            var song = new Audio("sounds/kick-bass.mp3");
            song.play();
            break;
        case "s":
            var song = new Audio("sounds/snare.mp3");
            song.play();
            break;
        case "d":
            var song = new Audio("sounds/tom-1.mp3");
            song.play();
            break;
        case "j":
            var song = new Audio("sounds/tom-2.mp3");
            song.play();
            break;
        case "k":
            var song = new Audio("sounds/tom-3.mp3");
            song.play();
            break;
        case "l":
            var song = new Audio("sounds/tom-4.mp3");
            song.play();
            break;

    }
}

//animationbtn
function animationbtn(btninnervalue) {

    var animbtn = document.querySelector("." + btninnervalue);

    animbtn.classList.add("pressed");

    //timeout animation 
    setTimeout(function() {
        animbtn.classList.remove("pressed");
    }, 100);
}