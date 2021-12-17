function ajouterNom() {

const studentName = document.getElementById("studentInput").value;

const studentNameElement = `
<li class="list-group-item d-flex justify-content-between align-items-center">
${studentName}
</li>
`;

const studentList = document.getElementById("studentList");

studentList.innerHTML += studentNameElement;

document.getElementById("studentInput").value="";
}

document.getElementById("addStudent").addEventListener("click",ajouterNom);