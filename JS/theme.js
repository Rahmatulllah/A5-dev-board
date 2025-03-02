
const button = document.getElementById('change-bg-color');

function randomColor(){
 return "#" + Math.floor(Math.random() * 16777215).toString(16);
 
}

button.addEventListener('click',function(){
    document.body.style.backgroundColor = randomColor();
})