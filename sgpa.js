function createSubjectForms() {
  const numSubjects = parseInt(document.getElementById("number").value, 10);

  // Get the form element to add subject forms
  const subjectsForm = document.getElementById("subjectsForm");
  const submit = document.getElementById("submit");

  // Clear any previously generated forms
  subjectsForm.innerHTML = "";

  // Generate and add the subject forms based on user input
  for (let i = 1; i <= numSubjects; i++) {
    // Create the form elements for each subject
    const subjectForm = document.createElement("form");
    subjectForm.classList.add("subject-form");

    const subjectLabel = document.createElement("label");
    subjectLabel.textContent = `Subject ${i} Grade. :`;

    const subjectInput = document.createElement("input");
    subjectInput.type = "text";
    subjectInput.classList.add("subject-grade");
    subjectInput.placeholder = "Enter the Grade";
    subjectInput.required = true;

    const creditsLabel = document.createElement("label");
    creditsLabel.textContent = `Subject ${i} Credits:`;

    const creditsInput = document.createElement("input");
    creditsInput.type = "number";
    creditsInput.classList.add("subject-credits");
    creditsInput.placeholder = "Enter the Credits";
    creditsInput.required = true;

    // Append the form elements to the subjectsForm
    subjectForm.appendChild(subjectLabel);
    subjectForm.appendChild(subjectInput);
    subjectForm.appendChild(creditsLabel);
    subjectForm.appendChild(creditsInput);

    subjectsForm.appendChild(subjectForm);
  }
  submit.innerHTML = "SUBMIT";
  subjectsForm.appendChild(submit);
  document.getElementById("main").style.display = "none";
  subjectsForm.style.display = "block";
  event.preventDefault();
}

// Function to calculate SGPA
function calculateSGPA() {
  const subjectForms = document.querySelectorAll(".subject-form");
  let totalCredits = 0;
  let totalWeightedCredits = 0;

  // Calculate the total weighted credits and total credits
  subjectForms.forEach((subjectForm) => {
    const gradeInput = subjectForm.querySelector(".subject-grade");
    const creditsInput = subjectForm.querySelector(".subject-credits");

    const grade = gradeInput.value.trim().toUpperCase();
    const credits = parseFloat(creditsInput.value);

    if (
      !isNaN(credits) &&
      grade &&
      (grade === "O" ||
        grade === "A+" ||
        grade === "A" ||
        grade === "B+" ||
        grade === "B" ||
        grade === "C+" ||
        grade === "C" ||
        grade === "F")
    ) {
      let creditPoints;
      switch (grade) {
        case "O":
          creditPoints = 10;
          break;
        case "A+":
          creditPoints = 9;
          break;
        case "A":
          creditPoints = 8;
          break;
        case "B+":
          creditPoints = 7;
          break;
        case "B":
          creditPoints = 6;
          break;
        case "C+":
          creditPoints = 5;
          break;
        case "C":
          creditPoints = 4;
          break;
        case "F":
          creditPoints = 0;
          break;
      }
      totalWeightedCredits += creditPoints * credits;
      totalCredits += credits;
    }
  });
  subjectsForm.style.display = "none";
  // Calculate SGPA
  const sgpa = totalWeightedCredits / totalCredits;
  const popup = document.getElementById("popup");
  if (sgpa) {
    document.getElementById("marks1").innerHTML = sgpa.toFixed(2);
  } else {
    document.getElementById("marks1").innerHTML =
      "O SCORE(You Missed Somethig)";
  }
  popup.style.display = "block";
}
function submit2() {
  popup.style.display = "none";
  subjectsForm.style.display = "block";
}
