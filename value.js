
document.body.style.backgroundColor = "yellow";
let input = document.getElementById("input_element");
let button = document.getElementById("button");
button.classList.add("btn", "btn-success");


input.value = "Saqlain";

// mei nay event listener lgaya h lakin hum simple function b lga sktay hein , or button mei onclick = "functionName()"
button.addEventListener("click",()=>{
    alert(`Your input value is: ${input.value} `);
    input.value = "";

});



