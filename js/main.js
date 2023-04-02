//Create an array to hold all of the students
let students = new Array();

//Create a constructor function for a student with appropriate properties and methods
function Student(fName,lName,program,enrollmentDate){
    this.fName = fName;
    this.lName = lName;
    this.program = program;
    this.enrollmentDate = enrollmentDate;
    this.alertDeleted = function(){
        alert(this.fName +' '+ this.lName + ' has been deleted')}
}

//Create a function for adding a student 
  function addStudent(){
     //Get the values from the input
    let studentFName = document.getElementById('firstName').value;
    let studentLName =  document.getElementById('lastName').value;
    let studentProgram =  document.getElementById('program').value;
    let studentEnrollmentDate = document.getElementById('enrollmentDate').valueAsDate;
    //Create a student object using the student constructor. Pass in four arguments for each of the input values
    let student = new Student(studentFName,studentLName,studentProgram,studentEnrollmentDate)
    //Create new elements in JavaScript
    let studentElement = document.createElement('div');
    let studentNameElement = document.createElement('p');
    let programElement = document.createElement('p');
    let enrollmentDateElement = document.createElement('p');

    //Add an onclick event that runs an anonymous function to rve this element
    studentElement.onclick = function(){
        this.remove();
        student.alertDeleted()
    }
    //Add the correct classes to the appropriate elements
     
    studentNameElement.classList.add('student-name');
    studentElement.classList.add('student')
    programElement.classList.add('program');
    enrollmentDateElement.classList.add('enrollment-date');

    //Add content to those elements
    studentNameElement.textContent = student.fName +' ' + student.lName;
    programElement.textContent = 'Program:' + ' ' + student.program;
    enrollmentDateElement.textContent =  'Enrollment Date:' + ' ' + student.enrollmentDate.toLocaleDateString();
   
    //Append the child elements to the student div
    studentElement.appendChild(studentNameElement);
    studentElement.appendChild(programElement);
    studentElement.appendChild(enrollmentDateElement);

    //Append the student div element to the correct div in the code
    let studentListElement = document.getElementById('students')
    studentListElement.append(studentElement);
    //Log the array of all student objects
    students.push(student)
    console.log(students)
    //Reset the form
    function resetForm()
    {
        document.getElementById('studentForm').reset();
    }
    resetForm()

 }


//This is a function that can be called to reset the form using the reset method that is part of the form element
function resetForm()
{
    document.getElementById('studentForm').reset();
}