const upArrow = document.getElementById("upArrow");
const downArrow = document.getElementById("downArrow");
const slide = document.getElementById("slide");

let x = 0;
upArrow.addEventListener("click", () => {
    if(x> "-900"){
        x = x - 300;
        slide.style.top = x + "px";
    }

});
downArrow.addEventListener("click", () => {
    if(x < "0"){
        x = x + 300;
        slide.style.top = x + "px";
    }

});
