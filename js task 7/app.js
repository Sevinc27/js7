let buton = document.getElementById("buton");
let count = 1;
let tf = true; 
buton.addEventListener("click", () =>{
    buton.textContent = `Click me ${count}`;
    if (tf) {
        count++;
        if (count > 9) {
            tf = false; 
        }
    } else {
        count--;
        if (count === 1) {
            tf= true; 
        }
    }
});