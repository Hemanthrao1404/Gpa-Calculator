// Function to handle form submission for entering the number of completed semesters

function semnum1() {
  event.preventDefault();

  const numSemesters = parseInt(document.getElementById("semester").value, 10);

  // Show the semester marks form and hide the semnum1 form
  document.querySelector(".semnum2").style.display = "block";
  document.querySelector(".semnum1").style.display = "none";
  document.querySelector(".semnum2").style.display = "block";

  // Remove any previously generated semester inputs
  const semMarksForm = document.getElementById("semnum3");

  semMarksForm.innerHTML = "";

  // Generate and add the new semester input elements based on user input
  for (let i = 1; i <= numSemesters; i++) {
    const semInputDiv = document.createElement("div");
    semInputDiv.classList.add("sem-input");
    semInputDiv.innerHTML = `
      <h3>Semester ${i}</h3>
      <input type="number" max="10" min="2" style="width=40%;padding=80px" required />
    `;
    semMarksForm.appendChild(semInputDiv);
    document.getElementById("submit1").innerHTML = "Submit";
  }
}

// Function to handle form submission for entering semester marks
function semnum4() {
  event.preventDefault();
  // Get the input elements for all semesters
  const semesterInputs = document.querySelectorAll(
    '.sem-input input[type="number"]'
  );

  // Calculate CGPA and percentage based on entered marks
  let totalMarks = 0;
  let totalCredits = 0;
  let hasInvalidInput = false;
  document.querySelector(".semnum2").style.display = "none";

  semesterInputs.forEach((input) => {
    const marks = parseFloat(input.value);
    if (!isNaN(marks) && marks >= 0 && marks <= 10) {
      totalMarks += marks;
      totalCredits++;
    } else {
      hasInvalidInput = true;
    }
  });

  if (hasInvalidInput) {
    alert("Invalid input. Please enter marks between 0 and 10.");
    return;
  }

  const cgpa = totalMarks / totalCredits;
  const percentage = (totalMarks / (totalCredits * 10)) * 100;

  // Display the CGPA and percentage in the popup
  document.getElementById("mark").textContent = cgpa.toFixed(2);
  document.getElementById("mark2").textContent = percentage.toFixed(2) + "%";

  // Show the popup
  document.getElementById("popup").style.display = "block";
}

// Function to close the popup
function submit3() {
  document.getElementById("popup").style.display = "none";
  document.querySelector(".semnum2").style.display = "block";
}

// Add event listeners to the forms
document.getElementById("semnum").addEventListener("submit", semnum1);
document.getElementById("semnum12").addEventListener("submit", semnum4);
document.getElementById("popup").addEventListener("click", closePopup);
