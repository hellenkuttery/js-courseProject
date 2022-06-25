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
`
table.appendChild(row);
}








//Form-Submit and creating a new Object
const ui=new UI();
document.getElementById("course-form").addEventListener("submit",function(e){
console.log("hi")
    const courseName=document.getElementById("courseName").value ,
      instructor=document.getElementById("instructor").value,
      image=document.getElementById("image").value
      
const newCourse=new Courses(courseName,instructor,image)
console.log("hello",newCourse);
ui.addCourse(newCourse)
e.preventDefault();
})