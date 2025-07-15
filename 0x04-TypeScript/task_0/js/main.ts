interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Hagos",
  lastName: "Beyene", 
  age: 34, 
  location: "Uganda"
};

const student2: Student = {
  firstName: "Semhar",
  lastName: "Beyene", 
  age: 31, 
  location: "canada"
};

const studentList: Student[] = [student1, student2];

const table = document.createElement("table");
table.border = "1";

const header = table.insertRow();
const nameHeader = header.insertCell();
nameHeader.innerText = "First Name";
const locationHeader = header.insertCell();
locationHeader.innerText = "Location";


studentList.forEach((student) => {
  const row = table.insertRow();
  const nameCell = row.insertCell();
  const locationCell = row.insertCell();

  nameCell.innerText = student.firstName;
  locationCell.innerText = student.location;
});

document.body.appendChild(table);