
//counts the length of elements 
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

//runs if clicked on a button
for (let i = 0; i < numberOfDrumButtons; i++) {
//selects the right button clicked
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
// generates the letter contained on the button to then make the right sound
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);   
        buttonAnimation(buttonInnerHTML);     
    } )
}

//runs if pressed a key then plays the right sound
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);     

});



//function to make the sound of the key
function makeSound(key) {
    switch (key) {
        case "w":
            let audioW = new Audio("sounds/crash.mp3");
            audioW.play();
            break;

        case "a":
            let audioA = new Audio("sounds/kick-bass.mp3");
            audioA.play();
            break;

        case "s":
            let audioS = new Audio("sounds/snare.mp3");
            audioS.play();
            break;

        case "d":
            let audioD = new Audio("sounds/tom-1.mp3");
            audioD.play();
            break;

        case "j":
            let audioJ = new Audio("sounds/tom-2.mp3");
            audioJ.play();
            break;
        
        case "k":
            let audioK = new Audio("sounds/tom-3.mp3");
            audioK.play();
            break;
        
        case "l":
            let audioL = new Audio("sounds/tom-4.mp3");
            audioL.play();
            break;
            
        default:
            console.log();
}
}


//function to create an effect when a key is pressed
function buttonAnimation(currentKey) {
    //selects the button
    let activeButton = document.querySelector("." + currentKey)
    //applies the class "pressed" to create the shadow effect
    activeButton.classList.add("pressed");
    //timeout to toggle off the shadow effect
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}