let contextMenu = document.getElementById("contextMenu")


//موقع راست کلیک فانکشن زیر اتفاق میوفته
function contextHandler(event) {
    event.preventDefault() // => برای چلوگیری از باز شدن منو دیفالت موقع راست کلیک

    if (contextMenu.style.display === "none") {

        contextMenu.style.left = event.pageX + "px"
        contextMenu.style.top = event.pageY + "px"
        contextMenu.style.display = "block"
    } else {
        contextMenu.style.left = event.pageX + "px"
        contextMenu.style.top = event.pageY + "px"
    }
}


//موقع کلیک چپ فانکشن زیر اتفاق میوفته 
function clickHandler() {
    contextMenu.style.display = "none"
}

//موقع فشردن دکمه اسکیپ این فانکشن اچرا میشه
function keyDownHandler(event) {
    // کد ازکی دکمه اسکیپ 32 هست

    if (event.keyCode === 32) {
        contextMenu.style.display = "none"
    }
}

document.body.addEventListener("contextmenu", contextHandler) // برای راست کلیک => منو باز میشه
document.body.addEventListener("click", clickHandler)  //  برای کلیک (چپ) => منو هاید میشه
document.body.addEventListener("keypress", keyDownHandler)  // برای فشرده شدن دکمه اسکیپ => منو هاید میشه
