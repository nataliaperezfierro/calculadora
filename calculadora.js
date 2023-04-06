const display = document.querySelector(".display")
const botones = document.querySelectorAll("button")

botones.forEach((item)=> { 
    item.onclick = () => {       
        if (item.id == "atras") {    
            display.innerText ="";
        } else if (item.id == "borrar") { 
            let string = display.innerText.toString();
            display.innerText = string.substring(0, string.length - 1);
        } else if (display.innerText != "" && item.id == "igual") {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == "" && item.id == "igual") {
            display.innerText = "VACIO";
            setTimeout(() => (display.innerText = ""), 500)
        } else {
                display.innerText += item.innerText;
        }
}})