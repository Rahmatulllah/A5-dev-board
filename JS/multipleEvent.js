let buttons = document.querySelectorAll(".completed-btn");

buttons.forEach(function(button){
button.addEventListener("click",function(){
          alert("board updated successfully");

      let taskNumberField = document.getElementById("task-field");

      let taskNumber = parseInt(taskNumberField.innerText);
      taskNumberField.innerText = taskNumber - 1;


      let navNumberField = document.getElementById("nav-number-field");
       
      let navNumber = parseInt(navNumberField.innerText);
      navNumberField.innerText = navNumber + 1;

      });     
});