const API = "http://localhost:8080/students";
 
// Load students on page load
window.onload = () => {
  loadStudents();
};
 
// Fetch and display all students
function loadStudents() {
  fetch(API)
    .then(res => res.json())
    .then(data => {
      const tbody = document.querySelector("#studentTable tbody");
      tbody.innerHTML = ""; // Clear old rows
      data.forEach(student => {
        tbody.innerHTML += `
        
  <tr>
    <td>${student.id}</td>
   <td>${student.name}</td>
    <td>${student.age}</td>
    <td>${student.course}</td>
    <td>${student.email}</td>
    <td>
        <button class="action-btn edit-btn" onclick="editStudent(${student.id})">✏️ Edit</button>
         <button class="action-btn delete-btn" onclick="deleteStudent(${student.id})">🗑️ Delete</button>
    </td>
  </tr>`;
      });
    })
  .catch(error => {console.error("Error Loading student: ", error);

  });
}

   function ShowAddForm(){
    const modal = document.getElementById("formModal");
    modal.style.display = "block";

    document.getElementById("formTitile").innerText="Add Student";
    document.getElementById("StudentForm").reset();
    document.getElementById("studentId").value="";
    document.getElementById("formModal").style.display = "block";
   }

   function closeForm() {
    const modal=
    document.getElementById("formModal").style.display= "none";
    
   }

   document.getElementById("studentForm").atEventListener("submit", function(e) {e.preventDefault();

    const id= document.getElementById("studentId").value;
    const student = {
        name:
        document.getElementById("name").value,
        age: parseInt(document.getElementById("age").value),
        course: document.getElementById("course").value,
        email: document.getElementById("email").value
    };

    const method = id ? "PUT" : "POST";
    const url = id ? `${API}/${id}` : API; 

    fetch(url,{
        method: method,
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)
    })

    .then(() => {
        closeForm();
        loadStudents();
    })

    .catch(error => {
        alert("Errors saving students: " + error);
    });

   });

   function editStudent(id){
    fetch (`${API}/${id}`)
    .then(rest => rest.json())
    .then(student => {
    document.getElementById("formTitle").innerText="Edit Student";
    document.getElementById("studentId").value=student.id;
    document.getElementById("name").value = student.name;
    document.getElementById("age").value = student.age;
    document.getElementById("course").value = student.course;
    document.getElementById("email").value = student.email;
    document.getElementById("formModal").style.display = "block";
    })

     .catch(error => {
      alert("Error loading student: " + error);
     });
   }
      
// Delete student
function deleteStudent(id) {
  if (confirm("Are you sure you want to delete this student?")) {
    fetch(`${API}/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        loadStudents();
      })
      .catch(error => {
        alert("Error deleting student: " + error);
      });
  }
}
