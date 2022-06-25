function Courses(courseName,instructor,image){
this.courseName=courseName;
this.instructor=instructor;
this.image=image;
}


// Add a course
function UI(){}
UI.prototype.addCourse=function(newCourse){
const table=document.querySelector(".table");
const row=document.createElement("tr")

row.innerHTML=`
<td><img src="img/${newCourse.image}" alt="course picture" width="200px" border=2></td>
<td>${newCourse.courseName}</td>
<td>${newCourse.instructor}</td>
<td><img src="img/delete.png" alt="course picture"  width="50px"></td>
`
table.appendChild(row);
}

UI.prototype.clearFields=function(newCourse){
    document.getElementById("courseName").value="" ,   
    document.getElementById("instructor").value="",
    document.getElementById("image").value=""

}


// Show error or success message
UI.prototype.showMessage=function(message,className){
const alert=`
<div class="alert alert-${className}">
${message}
</div>
`
const row=document.querySelector("#saveBtn");
row.insertAdjacentHTML("beforeEnd",alert)
setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 2000);
}






//Form-Submit and creating a new Object
const ui=new UI();
document.getElementById("course-form").addEventListener("submit",function(e){
    const courseName=document.getElementById("courseName").value ,
      instructor=document.getElementById("instructor").value,
      image=document.getElementById("image").value
      const newCourse=new Courses(courseName,instructor,image)
      e.preventDefault();

      if (courseName===""|| instructor==="" || image===""){
            ui.showMessage("Please fill the fields","warning")
     }
    else{
        ui.addCourse(newCourse)
        ui.clearFields(newCourse)
     }

})