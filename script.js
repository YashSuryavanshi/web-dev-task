const studentsContainer = document.getElementById('students-container');

// Fetch the JSON data from the API endpoint
fetch('https://oa.cc.iitk.ac.in/Oa/Jsp/Photo/')
  .then(response => response.json())
  .then(data => {
    // Iterate over each student object
    data.forEach(student => {
      // Create a student element
      const studentElement = document.createElement('div');
      studentElement.classList.add('student');

      // Create an image element and set its source to the student's photo URL
      const imageElement = document.createElement('img');
      imageElement.src = student.photo;

      // Append the image element to the student element
      studentElement.appendChild(imageElement);

      // Create a text node with the student's name and append it to the student element
      const nameTextNode = document.createTextNode(student.name);
      studentElement.appendChild(nameTextNode);

      // Append the student element to the students container
      studentsContainer.appendChild(studentElement);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
